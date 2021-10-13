const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  dust: {
    symbol: 'DUST',
    address: {
      56: '0x3f4478013b11952942e6718c2d3a7761631b6769',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bsc-swap.moonwalker.network/tokens/dust',
  },
   sbt: {
    symbol: 'SBT',
    address: {
      56: '0x5656201e75f95de97338623940610df26b140dd6',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://swap.moonwalker.network/tokens/sbt',
  },
  wbnb: {
    symbol: 'WBNB',
    address: {
      56: '0x5751b2880d7fe4b1c9e7845ea58221456530afe7',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.binance.org/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://paxos.com/busd/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      56: '0x55d398326f99059ff775485246999027b3197955',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.binance.com/en/trade/BNB_USDT',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://info.binance.com/en/currencies/bitcoin-bep2',
  },
  safemoon: {
    symbol: 'SAFEMOON',
    address: {
      56: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://safemoon.net/',
  },
  shibafloki: {
    symbol: 'FLOKI',
    address: {
      56: '0x330540a9d998442dcbc396165d3ddc5052077bb1',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://shibafloki.com/',
  },
  band: {
    symbol: 'BAND',
    address: {
      56: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bandprotocol.com/',
  },
  eos: {
    symbol: 'EOS',
    address: {
      56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://eos.io',
  },
  xrp: {
    symbol: 'XRP',
    address: {
      56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ripple.com/xrp/',
  },
  minishiba: {
    symbol: 'MINISHIBA',
    address: {
      56: '0xeb35acbd23cf9d1c13d276815b9969effc5c878f',
      97: '',
    },
    decimals: 9,
    projectLink: 'https://www.minishibatoken.com/',
  },
  bch: {
    symbol: 'BCH',
    address: {
      56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bitcoincash.org/',
  },
  ltc: {
    symbol: 'LTC',
    address: {
      56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://litecoin.org/',
  },
  ada: {
    symbol: 'ADA',
    address: {
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://cardano.org',
  },
  atom: {
    symbol: 'ATOM',
    address: {
      56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://cosmos.network/',
  },
  xtz: {
    symbol: 'XTZ',
    address: {
      56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://tezos.com/',
  },
  ont: {
    symbol: 'ONT',
    address: {
      56: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ont.io/',
  },
  zec: {
    symbol: 'ZEC',
    address: {
      56: '0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://z.cash/',
  },
  dai: {
    symbol: 'DAI',
    address: {
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://makerdao.com/',
  },
  yfii: {
    symbol: 'YFII',
    address: {
      56: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dfi.money/#/',
  },
  prom: {
    symbol: 'PROM',
    address: {
      56: '0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://prometeus.io/',
  },
  dot: {
    symbol: 'DOT',
    address: {
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://polkadot.network/',
  },
  stm: {
    symbol: 'STM',
    address: {
      56: '0x71de20e0c4616e7fcbfdd3f875d568492cbe4739',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://swingby.network/',
  },
  ankr: {
    symbol: 'ANKR',
    address: {
      56: '0xf307910a4c7bbc79691fd374889b36d8531b08e3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.ankr.com',
  },
  link: {
    symbol: 'LINK',
    address: {
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://chain.link/',
  },
  burger: {
    symbol: 'BURGER',
    address: {
      56: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://burgerswap.org/',
  },
  sfp: {
    symbol: 'SFP',
    address: {
      56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.safepal.io/',
  },
  lina: {
    symbol: 'LINA',
    address: {
      56: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://linear.finance/',
  },
  twt: {
    symbol: 'TWT',
    address: {
      56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://trustwallet.com/',
  },
  alpha: {
    symbol: 'ALPHA',
    address: {
      56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://alphafinance.io/',
  },
  bifi: {
    symbol: 'BIFI',
    address: {
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://beefy.finance/',
  },
  yfi: {
    symbol: 'YFI',
    address: {
      56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://yearn.finance/',
  },
  uni: {
    symbol: 'UNI',
    address: {
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://uniswap.org/',
  },
  stax: {
    symbol: 'STAX',
    address: {
      56: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.stablex.finance',
  },
  fil: {
    symbol: 'FIL',
    address: {
      56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://filecoin.io/',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.centre.io/',
  },
  ctk: {
    symbol: 'CTK',
    address: {
      56: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://www.certik.foundation/',
  },
  nar: {
    symbol: 'NAR',
    address: {
      56: '0xa1303e6199b319a891b79685f0537d289af1fc83',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://narwhalswap.org/',
  },
  nya: {
    symbol: 'NYA',
    address: {
      56: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://nyanswop.org/',
  },
  iota: {
    symbol: 'IOTA',
    address: {
      56: '0xd944f1d1e9d5f9bb90b62f9d45e447d989580782',
      97: '',
    },
    decimals: 6,
    projectLink: 'https://www.iota.org/',
  },
  play: {
    symbol: 'PLAY',
    address: {
      56: '0x9a3077f34cc30f9bf8e93a0369119bae0113d9cc',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://polyplay.net/',
  },
  aave: {
    symbol: 'AAVE',
    address: {
      56: '0xfb6115445bff7b52feb98650c87f44907e58f802',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://aave.com/',
  },
  bat: {
    symbol: 'BAT',
    address: {
      56: '0x101d82428437127bf1608f699cd651e6abf9766e',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://basicattentiontoken.org/',
  },
  btt: {
    symbol: 'BTT',
    address: {
      56: '0x8595f9da7b868b1822194faed312235e43007b49',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bittorrent.com',
  },
  ctsi: {
    symbol: 'CTSI',
    address: {
      56: '0x8da443f84fea710266c8eb6bc34b71702d033ef2',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://cartesi.io/',
  },
  vai: {
    symbol: 'VAI',
    address: {
      56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
      97: '',
    },
    decimals: 18,
    projectLink: 'http://venus.io/',
  },
  psg: {
    symbol: 'PSG',
    address: {
      56: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  juv: {
    symbol: 'JUV',
    address: {
      56: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  math: {
    symbol: 'MATH',
    address: {
      56: '0xf218184af829cf2b0019f8e6f0b2423498a36983',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://mathwallet.org/',
  },
  reef: {
    symbol: 'REEF',
    address: {
      56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://reef.finance/',
  },
  og: {
    symbol: 'OG',
    address: {
      56: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  atm: {
    symbol: 'ATM',
    address: {
      56: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  asr: {
    symbol: 'ASR',
    address: {
      56: '0x80d5f92c2c8c682070c95495313ddb680b267320',
      97: '',
    },
    decimals: 2,
    projectLink: 'https://www.chiliz.com',
  },
  btcst: {
    symbol: 'BTCST',
    address: {
      56: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
      97: '',
    },
    decimals: 17,
    projectLink: 'http://www.1-b.tc/',
  },
  egld: {
    symbol: 'EGLD',
    address: {
      56: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://elrond.com/',
  },
  comp: {
    symbol: 'COMP',
    address: {
      56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://compound.finance/',
  },
  doge: {
    symbol: 'DOGE',
    address: {
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
      97: '',
    },
    decimals: 8,
    projectLink: 'https://dogecoin.com/',
  },
  mwk: {
    symbol: 'MWK',
    address: {
      56: '0x5751b2880d7fe4b1c9e7845ea58221456530afe7',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://bsc-swap.moonwalker.network/tokens/mwk',
  },
  ble: {
    symbol: 'BLE',
    address: {
      56: '0xbc26a7fff9b971ef3c8356f264f8d6a47aea0fba',
      97: '',
    },
    decimals: 12,
    projectLink: 'https://bsc-swap.moonwalker.network/tokens/ble',
  },
  dodo: {
    symbol: 'DODO',
    address: {
      56: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://dodoex.io/',
  },
}

export default tokens
