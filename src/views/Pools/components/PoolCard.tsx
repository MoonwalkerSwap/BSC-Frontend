import BigNumber from 'bignumber.js'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, IconButton, useModal, AddIcon, Image } from 'moonwalkerswap-uikit'
import { useWeb3React } from '@web3-react/core'
import UnlockButton from 'components/UnlockButton'
import Label from 'components/Label'
import { useERC20 } from 'hooks/useContract'
import { useSpaceChefApprove } from 'hooks/useApprove'
import useI18n from 'hooks/useI18n'
import { useSpaceChefStake } from 'hooks/useStake'
import { useSpaceChefUnstake } from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import { getPoolApy } from 'utils/apy'
import { getAddress } from 'utils/addressHelpers'
import { useSpaceChefHarvest } from 'hooks/useHarvest'
import Balance from 'components/Balance'
import { PoolCategory } from 'config/constants/types'
import tokens from 'config/constants/tokens'
import { Pool } from 'state/types'
import { useGetApiPrice } from 'state/hooks'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import CompoundModal from './CompoundModal'
import CardTitle from './CardTitle'
import Card from './Card'
import OldSpacebarTitle from './OldSpacebarTitle'
import HarvestButton from './HarvestButton'
import CardFooter from './CardFooter'

const StyledUnlockButton = styled(UnlockButton)`

  background: ${({ theme }) => theme.colors.primary};
  color: #000000;
  width: 100%;
  border-radius: 7px;
`
const StyledButton = styled(Button)`
  color: #000000;
`

interface HarvestProps {
  pool: Pool
}

const PoolCard: React.FC<HarvestProps> = ({ pool }) => {
  const {
    spaceChefId,
    stakingToken,
    earningToken,
    harvest,
    poolCategory,
    totalStaked,
    startBlock,
    endBlock,
    isFinished,
    userData,
    stakingLimit,
  } = pool

  // Pools using native BNB may behave differently than pools using a token
  const isBnbPool = poolCategory === PoolCategory.BINANCE
  const TranslateString = useI18n()
  const stakingTokenContract = useERC20(stakingToken.address ? getAddress(stakingToken.address) : '')
  const { account } = useWeb3React()
  const { onApprove } = useSpaceChefApprove(stakingTokenContract, spaceChefId)
  const { onStake } = useSpaceChefStake(spaceChefId, isBnbPool)
  const { onUnstake } = useSpaceChefUnstake(spaceChefId)
  const { onReward } = useSpaceChefHarvest(spaceChefId, isBnbPool)

  // APY
  const rewardTokenPrice = useGetApiPrice(earningToken.symbol)
  const stakingTokenPrice = useGetApiPrice(stakingToken.symbol)
  const apy = getPoolApy(
    stakingTokenPrice,
    rewardTokenPrice,
    getBalanceNumber(pool.totalStaked, stakingToken.decimals),
    parseFloat(pool.tokenPerBlock),
  )

  const [requestedApproval, setRequestedApproval] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)

  const allowance = new BigNumber(userData?.allowance || 0)
  const stakingTokenBalance = new BigNumber(userData?.stakingTokenBalance || 0)
  const stakedBalance = new BigNumber(userData?.stakedBalance || 0)
  const earnings = new BigNumber(userData?.pendingReward || 0)

  const accountHasStakedBalance = stakedBalance?.toNumber() > 0
  const needsApproval = !accountHasStakedBalance && !allowance.toNumber() && !isBnbPool
  const isCardActive = isFinished && accountHasStakedBalance

  const convertedLimit = new BigNumber(stakingLimit).multipliedBy(new BigNumber(10).pow(earningToken.decimals))
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={stakingLimit && stakingTokenBalance.isGreaterThan(convertedLimit) ? convertedLimit : stakingTokenBalance}
      onConfirm={onStake}
      tokenName={stakingLimit ? `${stakingToken.symbol} (${stakingLimit} max)` : stakingToken.symbol}
      stakingTokenDecimals={stakingToken.decimals}
    />,
  )
  const [onPresentCompound] = useModal(
    <CompoundModal earnings={earnings} onConfirm={onStake} tokenName={stakingToken.symbol} />,
  )
  const poolImage = `${pool.earningToken.symbol}-${pool.stakingToken.symbol}.svg`.toLocaleLowerCase()
  const [onPresentWithdraw] = useModal(
    // eslint import/no-named-as-default
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={stakingToken.symbol}
      stakingTokenDecimals={stakingToken.decimals}
    />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, setRequestedApproval])

  return (
    <Card isActive={isCardActive} isFinished={isFinished && spaceChefId !== 0}>
      {isFinished && spaceChefId !== 0 && <PoolFinishedSash />}
      <div style={{ padding: '24px' }}>
        <CardTitle isFinished={isFinished && spaceChefId !== 0}>
         {earningToken.symbol} {TranslateString(348, 'Pool')}
        </CardTitle>
        <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <Image src={`/images/tokens/dust.png`} alt={earningToken.symbol} width={64} height={64} />
            {/* <Image src='/images/moon/circle.svg' alt={earningToken.symbol} width={64} height={64} /> */}
          </div>
          {account && harvest && (
            <HarvestButton
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          )}
        </div>
        <Label isFinished={isFinished && spaceChefId !== 0} text={TranslateString(330, `${earningToken.symbol} earned`)} />
        <StyledCardActions>
          {!account && <StyledUnlockButton />}
          {account &&
            (needsApproval ? (
              <div style={{ flex: 1 }}>
                <StyledButton disabled={isFinished || requestedApproval} onClick={handleApprove} width="100%">
                  {/* {`Approve ${stakingTokenName}`} */}
                  Approve Contract
                </StyledButton>
              </div>
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0)) || pendingTx}
                >
                  {`Unstake ${stakingToken.symbol}`}
                </Button>
                <StyledActionSpacer />
                (
                  <IconButton disabled={isFinished && spaceChefId !== 0} onClick={onPresentDeposit}>
                    <AddIcon color="white" />
                  </IconButton>
                )
              </>
            ))}
        </StyledCardActions>
        <StyledDetails>
          <div>{TranslateString(736, 'APR')}:</div>
          {isFinished || !apy ? (
            '-'
          ) : (
            <Balance fontSize="14px" isDisabled={isFinished} value={apy} decimals={2} unit="%" />
          )}
        </StyledDetails>
        <StyledDetails>
          <div style={{ flex: 1 }}>
            <span role="img" >
              <img src='/images/moon/barrel.png' alt='barrel' />{' '}
            </span>
            {TranslateString(384, 'Your Stake')}:
          </div>
          <Balance
            fontSize="14px"
            isDisabled={isFinished}
            value={getBalanceNumber(stakedBalance, stakingToken.decimals)}
          />
        </StyledDetails>
      </div>
      <CardFooter
        projectLink={earningToken.projectLink}
        decimals={stakingToken.decimals}
        totalStaked={totalStaked}
        startBlock={startBlock}
        endBlock={endBlock}
        isFinished={isFinished}
        poolCategory={poolCategory}
        tokenName={earningToken.symbol}
        tokenAddress={earningToken.address ? getAddress(earningToken.address) : ''}
        tokenDecimals={earningToken.decimals}
      />
    </Card>
  )
}

const PoolFinishedSash = styled.div`
  background-image: url('/images/pool-finished-sash.svg');
  background-position: top right;
  background-repeat: not-repeat;
  height: 135px;
  position: absolute;
  right: -24px;
  top: -24px;
  width: 135px;
`

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;
`

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  display: flex;
  color:  ${({ theme }) => theme.colors.textDisabled};
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`

export default PoolCard
