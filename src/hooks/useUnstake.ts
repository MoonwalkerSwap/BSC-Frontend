import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { unstake, spaceChefUnstake, spaceChefEmegencyUnstake } from 'utils/callHelpers'
import { useAstroChef, useSpaceChef } from './useContract'

const useUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const astroChefContract = useAstroChef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(astroChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, astroChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

const ROCKETIDS = [5, 6, 3, 1, 22, 23]

export const useSpaceChefUnstake = (spaceChefId) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const astroChefContract = useAstroChef()
  const spaceChefContract = useSpaceChef(spaceChefId)
  const isOldRocket = ROCKETIDS.includes(spaceChefId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (spaceChefId === 0) {
        const txHash = await unstake(astroChefContract, 0, amount, account)
        console.info(txHash)
      } else if (isOldRocket) {
        const txHash = await spaceChefEmegencyUnstake(spaceChefContract, amount, account)
        console.info(txHash)
      } else {
        const txHash = await spaceChefUnstake(spaceChefContract, amount, decimals, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(spaceChefId, account))
      dispatch(updateUserBalance(spaceChefId, account))
      dispatch(updateUserPendingReward(spaceChefId, account))
    },
    [account, dispatch, isOldRocket, astroChefContract, spaceChefContract, spaceChefId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
