import { usePriceDustBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalDust = getBalanceNumber(totalRewards)
  const dustPriceBusd = usePriceDustBusd()

  return totalDust * dustPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
