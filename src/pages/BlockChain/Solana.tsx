import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'

import AppBody from 'pages/AppBody'
import { TYPE } from 'theme'

import CoinLogo from 'assets/images/sol.png'
import Card from 'components/Card'
import { useGetQuotesQuery } from 'services/cmcPro'
import IntroduceToken from 'components/Introduce'
import { IfrarmeItem } from './styleds'

const BlockChainWrapper = styled(AutoColumn)``

const BlockBasicWrapper = styled.div<{ repeatNum?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ repeatNum }) => repeatNum ?? 3}, 1fr);
  grid-gap: 24px;
`

const DuneCard = styled(Card)`
  background-color: ${({ theme }) => theme.bg7};
  border-radius: unset;
  position: relative;
  padding: 7px;
`
export default function Solana() {
  const { data: quotes } = useGetQuotesQuery('SOL')

  const tokenInfo = {
    logo: CoinLogo,
    desc: `Solana is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions. While the idea and initial work on the project began in 2017, Solana was officially launched in March 2020 by the Solana Foundation with headquarters in Geneva, Switzerland.
    The Solana protocol is designed to facilitate decentralized app (DApp) creation. It aims to improve scalability by introducing a proof-of-history (PoH) consensus combined with the underlying proof-of-stake (PoS) consensus of the blockchain.                
    <a href='//solana.com/' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/solana',
      discordUri: '//discord.com/invite/pquxPsq',
      radditUri: '//www.reddit.com/r/solana',
      githubUri: '//github.com/solana-labs',
    },
    explorerUri: 'https://solscan.io',
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
                  <TYPE.subHeader fontWeight="600">SOL Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.SOL[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.SOL[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.SOL[0]?.circulating_supply?.toLocaleString() || 0} SOL
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>

            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts"
              src="https://dune.com/embeds/1815299/2987466/dfed4f21-8dd7-41f9-b56c-c0c648d3a997"
              width="100%"
              height="350px"
              frameBorder={0}
            />

            {/* Users */}
            <>
              <TYPE.largeHeader>Users</TYPE.largeHeader>
              <BlockBasicWrapper repeatNum={2}>
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1815391/2987577/947111be-fdc0-477c-87cd-8b8f0495964f"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1815394/2987581/1ba64a11-3fa0-4606-a1ea-65ec04f3ec8b"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1815410/2987601/bd2ffcf4-fb14-4c26-ae9f-da77e30ce7f7"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1815420/2987612/0ad0ba67-7333-4385-982d-16169c3816be"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
            </>
            {/* Transaction */}
            <>
              <TYPE.largeHeader>Transaction</TYPE.largeHeader>
              <BlockBasicWrapper repeatNum={2}>
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1815493/2987696/c4951f53-264f-4c25-ac98-fe1c2890a93f"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1815493/2987694/d411340d-5403-4642-a097-1cda5901bfd7"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
              <IfrarmeItem
                sandbox="allow-same-origin allow-scripts"
                src="https://dune.com/embeds/1815512/2987718/41d60b5c-9db6-48db-a156-c2fbf042c895"
                width="100%"
                height="350px"
                frameBorder={0}
              />

              <IfrarmeItem
                sandbox="allow-same-origin allow-scripts"
                src="https://dune.com/embeds/1815523/2987733/6e7d9839-6482-419d-8df4-2cad7f660e08"
                width="100%"
                height="350px"
                frameBorder={0}
              />
            </>

            {/* Projects */}
            <>
              <TYPE.largeHeader>Projects</TYPE.largeHeader>

              <BlockBasicWrapper repeatNum={2}>
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src=" https://dune.com/embeds/1815536/2987761/8267d2b8-32d6-4e96-8480-2dd37223d065"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1815534/2987749/731693c1-e341-45a7-984f-4cde42eb080b"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>

              <IfrarmeItem
                sandbox="allow-same-origin allow-scripts"
                src="https://tokenterminal.com/terminal/projects/solana/embed/key_metrics"
                width="100%"
                height="1350px"
                frameBorder={0}
              />
            </>
          </AutoColumn>
        </BlockChainWrapper>
      </AutoColumn>
    </AppBody>
  )
}
