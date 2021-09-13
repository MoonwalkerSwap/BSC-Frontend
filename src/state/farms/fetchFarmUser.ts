import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import astrochefABI from 'config/abi/astroChef.json'
import multicall from 'utils/multicall'
import farmsConfig from 'config/constants/farms'
import { getAddress, getAstroChefAddress } from 'utils/addressHelpers'

export const fetchFarmUserAllowances = async (account: string) => {
  const astroChefAdress = getAstroChefAddress()

  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return { address: lpContractAddress, name: 'allowance', params: [account, astroChefAdress] }
  })

  const rawLpAllowances = await multicall(erc20ABI, calls)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string) => {
  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string) => {
  const astroChefAdress = getAstroChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: astroChefAdress,
      name: 'userInfo',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(astrochefABI, calls)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const fetchFarmUserEarnings = async (account: string) => {
  const astroChefAdress = getAstroChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: astroChefAdress,
      name: 'pendingDust',
      params: [farm.pid, account],
    }
  })

  const rawEarnings = await multicall(astrochefABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}
