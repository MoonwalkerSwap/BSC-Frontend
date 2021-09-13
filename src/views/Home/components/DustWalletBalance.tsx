import React from 'react'
import { Text } from 'moonwalkerswap-uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getDustAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceDustBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const DustWalletBalance = () => {
  const TranslateString = useI18n()
  const dustBalance = useTokenBalance(getDustAddress())
  const busdBalance = new BigNumber(getBalanceNumber(dustBalance)).multipliedBy(usePriceDustBusd()).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text fontSize="36px" color="text" style={{ lineHeight: '54px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(dustBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      <CardBusdValue value={busdBalance} />
    </>
  )
}

export default DustWalletBalance
