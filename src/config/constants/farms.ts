import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'DUST',
    lpAddresses: {
      97: '',
      56: '0x3f4478013b11952942e6718c2d3a7761631b6769',
    },
    token: tokens.dust,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'DUST-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.dust,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'PLAY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.play,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'ATOM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.atom,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'BIFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.bifi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'COMP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.comp,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'ONT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.ont,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'CTSI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.ctsi,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'BAND-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.band,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'XRP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.xrp,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF54eD454cD4AD1BD81969409BA0B64a518D08b78',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
