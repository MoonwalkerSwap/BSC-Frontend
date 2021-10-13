import { Ifo } from './types'

const ifos: Ifo[] = [
  {
    id: 'ble',
    address: '0xbc26a7fff9b971ef3c8356f264f8d6a47aea0fba',
    isActive: true,
    name: 'Billionaire Coin (BLE)',
    subTitle: 'AMM protocol incorporating multi-strategy yield optimization',
    description:
      'Billionaire Coin is a protocol that allows users to retain the stability of their asset positions and get maximum yields with minimal risk, including automated vault compounding and yield optimization strategies. BELT is the governance and incentivization token of Billionaire Coin. BLE will be distributed to all types of pools.',
    launchDate: 'Sept. 19',
    launchTime: '5PM UTC',
    saleAmount: '10,000,000 BLE',
    raiseAmount: '$50,000',
    dustToBurn: '$2,500,000',
    projectSiteUrl: 'https://billionairecoin.com',
    currency: 'DUST-BNB LP',
    currencyAddress: '0xed790f615f0dfe112828eb1c8cec9d1624dbd184',
    tokenDecimals: 12,
    tokenSymbol: 'BLE',
    releaseBlockNumber: 5493919,
    campaignId: '511080000',
  },
  {
    id: 'watch',
    address: '0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d',
    isActive: false,
    name: 'Yieldwatch (WATCH)',
    subTitle: 'A smart yield farming dashboard on BSC',
    description:
      'Yieldwatch is a smart yield farming dashboard on Binance Smart Chain that lets you monitor your liquidity pools, yield farming and token staking performance with fast and casual UI. The $WATCH token is a membership token, which is required to access advanced PRO features.',
    launchDate: 'Mar. 4',
    launchTime: '5PM SGT',
    saleAmount: '8,000,000 WATCH',
    raiseAmount: '$800,000',
    dustToBurn: '$400,000',
    projectSiteUrl: 'https://yieldwatch.net/',
    currency: 'DUST-BNB LP',
    currencyAddress: '0xed790f615f0dfe112828eb1c8cec9d1624dbd184',
    tokenDecimals: 18,
    tokenSymbol: 'WATCH',
    releaseBlockNumber: 5294924,
    campaignId: '511070000',
  },
  
]

export default ifos
