import { AutoColumn } from 'components/Column'
import DataTabs from 'components/Tabs'

import Metrics from './Metrics'
import Proposals from './Proposals'
import PublicOpinion from './PublicOpinion'

import ChainLogo from 'assets/svg/uniswap_logo.svg'
import AppBody from 'pages/AppBody'
import { IntroduceChain } from 'components/Introduce'
import { LightCard } from 'components/Card'

export default function UniswapDetail() {
  const tabData = [
    {
      label: 'Profile',
      content: (
        <LightCard padding={'24px'}>
          <iframe
            sandbox="allow-same-origin allow-scripts"
            src="https://docs.uniswap.org/protocol/introduction"
            width="100%"
            height="800"
            frameBorder={0}
          />
        </LightCard>
      ),
    },
    {
      label: 'Metrics',
      content: (
        <LightCard padding={'24px'}>
          <Metrics />
        </LightCard>
      ),
    },
    {
      label: 'Proposals',
      content: (
        <LightCard padding={'24px'}>
          <Proposals />
        </LightCard>
      ),
    },
    {
      label: 'Public opinion',
      content: (
        <LightCard padding={'24px'}>
          <PublicOpinion />
        </LightCard>
      ),
    },
  ]

  const chainInfo = {
    logo: ChainLogo,
    desc: `Uniswap is a popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance (DeFi) tokens.
    An example of an automated market maker (AMM), Uniswap launched in November 2018, but has gained considerable popularity this year thanks to the DeFi phenomenon and associated surge in token trading.
    Uniswap aims to keep token trading automated and completely open to anyone who holds tokens, while improving the efficiency of trading versus that on traditional exchanges.
    Uniswap creates more efficiency by solving liquidity issues with automated solutions, avoiding the problems which plagued the first decentralized exchanges.
    In September 2020, Uniswap went a step further by creating and awarding its own governance token, UNI, to past users of the protocol. This added both profitability potential and the ability for users to shape its future — an attractive aspect of decentralized entities. <a href='//uniswap.org' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/Uniswap',
      discordUri: '//discord.com/invite/FCfyBSbCU5',
      radditUri: '//www.reddit.com/r/UniSwap',
    },
    contractUri: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  }

  return (
    <AppBody {...{ maxWidth: '1440px' }}>
      <AutoColumn gap="65px">
        <IntroduceChain {...chainInfo} />
        <DataTabs data={tabData} />
      </AutoColumn>
    </AppBody>
  )
}
