import { AutoColumn } from 'components/Column'
import Row from 'components/Row'
import styled from 'styled-components/macro'
import { ExternalLink, Line, TYPE } from 'theme'

import { ButtonOutlined } from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { Linkedin } from 'react-feather'
import { OutlineCard } from 'components/Card'
import AppBody from 'pages/AppBody'
import AvatarExample from 'components/Avatar'

const BaseWrapper = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  & > div {
    display: flex;
    justify-content: center;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    & > div {
      flex-direction: column;
    }
  `};
`
const ButtonWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`

const Iframe = styled.iframe`
  padding: 0px 20px;
  border: 1px solid ${({ theme }) => theme.bg2};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    height: 1500px;
  `}
`

const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: repeat(2, 1fr);
  `}
`
const TeamItem = styled(AutoColumn)`
  text-align: center;
`
const TeamLink = styled(ExternalLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0px auto;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.bg5};
  & > svg {
    stroke: ${({ theme }) => theme.bg0};
  }
`
const AboutWrapper = styled(AutoColumn)`
  width: 78%;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`
const AboutHTMLWrapper = styled.div`
  width: 78%;
  * > img {
    width: 100%;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`

export default function Lido() {
  const navigate = useNavigate()

  const teamList = [
    {
      name: 'Brad Garlinghouse',
      position: 'CEO',
      linkedIn: '',
    },
    {
      name: 'David Schwartz',
      position: 'CTO',
      linkedIn: '',
    },
    {
      name: 'Brynly Llyr',
      position: 'Legal Adviser',
      linkedIn: '',
    },
    {
      name: 'Brad Garlinghouse',
      position: 'CFO',
      linkedIn: '',
    },
    {
      name: 'David Schwartz',
      position: 'COO',
      linkedIn: '',
    },
  ]
  return (
    <AppBody>
      <AutoColumn gap="24px">
        <TYPE.largeHeader fontSize={28}>Lido Dao</TYPE.largeHeader>
        <AutoColumn gap="12px">
          <TYPE.largeHeader>Base Information</TYPE.largeHeader>
          <Line />
        </AutoColumn>
        <BaseWrapper>
          <div>
            <TYPE.body>Founded on:&nbsp;</TYPE.body>
            <TYPE.black>2022/02/22</TYPE.black>
          </div>
          <div>
            <TYPE.body>Protocols:&nbsp;</TYPE.body>
            <TYPE.black>8</TYPE.black>
          </div>
          <div>
            <TYPE.body>Protocols:&nbsp;</TYPE.body>
            <TYPE.black>12</TYPE.black>
          </div>
        </BaseWrapper>

        <ButtonWrapper>
          <ButtonOutlined padding={'9px 24px'} onClick={() => navigate('/lido/info')}>
            <svg width="11" height="17" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.3366 11.2375L10.113 0L2.9761 11.2375L10.113 15.4135L17.3366 11.2375ZM10.113 2.89999L5.15765 10.701L10.113 13.601L15.0684 10.6865L10.113 2.89999ZM1.82033 13.05L10.113 17.893L18.4057 13.05L18.6368 13.398C19.6127 14.9321 20.1597 16.7013 20.2203 18.5204C20.2811 20.3395 19.8533 22.1415 18.9817 23.7377C18.1103 25.3339 16.8272 26.6655 15.2669 27.5931C13.7066 28.5207 11.9265 29.0101 10.113 29.0101C8.29955 29.0101 6.5194 28.5207 4.9591 27.5931C3.3988 26.6655 2.11571 25.3339 1.24425 23.7377C0.372764 22.1415 -0.0550319 20.3395 0.00566759 18.5204C0.0663365 16.7013 0.613273 14.9321 1.58919 13.398L1.82033 13.05Z"
                fill="#666666"
              />
            </svg>
            <TYPE.subHeader marginLeft={'8px'}>Lido</TYPE.subHeader>
          </ButtonOutlined>
        </ButtonWrapper>
        <AutoColumn gap="12px" style={{ marginTop: 24 }}>
          <TYPE.largeHeader>Total Revenue</TYPE.largeHeader>
          <Line />
        </AutoColumn>
        <AutoColumn gap="8px">
          <TYPE.black>Total revenue 30d</TYPE.black>
        </AutoColumn>
        <Iframe
          src={'https://tokenterminal.com/terminal/projects/lido-finance/embed/revenue_share'}
          width="100%"
          height="1350px"
          frameBorder={1}
        />
        <AutoColumn gap="8px">
          <TYPE.black>Annualized total revenue</TYPE.black>
        </AutoColumn>
        <Iframe
          src={'https://tokenterminal.com/terminal/projects/lido-finance/embed/key_metrics'}
          width="100%"
          height="1350px"
          frameBorder={1}
        />
        <AutoColumn gap="16px" style={{ marginTop: 20 }}>
          <TYPE.largeHeader fontSize={28}>About LDO</TYPE.largeHeader>
          <Line />
          <AboutWrapper gap="16px">
            <AboutHTMLWrapper
              dangerouslySetInnerHTML={{
                __html: `
                  <h2>Lido Ecosystem &amp; DAO overview</h2>
                  <p>Lido is a DAO community which builds a liquid staking service for Ethereum. Inspired by the growth of the Ethereum ecosystem, Lido lets users stake their ETH tokens in a secure, non-custodial and transparent manner to contribute to the stability of the Ethereum ecosystem as a whole. </p>
                  <p>Lido’s Ethereum staking protocol has been built as a DAO to preserve Lido’s upgradability and stability whilst maintaining decentralised infrastructure. The Lido DAO governs a set of liquid staking protocols, deciding on Lido’s key parameters whilst spearheading Lido network upgrades. Members of the Lido DAO have the responsibility to govern Lido to maintain its ongoing efficiency and contribute to the overall growth of the Lido community.</p>
                  <p>There exist a number of reasons for why a DAO is the most optimal structure for Lido. Lido as a service is highly dependent on the development of the Ethereum beacon chain and its staking protocol. With a number of uncertainties surrounding the roll-out of Eth2.0, Lido is required to be upgradable. When faced with these uncertainties, the DAO-based governance approach will allow for Lido to remain flexible and adjust its staking service as necessary.</p>
                  <p>In addition to this, Lido’s design as a DAO will allow for the accumulation of service fees which can be managed and distributed transparently to cover development and insurance costs in a manner aligned with community interests.</p>
                  <p>With the mission to make staking simple, liquid, secure and decentralized for the end user, the Lido DAO has the following responsibilities: </p>
                  <ul><li>Launching Lido:</li><li>Deploy protocol smart contracts;</li><li>Set fees and other protocol parameters;</li><li>Select the threshold signature scheme participants among reputable individuals or organizations willing to provide the service;</li><li>Facilitate the multi-party computation ceremony to create the threshold signature account for staking rewards;</li><li>Assign initial DAO-vetted node operators.</li><li>Propose and update Lido’s parameters;</li><li>Approve incentives for parties that contribute towards DAO’s goals (e.g., stETH liquidity providers);</li><li>Propose and update Lido’s implementation for incoming Ethereum 2.0 features using DAO treasury funds;</li><li>Assign oracles to deliver reward/slashing rate feed to help establish stETH token balances;</li><li>Scout and qualify new node operators and penalize the existing ones slashed by Ethereum 2.0’s rules;</li><li>Manage the Lido DAO’s insurance and development funds;</li><li>Manage unbonding and withdrawals once available in Ethereum 2.0; </li></ul>
                  <h2>The LDO token</h2>
                  <p>Our mission with the Lido DAO is to distribute all decision-making to create a trustless staking service built around community-growth and self-sustainability. This is achieved through the LDO governance token. The launch of LDO is a significant step towards achieving this goal, driving decentralised ownership and facilitating development of a distributed, independent governance structure to lead the Lido DAO. </p>
                  <p>To have a vote in the Lido DAO, and to contribute to the determination of any of the topics outlined above, one must hold the LDO governance token. Holding LDO gives DAO members a vote in the future of Lido, allowing each DAO member to have a personal say in the community. </p>
                  <p>LDO voting weight is proportional to the amount of LDO a voter stakes in the voting contract. The more LDO in a user’s voting contract, the greater the decision-making power the voter gets. The exact mechanism of LDO voting can be upgraded just like the other DAO applications.</p>
                  <p>The LDO token will be used across all current and future DAO <a href="http://mainnet.lido.fi">votes</a>, giving every token holder a say in the direction and growth of the Lido DAO. </p>
                  <h2>LDO Token Allocation</h2>
                  <p>Upon the launch of the Lido DAO, 1 billion LDO tokens were minted. </p>
                  <p>At time of writing, founding members of the Lido DAO possess 64% of LDO tokens. These are locked for 1 year, after which they will be vested over 1 year. At the time of writing, the only unlocked LDO in existence are 0.4% airdrop distributed to early stakers and DAO treasury tokens. Anyone can make a proposal on how they can be used via <a href="http://research.lido.fi/" rel="noopener noreferrer">research.lido.fi</a>.</p>
                  <p>The allocation of these tokens is as follows:</p>
                  <ul><li>DAO treasury - 36.32%</li><li>Investors - 22.18%</li><li>Validators and signature holders - 6.5%</li><li>Initial Lido developers - 20%</li><li>Founders and future employees - 15%</li></ul>
                  `,
              }}
            />

            <TYPE.mediumHeader marginTop={'24px'}>Team</TYPE.mediumHeader>
            <TeamWrapper>
              {teamList.map((t, i) => (
                <OutlineCard padding={'24px 16px'} key={t.name + i}>
                  <TeamItem gap="16px">
                    <Row justify={'center'}>
                      <AvatarExample name={t.name} size={64} />
                    </Row>
                    <AutoColumn gap="8px">
                      <TYPE.subHeader fontWeight={500}>{t.name}</TYPE.subHeader>
                      <TYPE.subHeader>{t.position}</TYPE.subHeader>
                    </AutoColumn>
                    <TeamLink href={t.linkedIn}>
                      <Linkedin size={12} />
                    </TeamLink>
                  </TeamItem>
                </OutlineCard>
              ))}
            </TeamWrapper>
          </AboutWrapper>
        </AutoColumn>
      </AutoColumn>
    </AppBody>
  )
}
