import { useGetQuotesQuery } from 'services/cmcPro'
import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'
import Card from 'components/Card'

import AppBody from 'pages/AppBody'
import { TYPE } from 'theme'

import CoinLogo from 'assets/images/ltc.png'
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

export default function Litecoin() {
  const { data: quotes } = useGetQuotesQuery('LTC')

  const tokenInfo = {
    logo: CoinLogo,
    desc: `Litecoin (LTC) is a cryptocurrency that was designed to provide fast, secure and low-cost payments by leveraging the unique properties of blockchain technology.
    The cryptocurrency was created based on the Bitcoin (BTC) protocol, but it differs in terms of the hashing algorithm used, hard cap, block transaction times and a few other factors. Litecoin has a block time of just 2.5 minutes and extremely low transaction fees, making it suitable for micro-transactions and point-of-sale payments.
    Litecoin was founded by Charlie Lee and launched in 2010.
    <a href='//litecoin.org/' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/litecoin',
      radditUri: '//www.reddit.com/r/litecoin',
      githubUri: '//github.com/litecoin-project',
    },
    explorerUri: 'https://blockchair.com/litecoin',
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
                  <TYPE.subHeader fontWeight="600">LTC Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.LTC[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.LTC[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.LTC[0]?.circulating_supply?.toLocaleString() || 0} LTC
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>
            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts"
              src={'https://tokenterminal.com/terminal/projects/litecoin/embed/key_metrics'}
              width="100%"
              height="1350px"
              frameBorder={0}
            />
            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts"
              src={'https://tokenterminal.com/terminal/projects/litecoin/embed/revenue_share'}
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
