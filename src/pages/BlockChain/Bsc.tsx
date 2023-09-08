import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'

import AppBody from 'pages/AppBody'
import { TYPE } from 'theme'

import CoinLogo from 'assets/images/bnb.png'
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

export default function Bsc() {
  const { data: quotes } = useGetQuotesQuery('BNB')
  const tokenInfo = {
    logo: CoinLogo,
    desc: `Launched in July 2017, Binance is the biggest cryptocurrency exchange globally based on daily trading volume. Binance aims to bring cryptocurrency exchanges to the forefront of financial activity globally.
  Aside from being the largest cryptocurrency exchange globally, Binance has launched a whole ecosystem of functionalities for its users. The Binance network includes the Binance Chain, Binance Smart Chain, Binance Academy, Trust Wallet and Research projects, which all employ the powers of blockchain technology to bring new-age finance to the world. BNB is an integral part of the successful functioning of many of the Binance sub-projects.
  <a href='//bnbchain.org/en/' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/BNBChain/',
      discordUri: '//discord.com/invite/QRTQvfhADQ',
      radditUri: '//www.reddit.com/r/bsc/',
      githubUri: '//github.com/bnb-chain',
    },
    explorerUri: 'https://bscscan.com/',
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
                  <TYPE.subHeader fontWeight="600">BNB Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.BNB[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.BNB[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.BNB[0]?.circulating_supply?.toLocaleString() || 0} BNB
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>

            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts allow-popups"
              src="https://dune.com/embeds/1814961/2986855/be588718-7d2a-4669-a8be-1486978f3fc2"
              width="100%"
              height="350px"
              frameBorder={0}
            />

            {/* Users */}
            <>
              <TYPE.largeHeader>Users</TYPE.largeHeader>
              <BlockBasicWrapper>
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1814966/2986862/ef795701-eac4-4092-aef1-4a3d7f4af922"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1814971/2986871/8bb90f81-a2f1-4051-8fcb-18d643831058"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1814975/2986876/22bf4e94-bc06-428d-a6ff-1487e8fba1cd"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
              <IfrarmeItem
                sandbox="allow-same-origin allow-scripts allow-popups"
                src="https://dune.com/embeds/1814985/2986888/5d7072c4-dc58-4c23-95f0-deffc0282175"
                width="100%"
                height="350px"
                frameBorder={0}
              />
            </>
            {/* Transaction */}
            <>
              <TYPE.largeHeader>Transaction</TYPE.largeHeader>
              <BlockBasicWrapper>
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1815138/2987203/e6be20f7-d043-4aec-9746-47ce9aad4607"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1815138/2987205/b3b0f78c-ede6-4c34-8886-125359c3f6ba"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1815138/2987205/b3b0f78c-ede6-4c34-8886-125359c3f6ba"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
              <IfrarmeItem
                sandbox="allow-same-origin allow-scripts allow-popups"
                src="https://dune.com/embeds/1815138/2987210/8d086b48-be3e-4762-b6b2-3933d52b519c"
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
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1815164/2987262/8f806255-5262-4a6a-854b-094bdb4d127c"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1815164/2987264/d1b95529-140e-4688-88ee-9467ac90dbb3"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1815170/2987270/225e2fe2-15e5-4543-a0a3-60653229e196"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  src="https://dune.com/embeds/1815172/2987275/15440ada-fb2f-40fe-a0cf-606ac2c9c7a8"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>

              <IfrarmeItem
                sandbox="allow-same-origin allow-scripts allow-popups"
                src="https://tokenterminal.com/terminal/projects/binance-smart-chain/embed/key_metrics"
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
