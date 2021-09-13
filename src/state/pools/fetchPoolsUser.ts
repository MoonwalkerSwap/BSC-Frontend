import { AbiItem } from 'web3-utils'
import poolsConfig from 'config/constants/pools'
import astroChefABI from 'config/abi/astroChef.json'
import spaceChefABI from 'config/abi/spaceChef.json'
import erc20ABI from 'config/abi/erc20.json'
import multicall from 'utils/multicall'
import { getAddress, getAstroChefAddress } from 'utils/addressHelpers'
import { getWeb3NoAccount } from 'utils/web3'
import BigNumber from 'bignumber.js'

// Pool 0, Dust / Dust is a different kind of contract (astro chef)
// BNB pools use the native BNB token (wrapping ? unwrapping is done at the contract level)
const nonBnbPools = poolsConfig.filter((p) => p.stakingToken.symbol !== 'BNB')
const bnbPools = poolsConfig.filter((p) => p.stakingToken.symbol === 'BNB')
const nonAstroPools = poolsConfig.filter((p) => p.spaceChefId !== 0)
const web3 = getWeb3NoAccount()
const astroChefContract = new web3.eth.Contract((astroChefABI as unknown) as AbiItem, getAstroChefAddress())

export const fetchPoolsAllowance = async (account) => {
  const calls = nonBnbPools.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'allowance',
    params: [account, getAddress(p.contractAddress)],
  }))

  const allowances = await multicall(erc20ABI, calls)
  return nonBnbPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.spaceChefId]: new BigNumber(allowances[index]).toJSON() }),
    {},
  )
}

export const fetchUserBalances = async (account) => {
  // Non BNB pools
  const calls = nonBnbPools.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'balanceOf',
    params: [account],
  }))
  const tokenBalancesRaw = await multicall(erc20ABI, calls)
  const tokenBalances = nonBnbPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.spaceChefId]: new BigNumber(tokenBalancesRaw[index]).toJSON() }),
    {},
  )

  // BNB pools
  const bnbBalance = await web3.eth.getBalance(account)
  const bnbBalances = bnbPools.reduce(
    (acc, pool) => ({ ...acc, [pool.spaceChefId]: new BigNumber(bnbBalance).toJSON() }),
    {},
  )

  return { ...tokenBalances, ...bnbBalances }
}

export const fetchUserStakeBalances = async (account) => {
  const calls = nonAstroPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'userInfo',
    params: [account],
  }))
  const userInfo = await multicall(spaceChefABI, calls)
  const stakedBalances = nonAstroPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.spaceChefId]: new BigNumber(userInfo[index].amount._hex).toJSON(),
    }),
    {},
  )

  // Dust / Dust pool
  const { amount: astroPoolAmount } = await astroChefContract.methods.userInfo('0', account).call()

  return { ...stakedBalances, 0: new BigNumber(astroPoolAmount).toJSON() }
}

export const fetchUserPendingRewards = async (account) => {
  const calls = nonAstroPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'pendingReward',
    params: [account],
  }))
  const res = await multicall(spaceChefABI, calls)
  const pendingRewards = nonAstroPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.spaceChefId]: new BigNumber(res[index]).toJSON(),
    }),
    {},
  )

  const pendingReward = await astroChefContract.methods.pendingDust('0', account).call()

  return { ...pendingRewards, 0: new BigNumber(pendingReward).toJSON() }
}
