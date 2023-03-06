import { LightCard } from 'components/Card'
import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'
import { Line, TYPE } from 'theme'
import { IfrarmeItem } from 'pages/BlockChain/styleds'

const MetricsWrapper = styled(AutoColumn)`
  width: 100%;
`

const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`

export default function Metrics() {
  const iframeList = [
    'https://dune.com/embeds/95745/191718/4b15be54-d01c-4fff-a486-b92201de6167',
    'https://dune.com/embeds/95745/191507/947135ad-fca8-4163-8efa-1c904a26b1ab',
    'https://dune.com/embeds/122276/243996/1e3afb74-ed22-4a99-b95f-f3d41075c100',
    'https://dune.com/embeds/95826/191739/e997445e-c813-4934-926e-7b90b392f212',
    'https://dune.com/embeds/570874/1068504/1c1282d4-298a-4ad6-910b-66f452163d98',
    'https://dune.com/embeds/837989/1465116/f5f28faf-e652-4104-8cca-527416375f69',
  ]
  return (
    <MetricsWrapper gap="40px">
      <LightCard padding={'24px'}>
        <TopWrapper>
          {iframeList.map((ifr) => (
            <IfrarmeItem
              sandbox="allow-same-origin allow-scripts"
              key={ifr}
              src={ifr}
              width="100%"
              height="230px"
              frameBorder={0}
            />
          ))}
        </TopWrapper>
      </LightCard>

      <AutoColumn gap="16px">
        <TYPE.largeHeader>Revenue</TYPE.largeHeader>
        <Line />
        <iframe
          sandbox="allow-same-origin allow-scripts"
          src={'https://tokenterminal.com/terminal/projects/lido-finance/embed/revenue_share'}
          width="100%"
          height="1350px"
          frameBorder={0}
        />
      </AutoColumn>
      <AutoColumn gap="16px">
        <TYPE.largeHeader>Metrics</TYPE.largeHeader>
        <Line />
        <iframe
          sandbox="allow-same-origin allow-scripts"
          src={'https://tokenterminal.com/terminal/projects/lido-finance/embed/key_metrics'}
          width="100%"
          height="1350px"
          frameBorder={0}
        />
      </AutoColumn>
    </MetricsWrapper>
  )
}
