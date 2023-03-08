import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'
import Card from 'components/Card'

import AppBody from 'pages/AppBody'
import { TYPE } from 'theme'

import CoinLogo from 'assets/images/dot.png'
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

export default function Polkadot() {
  const { data: quotes } = useGetQuotesQuery('DOT')

  const tokenInfo = {
    logo: CoinLogo,
    desc: `Polkadot is an open-source sharded multichain protocol that connects and secures a network of specialized blockchains, facilitating cross-chain transfer of any data or asset types, not just tokens, thereby allowing blockchains to be interoperable with each other. Polkadot was designed to provide a foundation for a decentralized internet of blockchains, also known as Web3.
    The Polkadot protocol can connect public and private chains, permissionless networks, oracles and future technologies, allowing these independent blockchains to trustlessly share information and transactions through the Polkadot Relay Chain (explained further down).
    Polkadot was founded by Gavin Wood and launched in 2020.
    <a href='//polkadot.network/' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/Polkadot',
      discordUri: '//discord.com/invite/uKY3HkX',
      radditUri: '//www.reddit.com/r/polkadot',
      githubUri: '//github.com/paritytech',
    },
    explorerUri: 'https://explorer.polkascan.io/polkadot',
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
                  <TYPE.subHeader fontWeight="600">DOT Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.DOT[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.DOT[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.DOT[0]?.circulating_supply?.toLocaleString() || 0} DOT
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>
            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts"
              src={'https://tokenterminal.com/terminal/projects/polkadot/embed/key_metrics'}
              width="100%"
              height="1350px"
              frameBorder={0}
            />
            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts"
              src={'https://tokenterminal.com/terminal/projects/polkadot/embed/revenue_share'}
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
