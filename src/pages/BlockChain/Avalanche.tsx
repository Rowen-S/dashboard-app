import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import styled from 'styled-components/macro'

import AppBody from 'pages/AppBody'
import { ExternalLink, TYPE } from 'theme'
import Card from 'components/Card'

import { get } from 'utils/request'

import Twitter from 'assets/svg/twitter.svg'
import Discord from 'assets/svg/discord.svg'
import Raddit from 'assets/svg/raddit.svg'
import AvaxLogo from 'assets/images/avax.png'
import { useEffect, useState } from 'react'

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

const IfrarmeItem = styled.iframe`
  background-color: ${({ theme }) => theme.bg7};
`
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

export default function Avalanche() {
  const [totalBurntFees, setTotalBurntFees] = useState<string | undefined>()

  useEffect(() => {
    let active = true

    load()
    return () => {
      active = false
    }
    async function load() {
      setTotalBurntFees(undefined) // this is optional
      if (!active) {
        return
      }
      const data = await get('https://explorer-api.avax.network/summaryinfo')
      setTotalBurntFees(data.result.totalBurntFees || 0)
    }
  }, [])

  return (
    <AppBody>
      <AutoColumn gap="65px">
        <Row>
          <Logo src={AvaxLogo} />
          <ProjectDetailWrapper gap="25px">
            <ProjectIntroduce
              dangerouslySetInnerHTML={{
                __html: `
                Avalanche is an open, programmable smart contracts platform for decentralized applications.
                <a href='//www.avax.network/' target="_blank">Website</a>`,
              }}
            />
            <RowBetween width={'90%'}>
              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
                <ProjectSocial>
                  <ExternalLink href={'//twitter.com/avalancheavax'}>
                    <SocialLogo src={Twitter} alt="twitter" />
                  </ExternalLink>
                  <ExternalLink href={'//discord.com/invite/RwXY7P6'}>
                    <SocialLogo src={Discord} alt="discord" />
                  </ExternalLink>
                  <ExternalLink href={'//www.reddit.com/r/Avax'}>
                    <SocialLogo src={Raddit} alt="raddit" />
                  </ExternalLink>
                </ProjectSocial>
              </AutoColumn>

              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Explorer</TYPE.largeHeader>
                <TYPE.body>
                  <ExternalLink href={'//snowtrace.io/'}>https://snowtrace.io/</ExternalLink>
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
                <IfrarmeItem
                  src="https://dune.com/embeds/1470705/2488386/547e937c-340b-4177-8d10-13318375992a"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                {/* market cap */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1109099/1894548/f7875512-bc90-4e00-94c3-7316b2276afb"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
                {/* total supply */}
                {/* <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Total Supply</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                      {totalSupply?.result
                        ? Number((Number(totalSupply.result) / Math.pow(10, 18)).toFixed()).toLocaleString()
                        : '-'}{' '}
                      ETH
                    </TYPE.largeHeader>
                  </AutoColumn>
                </DuneCard> */}

                {/* Circulating Supply */}
                <IfrarmeItem
                  src="https://dune.com/embeds/1487725/2521411/d3c12ce1-40a5-40dc-8e45-cbca4c239e31"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                {/* total value of stablecoins */}
                <IfrarmeItem
                  src="https://dune.com/embeds/1067853/1833464/45ab4a19-8b3b-4260-8930-5e95dfc0b0b3"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
              {/* price-chart */}
              <IfrarmeItem
                src="https://dune.com/embeds/1470761/2488455/5c8ebd50-b62e-446e-95f0-39bc707321dc"
                width="100%"
                height="480px"
                frameBorder={0}
              />
            </>
            {/* Users */}
            <>
              <TYPE.largeHeader>Users</TYPE.largeHeader>
              {/* total account */}
              <IfrarmeItem
                src="https://dune.com/embeds/1079361/1850401/4b6063c2-3420-4c5c-8de1-517f7690725f"
                width="100%"
                height="230px"
                frameBorder={0}
              />
              <BlockBasicWrapper>
                {/* active accounts(24h) */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/1105848/1888312/e6cc9fbf-12c0-4490-99dd-e7922076c1c3"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
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
                <IfrarmeItem
                  src="https://dune.com/embeds/1079361/1850402/c2e99a4f-9e54-4e7d-8870-d34fc636f60f"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
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
                <IfrarmeItem
                  src="https://dune.com/embeds/1687400/2790720/f36a2374-4462-403b-8689-6793b0b3c843"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
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
                {/* <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Total nodes</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'40px'} textAlign="center" color={'#1e1870'} fontSize="42px">
                      {nodeCount?.result?.TotalNodeCount
                        ? Number(nodeCount?.result?.TotalNodeCount).toLocaleString()
                        : '-'}
                    </TYPE.largeHeader>
                    <TYPE.mediumHeader></TYPE.mediumHeader>
                  </AutoColumn>
                </DuneCard> */}
                {/* total minner/validator */}
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/612372/1143523/c1c14e2a-25f4-41f3-bcf4-5e9190a58382"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}

                {/* burned */}
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Total burned</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'40px'} textAlign="center" color={'#1e1870'} fontSize="42px">
                      {totalBurntFees}
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
                {/* <IfrarmeItem
                  src="https://dune.com/embeds/610396/1139837/eda9a5b9-9e1a-45d2-918a-02f4f303f766"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                /> */}
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
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Avg Block Time</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'40px'} textAlign="center" color={'#1e1870'} fontSize="42px">
                      2.1 s
                    </TYPE.largeHeader>
                    <TYPE.mediumHeader></TYPE.mediumHeader>
                  </AutoColumn>
                </DuneCard>
                {/* Block Count */}
                <IfrarmeItem
                  src="https://dune.com/embeds/1521966/2556210/899df5ef-89d3-4566-83ab-1fd4516adb71"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockNetworkWrapper>
            </>
          </AutoColumn>
        </BlockChainWrapper>
      </AutoColumn>
    </AppBody>
  )
}
