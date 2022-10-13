import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import DataTabs from 'components/Tabs'
import styled from 'styled-components/macro'
import { ExternalLink, TYPE } from 'theme'

import Metrics from './Metrics'
import Proposals from './Proposals'
import PublicOpinion from './PublicOpinion'

const ProjectWrapper = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
`
const Logo = styled.img`
  flex: none;
  width: 180px;
  height: 180px;
  background: ${({ theme }) => theme.bg2}; ;
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

const ProjectSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`

export default function Lido() {
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
    <ProjectWrapper gap="65px">
      <Row>
        <Logo src="https://lh4.googleusercontent.com/VIGJi3ZmeNMLUA7bQkNTIvbMC0h0qiBU2pO1omdZpP7bq5k8DabYTWzaw0dZZYXNh9aaY7Eak4HO4k_F6rLikvWIjflz_ChF_IuiJNPrS8ngCBGADW2EKHubj1CPObdNlg=w1280" />
        <ProjectDetailWrapper gap="25px">
          <ProjectIntroduce
            dangerouslySetInnerHTML={{
              __html: `Lido is a liquid staking solution for Ethereum and other proof of stake chains. This allows users to stake
            their tokens without having to lock assets or maintain staking infrastructure. Users who stake via Lido
            receive daily rewards in the form of staking derivative tokens which are pegged 1:1 to the underlying staked
            assets. <a href='//lido.fi/'>Website</a>`,
            }}
          />
          <RowBetween width={'90%'}>
            <AutoColumn gap="12px">
              <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
              <ProjectSocial>
                <ExternalLink href={'//twitter.com/lidofinance'}>Twitter</ExternalLink>
                <ExternalLink href={'//discord.com/invite/lido'}>Discord</ExternalLink>
                <ExternalLink href={'//www.reddit.com/r/LidoFinance'}>Reddit</ExternalLink>
              </ProjectSocial>
            </AutoColumn>

            <AutoColumn gap="12px">
              <TYPE.largeHeader fontSize={18}>Contracts</TYPE.largeHeader>
              <TYPE.body>0x5a98fcbea516cf06857215779fd812ca3bef1b32</TYPE.body>
            </AutoColumn>
          </RowBetween>
          <TYPE.body style={{ wordBreak: 'break-all' }}></TYPE.body>
        </ProjectDetailWrapper>
      </Row>

      <DataTabs data={tabData} />
    </ProjectWrapper>
  )
}
