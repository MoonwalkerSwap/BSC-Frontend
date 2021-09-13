import BigNumber from 'bignumber.js'
import { getDustAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's dust balance is at least the amount passed in
 */
const useHasDustBalance = (minimumBalance: BigNumber) => {
  const dustBalance = useTokenBalance(getDustAddress())
  return dustBalance.gte(minimumBalance)
}

export default useHasDustBalance
