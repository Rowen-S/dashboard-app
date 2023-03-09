import { TYPE } from 'theme'
import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'
import Card from 'components/Card'
import IntroduceToken from 'components/Introduce'
import { useGetQuotesQuery } from 'services/cmcPro'
import AppBody from 'pages/AppBody'
import CoinLogo from 'assets/images/algo.png'
import { IfrarmeItem } from './styleds'

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

export default function Algorand() {
  const { data: quotes } = useGetQuotesQuery('ALGO')

  const tokenInfo = {
    logo: CoinLogo,
    desc: `Algorand is a self-sustaining, decentralized, blockchain-based network that supports a wide range of applications. These systems are secure, scalable and efficient, all critical properties for effective applications in the real world. Algorand will support computations that require reliable performance guarantees to create new forms of trust.
    Algorand was founded by Silvio Micali and launched in 2018.
    <a href='//www.algorand.com/' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/Algorand/',
      discordUri: '//discord.com/84AActu3at/',
      radditUri: '//www.reddit.com/r/AlgorandOfficial/',
      githubUri: '//github.com/algorand',
    },
    explorerUri: 'https://algoexplorer.io/',
  }

  return (
    <AppBody>
      <AutoColumn gap="65px">
        <IntroduceToken {...tokenInfo} />
        <BlockChainWrapper gap="24px">
          <AutoColumn gap="24px">
            <BlockBasicWrapper>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">ALGO Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.ALGO[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.ALGO[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.ALGO[0]?.circulating_supply?.toLocaleString() || 0} ALGO
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>
            <IfrarmeItem
              //sandbox="allow-same-origin allow-scripts allow-popups"
              src={'https://tokenterminal.com/terminal/projects/algorand/embed/key_metrics'}
              width="100%"
              height="1350px"
              frameBorder={0}
            />
            <IfrarmeItem
              //sandbox="allow-same-origin allow-scripts allow-popups"
              src={'https://tokenterminal.com/terminal/projects/algorand/embed/revenue_share'}
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
