import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'
import IntroduceToken from 'components/Introduce'

import { useGetQuotesQuery } from 'services/cmcPro'
import { TYPE } from 'theme'
import Card from 'components/Card'

import AppBody from 'pages/AppBody'

import CoinLogo from 'assets/images/avax.png'

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

const IfrarmeItem = styled.iframe`
  background-color: ${({ theme }) => theme.bg7};
`

export default function Avalanche() {
  const { data: quotes } = useGetQuotesQuery('AVAX')

  const tokenInfo = {
    logo: CoinLogo,
    desc: `Avalanche is a layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks. It is one of Ethereum’s rivals, aiming to unseat Ethereum as the most popular blockchain for smart contracts. It aims to do so by having a higher transaction output of up to 6,500 transactions per second while not compromising scalability.
    Avalanche was founded by Emin Gün Sirer and launched in 2019.
    <a href='//www.avax.network/' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/avalancheavax/',
      discordUri: '//discord.com/invite/RwXY7P6',
      radditUri: '//www.reddit.com/r/Avax/',
      githubUri: '//github.com/ava-labs',
    },
    explorerUri: 'https://snowtrace.io/',
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
                  <TYPE.subHeader fontWeight="600">AVAX Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.AVAX[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.AVAX[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.AVAX[0]?.circulating_supply?.toLocaleString() || 0} AVAX
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>

            <IfrarmeItem
              src="https://dune.com/embeds/1815598/2987879/5b21d94b-ae9a-4a92-9f8c-6eb1c22741dd"
              width="100%"
              height="350px"
              frameBorder={0}
            />

            {/* Users */}
            <>
              <TYPE.largeHeader>Users</TYPE.largeHeader>
              <BlockBasicWrapper repeatNum={2}>
                <IfrarmeItem
                  src="https://dune.com/embeds/1815602/2987886/fb3744c4-a539-4673-82d8-8e1a4af3b22e"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  src="https://dune.com/embeds/1815602/2987887/098d5404-b6a2-4abb-bac9-f9cec3b756d4"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  src="https://dune.com/embeds/1815619/2987911/515f5d98-80e3-411a-ad7a-157218c994f9"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  src="https://dune.com/embeds/1815626/2987923/80e1d6cd-787d-440e-9b20-01c7f3867e16"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
            </>
            {/* Transaction */}
            <>
              <TYPE.largeHeader>Transaction</TYPE.largeHeader>

              <IfrarmeItem
                src="https://dune.com/embeds/1815638/2987946/9dcc0c45-1238-4181-b6d3-30c7e1fa09a1"
                width="100%"
                height="350px"
                frameBorder={0}
              />

              <IfrarmeItem
                src="https://dune.com/embeds/1815643/2987958/ad26743f-7085-4705-8b41-fd129eb9c4bf"
                width="100%"
                height="350px"
                frameBorder={0}
              />
            </>

            {/* Bridge */}
            <>
              <TYPE.largeHeader>Bridge</TYPE.largeHeader>

              <BlockBasicWrapper repeatNum={2}>
                <IfrarmeItem
                  src="https://dune.com/embeds/1815668/2987996/a95238ff-cd51-4bce-a606-7e69a4503723"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/251980/471817/37cfa9b9-0413-4792-bd1a-fde34c9f23f2"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  src="https://dune.com/embeds/1815693/2988035/d97da1f6-aacf-4df2-996d-8d2c97717558"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1815695/2988040/67b224f5-faec-4200-8969-64ec91a4635f"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>

              <IfrarmeItem
                src="https://tokenterminal.com/terminal/projects/avalanche/embed/key_metrics"
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
