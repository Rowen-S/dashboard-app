import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import styled from 'styled-components/macro'
import Card from 'components/Card'

import AppBody from 'pages/AppBody'
import { ExternalLink, TYPE } from 'theme'

import Twitter from 'assets/svg/twitter.svg'
import Discord from 'assets/svg/discord.svg'
import Raddit from 'assets/svg/raddit.svg'
import LtcLogo from 'assets/images/ltc.png'

const Logo = styled.img`
  flex: none;
  width: 180px;
  height: 180px;

  padding: 24px;
  border-radius: 6px;
  background: #f8f8f8;
  display: flex;
  align-self: flex-start;
`
const ProjectDetailWrapper = styled(AutoColumn)`
  margin-left: 55px;
`
const ProjectIntroduce = styled.div`
  & > a {
    color: ${({ theme }) => theme.primary1};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`

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

// const IfrarmeItem = styled.iframe`
//   background-color: ${({ theme }) => theme.bg7};
// `

const SocialLogo = styled.img`
  width: 28px;
  height: 28px;
  :hover {
    opacity: 80%;
  }
`

const ProjectSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`

export default function Dot() {
  return (
    <AppBody>
      <AutoColumn gap="65px">
        <Row>
          <Logo src={LtcLogo} />
          <ProjectDetailWrapper gap="25px">
            <ProjectIntroduce
              dangerouslySetInnerHTML={{
                __html: `
                Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can securely communicate across chains, forming the basis for a truly interoperable decentralized web.
                <a href='//polkadot.network/' target="_blank">Website</a>`,
              }}
            />
            <RowBetween width={'90%'}>
              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
                <ProjectSocial>
                  <ExternalLink href={'//twitter.com/Polkadot/'}>
                    <SocialLogo src={Twitter} alt="twitter" />
                  </ExternalLink>
                  <ExternalLink href={'//discord.com/invite/uKY3HkX/'}>
                    <SocialLogo src={Discord} alt="discord" />
                  </ExternalLink>
                  <ExternalLink href={'//www.reddit.com/r/polkadot/'}>
                    <SocialLogo src={Raddit} alt="raddit" />
                  </ExternalLink>
                </ProjectSocial>
              </AutoColumn>

              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Explorer</TYPE.largeHeader>
                <TYPE.body>
                  <ExternalLink href={'//explorer.polkascan.io/polkadot/'}>
                    https://explorer.polkascan.io/polkadot
                  </ExternalLink>
                </TYPE.body>
              </AutoColumn>
            </RowBetween>
            {/* <TYPE.body style={{ wordBreak: 'break-all' }}></TYPE.body> */}
          </ProjectDetailWrapper>
        </Row>
        <BlockChainWrapper gap="24px">
          <AutoColumn gap="24px">
            {/* Token */}
            <>
              <BlockBasicWrapper>
                {/* price */}
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Price</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                      5.16 USD
                    </TYPE.largeHeader>
                  </AutoColumn>
                </DuneCard>
                {/* market cap */}
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Market Cap</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                      6.088 billionUSD
                    </TYPE.largeHeader>
                  </AutoColumn>
                </DuneCard>
                {/* total supply */}
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Total Supply</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                      {(1263099538.26).toLocaleString()}
                    </TYPE.largeHeader>
                  </AutoColumn>
                </DuneCard>
                {/* Max Supply */}
                {/* <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Max Supply</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                      {(71769246).toLocaleString()}
                    </TYPE.largeHeader>
                  </AutoColumn>
                </DuneCard> */}
                {/* staked */}
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Staked</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                      {(616651099.6).toLocaleString()}
                    </TYPE.largeHeader>
                  </AutoColumn>
                </DuneCard>
              </BlockBasicWrapper>
              {/* price-chart */}
              {/* <IfrarmeItem
                src="https://dune.com/embeds/1098165/1894199/831e969f-628b-4022-9fc0-69dcaa328fa6"
                width="100%"
                height="480px"
                frameBorder={0}
              /> */}
            </>
            {/* Users */}
            <>
              <TYPE.largeHeader>Users</TYPE.largeHeader>
              {/* total account */}
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.subHeader fontWeight="600">total account</TYPE.subHeader>
                  <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                    {(1317596).toLocaleString()}
                  </TYPE.largeHeader>
                </AutoColumn>
              </DuneCard>
              <BlockBasicWrapper>
                {/* active accounts(24h) */}
                {/* <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">active accounts(24h)</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                      {(4480963).toLocaleString()}
                    </TYPE.largeHeader>
                  </AutoColumn>
                </DuneCard> */}
                {/* active accounts(7days) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1105848/1888310/a727eabe-afb9-4cde-b362-a0835260ef33"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* active accounts(30days) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1105848/1888307/52adafbb-46b0-42ad-a08c-8f5715d42e39"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* new accounts(24h) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1107210/1890861/bf22fa52-15f8-4b5a-883e-cb138dd35caf"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* new accounts(7days) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1107210/1890862/cdc4a0cc-a286-4909-9f2d-d0f936c8e3b7"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* new accounts(30days) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1107210/1890863/4c857f0c-f33a-42d2-bb63-9db1930c00e0"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
              </BlockBasicWrapper>

              <BlockNetworkWrapper>
                {/* active accounts(chart) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1097143/1875623/77594d22-5858-4e34-af6c-6b62add6996e"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                /> */}
                {/* new accounts(chart) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1103912/1884830/aee31897-b6dc-46c0-9922-f3e7a4e88d11"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                /> */}
              </BlockNetworkWrapper>

              <BlockBasicWrapper>
                {/* total contracts */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1128714/1927433/02c36343-bc3f-4dc6-89ae-2d0845cdb1c2"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* last month activate contracts */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1128714/1929827/9a59ccaa-1a18-4fef-a774-303e59b1c192"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* last month activate contract percent */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1128714/1929828/a3277638-26b4-4dd9-ba8d-4b8c033a991c"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
              </BlockBasicWrapper>
              {/* contracts creation */}
              {/* <IfrarmeItem
                src="https://dune.com/embeds/649454/1207174/0bf1ec6f-b73a-43fc-a26c-d0e1be476223"
                width="100%"
                height="480px"
                frameBorder={0}
              /> */}
            </>
            {/* Transaction */}
            <>
              <TYPE.largeHeader>Transaction</TYPE.largeHeader>
              <BlockBasicWrapper>
                {/* transactions(24h) */}
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">transactions(24h)</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                      {(113541).toLocaleString()}
                    </TYPE.largeHeader>
                  </AutoColumn>
                </DuneCard>
                {/* transactions(7days) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1109717/1895693/0824e742-6e77-4dac-9efa-42a3cdca7149"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* transactions(30days) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1109717/1895692/d6daf2da-8f9c-49b4-be9a-a107b4806123"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
              </BlockBasicWrapper>
              {/* Transacntions */}

              {/* transactions(daily) */}
              {/* <IfrarmeItem
                src="https://dune.com/embeds/1097063/1875455/15ba0bd6-f5ab-4bd6-b889-d64d33776c44"
                width="100%"
                height="480px"
                frameBorder={0}
              /> */}
              <BlockNetworkWrapper>
                {/* top fee spender(24h) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1126409/1922958/4c6c580a-7c24-49d6-94d0-9ab5644c482c"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                /> */}
                {/* top fee consumer(24h) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1126053/1922444/bce90430-6451-4082-ae58-1b27278b3774"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                /> */}
              </BlockNetworkWrapper>
            </>

            {/* Network */}
            <>
              <TYPE.largeHeader>Network</TYPE.largeHeader>
              <BlockNetworkWrapper>
                {/* total nodes */}
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Total nodes</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'40px'} textAlign="center" color={'#1e1870'} fontSize="42px">
                      {(688).toLocaleString()}
                    </TYPE.largeHeader>
                    <TYPE.mediumHeader></TYPE.mediumHeader>
                  </AutoColumn>
                </DuneCard>
                {/* total minner/validator */}
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Total minner/validator</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'40px'} textAlign="center" color={'#1e1870'} fontSize="42px">
                      297/688
                    </TYPE.largeHeader>
                    <TYPE.mediumHeader></TYPE.mediumHeader>
                  </AutoColumn>
                </DuneCard>
              </BlockNetworkWrapper>

              <BlockBasicWrapper>
                {/* total deposit */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1128328/1926682/cc804049-2a9e-407c-861d-1eec0df61cff"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* total depositors */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1128328/1926692/0f85dfec-87e6-4dbb-8602-2f8484b7312d"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* Percentage of Total Supply */}
                {/* <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Total Supply</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'40px'} textAlign="center" color={'#1e1870'} fontSize="42px">
                      {(71769246).toLocaleString()}
                    </TYPE.largeHeader>
                    <TYPE.mediumHeader></TYPE.mediumHeader>
                  </AutoColumn>
                </DuneCard> */}
              </BlockBasicWrapper>

              {/* Total Burned */}
              {/* <IfrarmeItem
                src="https://dune.com/embeds/1118249/1911930/89688f90-fb39-4af0-9b06-2750af5b8534"
                width="100%"
                height="480px"
                frameBorder={0}
              /> */}

              <BlockNetworkWrapper>
                {/* Avg Block Time */}
                {/* <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Avg Block Time</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'40px'} textAlign="center" color={'#1e1870'} fontSize="42px">
                      2 minutes 26 seconds
                    </TYPE.largeHeader>
                    <TYPE.mediumHeader></TYPE.mediumHeader>
                  </AutoColumn>
                </DuneCard> */}
                {/* Block Count */}
                {/* <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Block Count</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'40px'} textAlign="center" color={'#1e1870'} fontSize="42px">
                      {(2381698).toLocaleString()}
                    </TYPE.largeHeader>
                    <TYPE.mediumHeader></TYPE.mediumHeader>
                  </AutoColumn>
                </DuneCard> */}
              </BlockNetworkWrapper>
            </>
          </AutoColumn>
        </BlockChainWrapper>
      </AutoColumn>
    </AppBody>
  )
}
