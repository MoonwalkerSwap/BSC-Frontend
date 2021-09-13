import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { spaceChefHarvest, spaceChefHarvestBnb, harvest } from 'utils/callHelpers'
import { useAstroChef, useSpaceChef } from './useContract'

export const useHarvest = (farmPid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const astroChefContract = useAstroChef()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(astroChefContract, farmPid, account)
    dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, farmPid, astroChefContract])

  return { onReward: handleHarvest }
}

export const useAllHarvest = (farmPids: number[]) => {
  const { account } = useWeb3React()
  const astroChefContract = useAstroChef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(astroChefContract, pid, account)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, farmPids, astroChefContract])

  return { onReward: handleHarvest }
}

export const useSpaceChefHarvest = (spaceChefId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const spaceChefContract = useSpaceChef(spaceChefId)
  const astroChefContract = useAstroChef()

  const handleHarvest = useCallback(async () => {
    if (spaceChefId === 0) {
      await harvest(astroChefContract, 0, account)
    } else if (isUsingBnb) {
      await spaceChefHarvestBnb(spaceChefContract, account)
    } else {
      await spaceChefHarvest(spaceChefContract, account)
    }
    dispatch(updateUserPendingReward(spaceChefId, account))
    dispatch(updateUserBalance(spaceChefId, account))
  }, [account, dispatch,  astroChefContract, isUsingBnb, spaceChefContract, spaceChefId])

  return { onReward: handleHarvest }
}
