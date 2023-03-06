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
    'https://dune.com/embeds/44614/87302/cabb8f6e-f190-4f9e-a3fd-d2bee8a8f41e',
    'https://dune.com/embeds/44614/89483/ba73161c-4b40-4723-bd6e-d9c0e1d9d96b',
    'https://dune.com/embeds/65461/130842/03eea5f2-ef76-4d8d-bc76-a01b1e1df132',
    'https://dune.com/embeds/494385/936397/4ad722d7-381a-4bbc-89bb-cf04715c8e75',
    'https://dune.com/embeds/494404/936495/d18b5f88-f088-40b5-92de-df5043d24162',
    'https://dune.com/embeds/1279288/2192179/0b11e3b0-0ff6-4774-a5df-a6e83718dfb6',
  ]
  return (
    <MetricsWrapper gap="40px">
      <TopWrapper>
        {iframeList.map((ifr) => (
          <IfrarmeItem sandbox="" key={ifr} src={ifr} width="100%" height="230px" frameBorder={0} />
        ))}
      </TopWrapper>
      <AutoColumn gap="16px">
        <TYPE.largeHeader>Revenue</TYPE.largeHeader>
        <Line />
        <iframe
          sandbox=""
          src={'https://tokenterminal.com/terminal/projects/uniswap/embed/revenue_share'}
          width="100%"
          height="1350px"
          frameBorder={0}
        />
      </AutoColumn>
      <AutoColumn gap="16px">
        <TYPE.largeHeader>Metrics</TYPE.largeHeader>
        <Line />
        <iframe
          sandbox=""
          src={'https://tokenterminal.com/terminal/projects/uniswap/embed/key_metrics'}
          width="100%"
          height="1350px"
          frameBorder={0}
        />
      </AutoColumn>
    </MetricsWrapper>
  )
}
