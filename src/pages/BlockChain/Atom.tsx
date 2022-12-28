import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import styled from 'styled-components/macro'
import Card from 'components/Card'

import AppBody from 'pages/AppBody'
import { ExternalLink, TYPE } from 'theme'

import Twitter from 'assets/svg/twitter.svg'
import Discord from 'assets/svg/discord.svg'
import Raddit from 'assets/svg/raddit.svg'
import Github from 'assets/svg/github.svg'

import AtomLogo from 'assets/images/atom.png'
import { useGetQuotesQuery } from 'services/cmc-pro'

const Logo = styled.img`
  flex: none;
  width: 180px;
  height: 180px;

  padding: 24px;
  border-radius: 6px;
  background: #f8f8f8;
  display: flex;
  align-self: flex-start;
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

const BlockChainWrapper = styled(AutoColumn)``
const BlockBasicWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`

const DuneCard = styled(Card)`
  background-color: ${({ theme }) => theme.bg7};
  border-radius: unset;
  position: relative;
  padding: 7px;
`

const IfrarmeItem = styled.iframe`
  background-color: ${({ theme }) => theme.bg7};
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
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
`

export default function Atom() {
  const { data: quotes } = useGetQuotesQuery('ATOM')

  return (
    <AppBody>
      <AutoColumn gap="65px">
        <Row>
          <Logo src={AtomLogo} />
          <ProjectDetailWrapper gap="25px">
            <ProjectIntroduce
              dangerouslySetInnerHTML={{
                __html: `
                Cosmos (ATOM) is a cryptocurrency that powers an ecosystem of blockchains designed to scale and interoperate with each other. The team aims to "create an Internet of Blockchains, a network of blockchains able to communicate with each other in a decentralized way." Cosmos is a proof-of-stake chain. ATOM holders can stake their tokens in order to maintain the network and receive more ATOM as a reward.

                Cosmos was founded by Ethan Buchman & Jae Kwon and launched in 2019.

                <a href='//cosmos.network/' target="_blank">Website</a>`,
              }}
            />
            <RowBetween width={'90%'}>
              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
                <ProjectSocial>
                  <ExternalLink href={'//twitter.com/cosmos/'}>
                    <SocialLogo src={Twitter} alt="twitter" />
                  </ExternalLink>
                  <ExternalLink href={'//discord.com/invite/cosmosnetwork/'}>
                    <SocialLogo src={Discord} alt="discord" />
                  </ExternalLink>
                  <ExternalLink href={'//www.reddit.com/r/cosmosnetwork/'}>
                    <SocialLogo src={Raddit} alt="raddit" />
                  </ExternalLink>
                  <ExternalLink href={'//github.com/cosmos'}>
                    <SocialLogo src={Github} alt="github" />
                  </ExternalLink>
                </ProjectSocial>
              </AutoColumn>

              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Explorer</TYPE.largeHeader>
                <TYPE.body>
                  <ExternalLink href={'//atomscan.com/'}>https://atomscan.com/</ExternalLink>
                </TYPE.body>
              </AutoColumn>
            </RowBetween>
            {/* <TYPE.body style={{ wordBreak: 'break-all' }}></TYPE.body> */}
          </ProjectDetailWrapper>
        </Row>

        <BlockChainWrapper gap="24px">
          <AutoColumn gap="24px">
            <BlockBasicWrapper>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">ATOM Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.ATOM[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.ATOM[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.ATOM[0]?.circulating_supply?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>
            <IfrarmeItem
              src={'https://tokenterminal.com/terminal/projects/cosmos/embed/key_metrics'}
              width="100%"
              height="1350px"
              frameBorder={0}
            />
            <IfrarmeItem
              src={'https://tokenterminal.com/terminal/projects/cosmos/embed/revenue_share'}
              width="100%"
              height="1350px"
              frameBorder={0}
            />
          </AutoColumn>
        </BlockChainWrapper>
      </AutoColumn>
    </AppBody>
  )
}
