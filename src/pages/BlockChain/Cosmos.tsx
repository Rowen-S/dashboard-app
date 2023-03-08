import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'
import Card from 'components/Card'

import AppBody from 'pages/AppBody'
import { TYPE } from 'theme'

import CoinLogo from 'assets/images/atom.png'
import { useGetQuotesQuery } from 'services/cmcPro'
import IntroduceToken from 'components/Introduce'
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

export default function Cosmos() {
  const { data: quotes } = useGetQuotesQuery('ATOM')

  const tokenInfo = {
    logo: CoinLogo,
    desc: `Cosmos (ATOM) is a cryptocurrency that powers an ecosystem of blockchains designed to scale and interoperate with each other. The team aims to "create an Internet of Blockchains, a network of blockchains able to communicate with each other in a decentralized way." Cosmos is a proof-of-stake chain. ATOM holders can stake their tokens in order to maintain the network and receive more ATOM as a reward.
  Cosmos was founded by Ethan Buchman & Jae Kwon and launched in 2019.
  <a href='//cosmos.network/' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/cosmos',
      discordUri: '//discord.com/invite/cosmosnetwork',
      radditUri: '//www.reddit.com/r/cosmosnetwork',
      githubUri: '//github.com/cosmos',
    },
    explorerUri: 'https://atomscan.com/',
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
                  <TYPE.subHeader fontWeight="600">ATOM Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.ATOM[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.ATOM[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.ATOM[0]?.circulating_supply?.toLocaleString() || 0} ATOM
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>
            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts"
              src={'https://tokenterminal.com/terminal/projects/cosmos/embed/key_metrics'}
              width="100%"
              height="1350px"
              frameBorder={0}
            />
            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts"
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
