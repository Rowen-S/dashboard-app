import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import DataTabs from 'components/Tabs'
import styled from 'styled-components/macro'
import { CopyContractAddress, ExternalLink, TYPE } from 'theme'

import Metrics from './Metrics'
import Proposals from './Proposals'
import PublicOpinion from './PublicOpinion'

import UniswapSvg from 'assets/svg/uniswap_logo.svg'
import Twitter from 'assets/svg/twitter.svg'
import Discord from 'assets/svg/discord.svg'
import Raddit from 'assets/svg/raddit.svg'
import AppBody from 'pages/AppBody'

const Logo = styled.img`
  display: flex;
  align-self: flex-start;
  flex: none;
  width: 180px;
  height: 180px;
  padding: 24px;
  border-radius: 6px;
  background: ${({ theme }) => theme.bg2};
`
const ProjectDetailWrapper = styled(AutoColumn)`
  margin-left: 55px;
`
const ProjectIntroduce = styled.div`
  & > a {
    color: ${({ theme }) => theme.primary1};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`

const SocialLogo = styled.img`
  width: 28px;
  height: 28px;
  :hover {
    opacity: 80%;
  }
`

const ProjectSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`

export default function UniswapDetail() {
  const tabData = [
    {
      label: 'Profile',
      content: (
        <iframe src="https://docs.uniswap.org/protocol/introduction" width="100%" height="800" frameBorder={0} />
      ),
    },
    {
      label: 'Metrics',
      content: <Metrics />,
    },
    {
      label: 'Proposals',
      content: <Proposals />,
    },
    {
      label: 'Public opinion',
      content: <PublicOpinion />,
    },
  ]

  return (
    <AppBody {...{ maxWidth: '1440px' }}>
      <AutoColumn gap="65px">
        <Row>
          <Logo src={UniswapSvg} />
          <ProjectDetailWrapper gap="25px">
            <ProjectIntroduce
              dangerouslySetInnerHTML={{
                __html: `Uniswap is a popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance (DeFi) tokens.
                An example of an automated market maker (AMM), Uniswap launched in November 2018, but has gained considerable popularity this year thanks to the DeFi phenomenon and associated surge in token trading.
                Uniswap aims to keep token trading automated and completely open to anyone who holds tokens, while improving the efficiency of trading versus that on traditional exchanges.
                Uniswap creates more efficiency by solving liquidity issues with automated solutions, avoiding the problems which plagued the first decentralized exchanges.
                In September 2020, Uniswap went a step further by creating and awarding its own governance token, UNI, to past users of the protocol. This added both profitability potential and the ability for users to shape its future — an attractive aspect of decentralized entities. <a href='//uniswap.org' target="_blank">Website</a>`,
              }}
            />
            <RowBetween width={'90%'}>
              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
                <ProjectSocial>
                  <ExternalLink href={'//twitter.com/Uniswap'}>
                    <SocialLogo src={Twitter} alt="twitter" />
                  </ExternalLink>
                  <ExternalLink href={'//discord.com/invite/FCfyBSbCU5'}>
                    <SocialLogo src={Discord} alt="discord" />
                  </ExternalLink>
                  <ExternalLink href={'//www.reddit.com/r/UniSwap'}>
                    <SocialLogo src={Raddit} alt="raddit" />
                  </ExternalLink>
                </ProjectSocial>
              </AutoColumn>

              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Contracts</TYPE.largeHeader>
                <TYPE.body>
                  <CopyContractAddress address={'0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'} />
                </TYPE.body>
              </AutoColumn>
            </RowBetween>
            <TYPE.body style={{ wordBreak: 'break-all' }}></TYPE.body>
          </ProjectDetailWrapper>
        </Row>

        <DataTabs data={tabData} />
      </AutoColumn>
    </AppBody>
  )
}
