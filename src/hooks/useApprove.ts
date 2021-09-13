import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import { updateUserAllowance, fetchFarmUserDataAsync } from 'state/actions'
import { approve } from 'utils/callHelpers'
import { useAstroChef, useDust, useSpaceChef, useLottery } from './useContract'

// Approve a Farm
export const useApprove = (lpContract: Contract) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const AstroChefContract = useAstroChef()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, AstroChefContract, account)
      dispatch(fetchFarmUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, AstroChefContract])

  return { onApprove: handleApprove }
}

// Approve a Pool
export const useSpaceChefApprove = (lpContract: Contract, SpaceChefId) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const SpaceChefContract = useSpaceChef(SpaceChefId)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, SpaceChefContract, account)
      dispatch(updateUserAllowance(SpaceChefId, account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, SpaceChefContract, SpaceChefId])

  return { onApprove: handleApprove }
}

// Approve the lottery
export const useLotteryApprove = () => {
  const { account } = useWeb3React()
  const dustContract = useDust()
  const lotteryContract = useLottery()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(dustContract, lotteryContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, dustContract, lotteryContract])

  return { onApprove: handleApprove }
}

// Approve an IFO
export const useIfoApprove = (tokenContract: Contract, spenderAddress: string) => {
  const { account } = useWeb3React()
  const onApprove = useCallback(async () => {
    const tx = await tokenContract.methods.approve(spenderAddress, ethers.constants.MaxUint256).send({ from: account })
    return tx
  }, [account, spenderAddress, tokenContract])

  return onApprove
}
