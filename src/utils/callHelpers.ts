import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

export const approve = async (lpContract, astroChefContract, account) => {
  return lpContract.methods
    .approve(astroChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (astroChefContract, pid, amount, account) => {
  if (pid === 0) {
    return astroChefContract.methods
      .enterStaking(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
      .send({ from: account, gas: 200000 })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return astroChefContract.methods
    .deposit(pid, new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spaceChefStake = async (spaceChefContract, amount, decimals = 18, account) => {
  return spaceChefContract.methods
    .deposit(new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString())
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spaceChefStakeBnb = async (spaceChefContract, amount, account) => {
  return spaceChefContract.methods
    .deposit()
    .send({ from: account, gas: 200000, value: new BigNumber(amount).times(new BigNumber(10).pow(18)).toString() })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (astroChefContract, pid, amount, account) => {
  if (pid === 0) {
    return astroChefContract.methods
      .leaveStaking(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
      .send({ from: account, gas: 200000 })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return astroChefContract.methods
    .withdraw(pid, new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spaceChefUnstake = async (spaceChefContract, amount, decimals = 18, account) => {
  // shit code: hard fix for old CTK and BLK
  if (spaceChefContract.options.address === '0xc33729b1870d2a296df7ef9d498f93a1d3d1a40e') {
    return spaceChefContract.methods
      .emergencyWithdraw()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }
  if (spaceChefContract.options.address === '0xc33729b1870d2a296df7ef9d498f93a1d3d1a40e') {
    return spaceChefContract.methods
      .emergencyWithdraw()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return spaceChefContract.methods
    .withdraw(new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString())
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spaceChefEmegencyUnstake = async (spaceChefContract, amount, account) => {
  return spaceChefContract.methods
    .emergencyWithdraw()
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const harvest = async (astroChefContract, pid, account) => {
  if (pid === 0) {
    return astroChefContract.methods
      .leaveStaking('0')
      .send({ from: account, gas: 200000 })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return astroChefContract.methods
    .deposit(pid, '0')
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spaceChefHarvest = async (spaceChefContract, account) => {
  return spaceChefContract.methods
    .deposit('0')
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spaceChefHarvestBnb = async (spaceChefContract, account) => {
  return spaceChefContract.methods
    .deposit()
    .send({ from: account, gas: 200000, value: new BigNumber(0) })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
