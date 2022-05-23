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
        href: 'bsc-moonwalker-swap-gz99tl5z4-cryptocoder50.vercel.app/swap',
      },
      {
        label: 'Liquidity',
        href: 'bsc-moonwalker-swap-gz99tl5z4-cryptocoder50.vercel.app/pool',
      },
    ],
  },
   {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
   },
   {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
   },
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
        href: 'bsc-swap-info-grte2j46w-cryptocoder50.vercel.app',
      },
      {
        label: 'Tokens',
        href: 'bsc-swap-info-grte2j46w-cryptocoder50.vercel.app/tokens',
      },
      {
       label: 'Pairs',
       href: 'bsc-swap-info-grte2j46w-cryptocoder50.vercel.app/pairs',
      },
      {
        label: 'Accounts',
        href: 'bsc-swap-info-grte2j46w-cryptocoder50.vercel.app/accounts',
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
        href: 'https://github.com/CryptoCoder50',
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
