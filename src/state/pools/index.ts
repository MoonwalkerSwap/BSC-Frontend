/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import poolsConfig from 'config/constants/pools'
import { fetchPoolsBlockLimits, fetchPoolsTotalStatking } from './fetchPools'
import {
  fetchPoolsAllowance,
  fetchUserBalances,
  fetchUserStakeBalances,
  fetchUserPendingRewards,
} from './fetchPoolsUser'
import { PoolsState, Pool } from '../types'

const initialState: PoolsState = { data: [...poolsConfig] }

export const PoolsSlice = createSlice({
  name: 'Pools',
  initialState,
  reducers: {
    setPoolsPublicData: (state, action) => {
      const livePoolsData: Pool[] = action.payload
      state.data = state.data.map((pool) => {
        const livePoolData = livePoolsData.find((entry) => entry.spaceChefId === pool.spaceChefId)
        return { ...pool, ...livePoolData }
      })
    },
    setPoolsUserData: (state, action) => {
      const userData = action.payload
      state.data = state.data.map((pool) => {
        const userPoolData = userData.find((entry) => entry.spaceChefId === pool.spaceChefId)
        return { ...pool, userData: userPoolData }
      })
    },
    updatePoolsUserData: (state, action) => {
      const { field, value, spaceChefId } = action.payload
      const index = state.data.findIndex((p) => p.spaceChefId === spaceChefId)
      state.data[index] = { ...state.data[index], userData: { ...state.data[index].userData, [field]: value } }
    },
  },
})

// Actions
export const { setPoolsPublicData, setPoolsUserData, updatePoolsUserData } = PoolsSlice.actions

export const fetchPoolsPublicDataAsync = () => async (dispatch) => {
  const blockLimits = await fetchPoolsBlockLimits()
  const totalStakings = await fetchPoolsTotalStatking()

  const liveData = poolsConfig.map((pool) => {
    const blockLimit = blockLimits.find((entry) => entry.spaceChefId === pool.spaceChefId)
    const totalStaking = totalStakings.find((entry) => entry.spaceChefId === pool.spaceChefId)
    return {
      ...blockLimit,
      ...totalStaking,
    }
  })

  dispatch(setPoolsPublicData(liveData))
}

export const fetchPoolsUserDataAsync = (account) => async (dispatch) => {
  const allowances = await fetchPoolsAllowance(account)
  const stakingTokenBalances = await fetchUserBalances(account)
  const stakedBalances = await fetchUserStakeBalances(account)
  const pendingRewards = await fetchUserPendingRewards(account)

  const userData = poolsConfig.map((pool) => ({
    spaceChefId: pool.spaceChefId,
    allowance: allowances[pool.spaceChefId],
    stakingTokenBalance: stakingTokenBalances[pool.spaceChefId],
    stakedBalance: stakedBalances[pool.spaceChefId],
    pendingReward: pendingRewards[pool.spaceChefId],
  }))

  dispatch(setPoolsUserData(userData))
}

export const updateUserAllowance = (spaceChefId: string, account: string) => async (dispatch) => {
  const allowances = await fetchPoolsAllowance(account)
  dispatch(updatePoolsUserData({ spaceChefId, field: 'allowance', value: allowances[spaceChefId] }))
}

export const updateUserBalance = (spaceChefId: string, account: string) => async (dispatch) => {
  const tokenBalances = await fetchUserBalances(account)
  dispatch(updatePoolsUserData({ spaceChefId, field: 'stakingTokenBalance', value: tokenBalances[spaceChefId] }))
}

export const updateUserStakedBalance = (spaceChefId: string, account: string) => async (dispatch) => {
  const stakedBalances = await fetchUserStakeBalances(account)
  dispatch(updatePoolsUserData({ spaceChefId, field: 'stakedBalance', value: stakedBalances[spaceChefId] }))
}

export const updateUserPendingReward = (spaceChefId: string, account: string) => async (dispatch) => {
  const pendingRewards = await fetchUserPendingRewards(account)
  dispatch(updatePoolsUserData({ spaceChefId, field: 'pendingReward', value: pendingRewards[spaceChefId] }))
}

export default PoolsSlice.reducer
