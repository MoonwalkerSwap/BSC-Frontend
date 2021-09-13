import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, spaceChefStake, spaceChefStakeBnb } from 'utils/callHelpers'
import { useAstroChef, useSpaceChef } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const astroChefContract = useAstroChef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(astroChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, astroChefContract, pid],
  )

  return { onStake: handleStake }
}

export const useSpaceChefStake = (spaceChefId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const astroChefContract = useAstroChef()
  const spaceChefContract = useSpaceChef(spaceChefId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (spaceChefId === 0) {
        await stake(astroChefContract, 0, amount, account)
      } else if (isUsingBnb) {
        await spaceChefStakeBnb(spaceChefContract, amount, account)
      } else {
        await spaceChefStake(spaceChefContract, amount, decimals, account)
      }
      dispatch(updateUserStakedBalance(spaceChefId, account))
      dispatch(updateUserBalance(spaceChefId, account))
    },
    [account, dispatch, astroChefContract, isUsingBnb, spaceChefContract, spaceChefId],
  )

  return { onStake: handleStake }
}

export default useStake
