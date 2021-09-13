import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceDustBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
 }
`
const DustWinnings = () => {
  const { claimAmount } = useTotalClaim()
  const dustAmount = getBalanceNumber(claimAmount)
  const claimAmountBusd = new BigNumber(dustAmount).multipliedBy(usePriceDustBusd()).toNumber()

  return (
    <Block>
      <CardValue value={dustAmount} lineHeight="1.5" />
      <CardBusdValue value={claimAmountBusd} decimals={2} />
    </Block>
  )
}

export default DustWinnings
