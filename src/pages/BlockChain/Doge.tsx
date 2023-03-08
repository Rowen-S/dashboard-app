import { useGetQuotesQuery } from 'services/cmcPro'
import styled from 'styled-components/macro'
import { AutoColumn } from 'components/Column'
import Card from 'components/Card'
import IntroduceToken from 'components/Introduce'
import { IfrarmeItem } from './styleds'

import AppBody from 'pages/AppBody'
import { TYPE } from 'theme'

import CoinLogo from 'assets/images/doge.png'

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

export default function Doge() {
  const { data: quotes } = useGetQuotesQuery('DOGE')

  const tokenInfo = {
    logo: CoinLogo,
    desc: `Dogecoin (DOGE) is based on the popular "doge" Internet meme and features a Shiba Inu on its logo. The open-source digital currency was created by Billy Markus from Portland, Oregon and Jackson Palmer from Sydney, Australia, and was forked from Litecoin in December 2013. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme.
    <a href='//dogecoin.com/' target="_blank">Website</a>`,
    social: {
      twitterUri: '//twitter.com/dogecoin',
      discordUri: '//discord.com/invite/dogecoin',
      radditUri: '//www.reddit.com/r/dogecoin',
      githubUri: '//github.com/dogecoin',
    },
    explorerUri: 'https://blockchair.com/dogecoin',
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
                  <TYPE.subHeader fontWeight="600">DOGE Price</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.DOGE[0]?.quote?.USD.price?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    ${quotes?.data?.DOGE[0]?.quote?.USD.market_cap?.toLocaleString() || 0}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">Circulating Supply</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {quotes?.data?.DOGE[0]?.circulating_supply?.toLocaleString() || 0} DOGE
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper>
            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts allow-popups"
              src={'https://tokenterminal.com/terminal/projects/dogecoin/embed/key_metrics'}
              width="100%"
              height="1350px"
              frameBorder={0}
            />
            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts allow-popups"
              src={'https://tokenterminal.com/terminal/projects/dogecoin/embed/revenue_share'}
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
