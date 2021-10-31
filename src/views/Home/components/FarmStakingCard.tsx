import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from 'moonwalkerswap-uikit'
import { useWeb3React } from '@web3-react/core'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import DustHarvestBalance from './DustHarvestBalance'
import DustWalletBalance from './DustWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/moon/cardbg.svg');
  background-repeat: no-repeat;
  min-height: 376px;
`
const StyledUnlockButton = styled(UnlockButton)`

  background: ${({ theme }) => theme.colors.button};
  color: #ffffff;
  width: 100%;
  border-radius: 7px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textDisabled};
  font-size: 18px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(542, 'Pool Staking')}
        </Heading>
        <CardImage src="/images/moon/wings.svg" alt="wings logo" width={64} height={64} />
        <Block>
          <Label>{TranslateString(544, 'DUST to Harvest')}:</Label>
          <DustHarvestBalance />
        </Block>
        <Block>
          <Label>{TranslateString(546, 'DUST in Wallet')}:</Label>
          <DustWalletBalance />
        </Block>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              width="100%"

            >
              {pendingTx
                ? TranslateString(548, 'Collecting DUST')
                : TranslateString(532, `Harvest all (${balancesWithValue.length})`, {
                    count: balancesWithValue.length,
                  })}
            </Button>
          ) : (
            <StyledUnlockButton width="100%" />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
