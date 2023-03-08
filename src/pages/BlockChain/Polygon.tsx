import { useGetQuotesQuery } from 'services/cmcPro'
import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'
import Card from 'components/Card'

import AppBody from 'pages/AppBody'
import { TYPE } from 'theme'

import CoinLogo from 'assets/images/matic.png'
import IntroduceToken from 'components/Introduce'
import { IfrarmeItem } from './styleds'

const BlockChainWrapper = styled(AutoColumn)``
const BlockBasicWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`

const BlockNetworkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`

const DuneCard = styled(Card)`
  background-color: ${({ theme }) => theme.bg7};
  border-radius: unset;
  position: relative;
  padding: 7px;
`
export default function Polygon() {
  const { data: quotes } = useGetQuotesQuery('MATIC')

  const tokenInfo = {
    logo: CoinLogo,
    desc: `Polygon is a platform design to support infrastructure development and help Ethereum scale. Its core component is a modular, flexible framework (Polygon SDK) that allows developers to build and connect Layer-2 infrastructures like Plasma, Optimistic Rollups, zkRollups, and Validium and standalone sidechains like the project's flagship product, Matic POS (Proof-of-Stake). Polygon rebranded from Matic Network in February 2021 and pivoted towards supporting multiple Layer-2 infrastructure. It will continue to support the Matic POS sidechain and Plasma-based payment system, which currently hosts over 90 applications.
    <a href='//polygon.technology/' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/0xPolygon',
      discordUri: '//discord.com/invite/0xPolygon',
      radditUri: '//www.reddit.com/r/0xPolygon',
      githubUri: '//github.com/maticnetwork',
    },
    explorerUri: 'https://polygonscan.com',
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
                  <TYPE.subHeader fontWeight="600">Matic Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.MATIC[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.MATIC[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.MATIC[0]?.circulating_supply?.toLocaleString() || 0} MATIC
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>

            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts"
              src={'https://dune.com/embeds/1810832/2980183/6671d974-9e7b-4c10-99cc-71714af953a7'}
              width="100%"
              height="480px"
              frameBorder={0}
            />
            <>
              <TYPE.largeHeader>Users</TYPE.largeHeader>
              <BlockBasicWrapper>
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1810871/2980238/e2d98677-ee74-452b-931c-d6948b27f457"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1810884/2980254/d49df574-a7bd-4782-895b-b145a5634241"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1810888/2980259/e37ecc30-cf68-4b47-ba41-000a08ae79ee"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
              <BlockNetworkWrapper>
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1810913/2980290/d62cb085-6807-46e0-9c0f-6f2c41a0933a"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1810915/2980294/ce2896cc-acb3-49b2-af7b-6f81b8a13763"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1810950/2980343/b39826b2-e44a-4978-bc79-97e1b58e41ac"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts"
                  src="https://dune.com/embeds/1810950/2980344/a6ec68c6-edc4-47f9-914b-9e042243bd44"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
              </BlockNetworkWrapper>
              <IfrarmeItem
                sandbox="allow-same-origin allow-scripts"
                src="https://dune.com/embeds/1810971/2980372/53c05424-9266-430c-8db3-f8f4afab2434"
                width="100%"
                height="350px"
                frameBorder={0}
              />
            </>
            <>
              <TYPE.largeHeader>Transaction</TYPE.largeHeader>
              <IfrarmeItem
                sandbox="allow-same-origin allow-scripts"
                src="https://dune.com/embeds/1810991/2980396/9ee381d8-0396-4118-868d-3a4126e99fb4"
                width="100%"
                height="350px"
                frameBorder={0}
              />

              <IfrarmeItem
                sandbox="allow-same-origin allow-scripts"
                src="https://tokenterminal.com/terminal/projects/polygon/embed/key_metrics"
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
