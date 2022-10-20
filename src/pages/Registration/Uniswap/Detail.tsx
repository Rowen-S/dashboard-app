import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import DataTabs from 'components/Tabs'
import styled from 'styled-components/macro'
import { CopyContractAddress, ExternalLink, TYPE } from 'theme'

import Metrics from './Metrics'
import Proposals from './Proposals'
import PublicOpinion from './PublicOpinion'

import LidoSvg from 'assets/svg/lido.svg'
import Twitter from 'assets/svg/twitter.svg'
import Discord from 'assets/svg/discord.svg'
import Raddit from 'assets/svg/raddit.svg'
import AppBody from 'pages/AppBody'

const Logo = styled.img`
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
        <iframe
          src="https://docs.lido.fi/?pk_vid=c25f281e9f7d8f6d166391341018be44"
          width="100%"
          height="800"
          frameBorder={0}
        />
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
    <AppBody>
      <AutoColumn gap="65px">
        <Row>
          <Logo src={LidoSvg} />
          <ProjectDetailWrapper gap="25px">
            <ProjectIntroduce
              dangerouslySetInnerHTML={{
                __html: `Lido is a liquid staking solution for Ethereum and other proof of stake chains. This allows users to stake
            their tokens without having to lock assets or maintain staking infrastructure. Users who stake via Lido
            receive daily rewards in the form of staking derivative tokens which are pegged 1:1 to the underlying staked
            assets. <a href='//lido.fi/' target="_blank">Website</a>`,
              }}
            />
            <RowBetween width={'90%'}>
              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
                <ProjectSocial>
                  <ExternalLink href={'//twitter.com/lidofinance'}>
                    <SocialLogo src={Twitter} alt="twitter" />
                  </ExternalLink>
                  <ExternalLink href={'//discord.com/invite/lido'}>
                    <SocialLogo src={Discord} alt="discord" />
                  </ExternalLink>
                  <ExternalLink href={'//www.reddit.com/r/LidoFinance'}>
                    <SocialLogo src={Raddit} alt="raddit" />
                  </ExternalLink>
                </ProjectSocial>
              </AutoColumn>

              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Contracts</TYPE.largeHeader>
                <TYPE.body>
                  <CopyContractAddress address={'0x5a98fcbea516cf06857215779fd812ca3bef1b32'} />
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
