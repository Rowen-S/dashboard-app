import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import styled from 'styled-components/macro'
import Card from 'components/Card'

import AppBody from 'pages/AppBody'
import { ExternalLink, TYPE } from 'theme'

import Twitter from 'assets/svg/twitter.svg'
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
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`

export default function Ada() {
  const { data: quotes } = useGetQuotesQuery('ADA')

  return (
    <AppBody>
      <AutoColumn gap="65px">
        <Row>
          <Logo src={AtomLogo} />
          <ProjectDetailWrapper gap="25px">
            <ProjectIntroduce
              dangerouslySetInnerHTML={{
                __html: `
                Cardano is a proof-of-stake blockchain platform that says its goal is to allow “changemakers, innovators and visionaries” to bring about positive global change.

              The open-source project also aims to “redistribute power from unaccountable structures to the margins to individuals” — helping to create a society that is more secure, transparent and fair.

              The ADA token is designed to ensure that owners can participate in the operation of the network. Because of this, those who hold the cryptocurrency have the right to vote on any proposed changes to the software.

              Cardano was founded by Charles Hoskinson & Jeremy Wood and launched in 2017.

              <a href='//cardano.org/' target="_blank">Website</a>`,
              }}
            />
            <RowBetween width={'90%'}>
              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
                <ProjectSocial>
                  <ExternalLink href={'//twitter.com/Cardano/'}>
                    <SocialLogo src={Twitter} alt="twitter" />
                  </ExternalLink>
                  <ExternalLink href={'//www.reddit.com/r/cardano/'}>
                    <SocialLogo src={Raddit} alt="raddit" />
                  </ExternalLink>
                  <ExternalLink href={'//github.com/cardano-foundation'}>
                    <SocialLogo src={Github} alt="github" />
                  </ExternalLink>
                </ProjectSocial>
              </AutoColumn>

              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Explorer</TYPE.largeHeader>
                <TYPE.body>
                  <ExternalLink href={'//cardanoscan.io/'}>https://cardanoscan.io/</ExternalLink>
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
                  <TYPE.subHeader fontWeight="600">ADA Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.ADA[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.ADA[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.ADA[0]?.circulating_supply?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>
            <IfrarmeItem
              src={'https://tokenterminal.com/terminal/projects/cardano/embed/key_metrics'}
              width="100%"
              height="1350px"
              frameBorder={0}
            />
            <IfrarmeItem
              src={'https://tokenterminal.com/terminal/projects/cardano/embed/revenue_share'}
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
