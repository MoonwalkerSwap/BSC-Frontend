import { MenuEntry } from 'moonwalkerswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://bsc-swap.moonwalker.network',
      },
      {
        label: 'Liquidity',
        href: 'https://bsc-swap.moonwalker.network',
      },
    ],
  },
  // {
  //  label: 'Farms',
  //  icon: 'FarmIcon',
  //  href: '/farms',
  // },
  // {
  //  label: 'Pools',
  //  icon: 'PoolIcon',
  //  href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://bsc-info.moonwalker.network',
      },
      {
        label: 'Tokens',
        href: 'https://bsc-info.moonwalker.network/tokens',
      },
      {
       label: 'Pairs',
       href: 'https://bsc-info.moonwalker.network/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://bsc-info.moonwalker.network/accounts',
      },
    ],
  },
  {
     label: 'IFO',
     icon: 'IfoIcon',
     href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MoonWalkerJim',
      },
      {
        label: 'Docs',
        href: 'https://bsc-docs.moonwalker.network',
      },
      {
        label: 'Blog',
        href: 'https://moonastrojim.medium.com/',
      },
    ],
  },
]

export default config
