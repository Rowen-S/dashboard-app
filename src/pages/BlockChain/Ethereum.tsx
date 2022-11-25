import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import styled from 'styled-components/macro'
import { useGetEthereumStatsQuery } from 'services/ethereum'
import Card from 'components/Card'

import AppBody from 'pages/AppBody'
import { ExternalLink, Line, TYPE } from 'theme'

import Twitter from 'assets/svg/twitter.svg'
import Discord from 'assets/svg/discord.svg'
import Raddit from 'assets/svg/raddit.svg'
import ETHLogo from 'assets/images/eth-logo.png'

const Logo = styled.img`
  flex: none;
  width: 180px;
  height: 180px;
  padding: 24px;
  border-radius: 6px;
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

export default function Ethereum() {
  const { data: totalSupply } = useGetEthereumStatsQuery('ethsupply')
  const { data: nodeCount } = useGetEthereumStatsQuery('nodecount')
  return (
    <AppBody>
      <AutoColumn gap="65px">
        <Row>
          <Logo src={ETHLogo} />
          <ProjectDetailWrapper gap="25px">
            <ProjectIntroduce
              dangerouslySetInnerHTML={{
                __html: `Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.
                Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014. 
                The Ethereum Foundation officially launched the blockchain on July 30, 2015, under the prototype codenamed “Frontier.” Since then, there has been several network updates — “Constantinople” on Feb. 28, 2019, “Istanbul” on Dec. 8, 2019, “Muir Glacier” on Jan. 2, 2020, “Berlin” on April 14, 2021, and most recently on Aug. 5, 2021, the “London” hard fork.
                Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud. <a href='//ethereum.org/' target="_blank">Website</a>`,
              }}
            />
            <RowBetween width={'90%'}>
              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
                <ProjectSocial>
                  <ExternalLink href={'//twitter.com/ethereum'}>
                    <SocialLogo src={Twitter} alt="twitter" />
                  </ExternalLink>
                  <ExternalLink href={'//discord.com/invite/CetY6Y4'}>
                    <SocialLogo src={Discord} alt="discord" />
                  </ExternalLink>
                  <ExternalLink href={'//www.reddit.com/r/ethereum'}>
                    <SocialLogo src={Raddit} alt="raddit" />
                  </ExternalLink>
                </ProjectSocial>
              </AutoColumn>

              <AutoColumn gap="12px">
                <TYPE.largeHeader fontSize={18}>Explorer</TYPE.largeHeader>
                <TYPE.body>
                  <ExternalLink href={'//ethereum.io/'}>https://ethereum.io/</ExternalLink>
                </TYPE.body>
              </AutoColumn>
            </RowBetween>
            <TYPE.body style={{ wordBreak: 'break-all' }}></TYPE.body>
          </ProjectDetailWrapper>
        </Row>
        <BlockChainWrapper gap="24px">
          <AutoColumn gap="24px">
            {/* <TYPE.largeHeader>Basic</TYPE.largeHeader>
            <BlockBasicWrapper>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.body>ETH</TYPE.body>
                  <TYPE.subHeader>
                    Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of
                    decentralized applications.
                  </TYPE.subHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.body>Website</TYPE.body>
                  <TYPE.link>https://ethereum.org/</TYPE.link>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.body>Explorer</TYPE.body>
                  <TYPE.link>https://etherscan.io/</TYPE.link>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.body>Community-twitter</TYPE.body>
                  <TYPE.subHeader>https://twitter.com/ethereum</TYPE.subHeader>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.body>Community-discord</TYPE.body>
                  <TYPE.link>https://discord.com/invite/CetY6Y4</TYPE.link>
                </AutoColumn>
              </DuneCard>
              <DuneCard>
                <AutoColumn gap="16px">
                  <TYPE.body>Community-raddit</TYPE.body>
                  <TYPE.link>https://www.reddit.com/r/ethereum/</TYPE.link>
                </AutoColumn>
              </DuneCard>
            </BlockBasicWrapper> */}

            {/* Token */}
            <>
              <TYPE.largeHeader>Token</TYPE.largeHeader>
              <BlockBasicWrapper>
                <IfrarmeItem
                  src="https://dune.com/embeds/1096522/1891389/984498df-80c5-4306-b507-8f25c9b54733"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1109099/1894548/f7875512-bc90-4e00-94c3-7316b2276afb"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Total Supply</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'50px'} textAlign="center" color={'#1e1870'}>
                      {totalSupply?.result
                        ? Number((Number(totalSupply.result) / Math.pow(10, 18)).toFixed()).toLocaleString()
                        : '-'}{' '}
                    </TYPE.largeHeader>
                  </AutoColumn>
                </DuneCard>
              </BlockBasicWrapper>
              <AutoColumn gap="16px">
                <TYPE.label>ETH Price</TYPE.label>
                <Line />
                <IfrarmeItem
                  src="https://dune.com/embeds/1098165/1894199/831e969f-628b-4022-9fc0-69dcaa328fa6"
                  width="100%"
                  height="480px"
                  frameBorder={0}
                />
              </AutoColumn>
            </>
            {/* Account */}
            <>
              <TYPE.largeHeader>Account</TYPE.largeHeader>
              <IfrarmeItem
                src="https://dune.com/embeds/1096522/1891372/eb0813ac-608e-4732-bb43-906ccd39a678"
                width="100%"
                height="230px"
                frameBorder={0}
              />
              <BlockBasicWrapper>
                <IfrarmeItem
                  src="https://dune.com/embeds/1105848/1888312/e6cc9fbf-12c0-4490-99dd-e7922076c1c3"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1105848/1888310/a727eabe-afb9-4cde-b362-a0835260ef33"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1105848/1888307/52adafbb-46b0-42ad-a08c-8f5715d42e39"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  src="https://dune.com/embeds/1107210/1890861/bf22fa52-15f8-4b5a-883e-cb138dd35caf"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1107210/1890862/cdc4a0cc-a286-4909-9f2d-d0f936c8e3b7"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1107210/1890863/4c857f0c-f33a-42d2-bb63-9db1930c00e0"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>

              <BlockNetworkWrapper>
                <IfrarmeItem
                  src="https://dune.com/embeds/1097143/1875623/77594d22-5858-4e34-af6c-6b62add6996e"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />

                <IfrarmeItem
                  src="https://dune.com/embeds/1103912/1884830/aee31897-b6dc-46c0-9922-f3e7a4e88d11"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockNetworkWrapper>

              <BlockBasicWrapper>
                <IfrarmeItem
                  src="https://dune.com/embeds/1128714/1927433/02c36343-bc3f-4dc6-89ae-2d0845cdb1c2"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1128714/1929827/9a59ccaa-1a18-4fef-a774-303e59b1c192"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1128714/1929828/a3277638-26b4-4dd9-ba8d-4b8c033a991c"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
              <AutoColumn gap="16px">
                <TYPE.label>Ethereum Smart Con tracts Creation</TYPE.label>
                <Line />
                <IfrarmeItem
                  src="https://dune.com/embeds/649454/1207174/0bf1ec6f-b73a-43fc-a26c-d0e1be476223"
                  width="100%"
                  height="480px"
                  frameBorder={0}
                />
              </AutoColumn>
            </>
            {/* Transaction */}
            <>
              <TYPE.largeHeader>Transaction</TYPE.largeHeader>
              <BlockBasicWrapper>
                <IfrarmeItem
                  src="https://dune.com/embeds/1109717/1895694/2adf4ffb-0a96-4958-8005-b59cddd0a9df"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1109717/1895693/0824e742-6e77-4dac-9efa-42a3cdca7149"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1109717/1895692/d6daf2da-8f9c-49b4-be9a-a107b4806123"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
              <AutoColumn gap="16px">
                <TYPE.label>Transacntions</TYPE.label>
                <Line />
                <IfrarmeItem
                  src="https://dune.com/embeds/1097063/1875455/15ba0bd6-f5ab-4bd6-b889-d64d33776c44"
                  width="100%"
                  height="480px"
                  frameBorder={0}
                />
              </AutoColumn>
              <BlockNetworkWrapper>
                <AutoColumn gap="16px">
                  <TYPE.label>24 Top 100 Gas Spender</TYPE.label>
                  <Line />
                  <IfrarmeItem
                    src="https://dune.com/embeds/1126409/1922958/4c6c580a-7c24-49d6-94d0-9ab5644c482c"
                    width="100%"
                    height="480px"
                    frameBorder={0}
                  />
                </AutoColumn>

                <AutoColumn gap="16px">
                  <TYPE.label>24 Top 100 Gas Consumer</TYPE.label>
                  <Line />
                  <IfrarmeItem
                    src="https://dune.com/embeds/1126053/1922444/bce90430-6451-4082-ae58-1b27278b3774"
                    width="100%"
                    height="480px"
                    frameBorder={0}
                  />
                </AutoColumn>
              </BlockNetworkWrapper>
            </>

            {/* Network */}
            <>
              <TYPE.largeHeader>Network</TYPE.largeHeader>
              <BlockNetworkWrapper>
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.subHeader fontWeight="600">Total nodes</TYPE.subHeader>
                    <TYPE.largeHeader paddingY={'40px'} textAlign="center" color={'#1e1870'} fontSize="42px">
                      {nodeCount?.result?.TotalNodeCount
                        ? Number(nodeCount?.result?.TotalNodeCount).toLocaleString()
                        : '-'}
                    </TYPE.largeHeader>
                    <TYPE.mediumHeader></TYPE.mediumHeader>
                  </AutoColumn>
                </DuneCard>
                <IfrarmeItem
                  src="https://dune.com/embeds/612372/1143523/c1c14e2a-25f4-41f3-bcf4-5e9190a58382"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockNetworkWrapper>
              <BlockBasicWrapper>
                <IfrarmeItem
                  src="https://dune.com/embeds/1128328/1926682/cc804049-2a9e-407c-861d-1eec0df61cff"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/1128328/1926692/0f85dfec-87e6-4dbb-8602-2f8484b7312d"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
                <IfrarmeItem
                  src="https://dune.com/embeds/610396/1139837/eda9a5b9-9e1a-45d2-918a-02f4f303f766"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockBasicWrapper>
              <AutoColumn gap="16px">
                <TYPE.label>Total Burned</TYPE.label>
                <Line />
                <IfrarmeItem
                  src="https://dune.com/embeds/1118249/1911930/89688f90-fb39-4af0-9b06-2750af5b8534"
                  width="100%"
                  height="480px"
                  frameBorder={0}
                />
              </AutoColumn>
              <AutoColumn gap="16px">
                <TYPE.label>Daily Burned</TYPE.label>
                <Line />
                <IfrarmeItem
                  src="https://dune.com/embeds/1118249/1911930/37a7a4f4-e472-4f56-9c67-c26e76d93e47"
                  width="100%"
                  height="480px"
                  frameBorder={0}
                />
              </AutoColumn>

              <BlockNetworkWrapper>
                <AutoColumn gap="16px">
                  <TYPE.label>Avg Block Time</TYPE.label>
                  <Line />
                  <IfrarmeItem
                    src="https://dune.com/embeds/1109760/1895778/501211d7-ca11-4b29-ad48-06bd7f1efe77"
                    width="100%"
                    height="480px"
                    frameBorder={0}
                  />
                </AutoColumn>
                <AutoColumn gap="16px">
                  <TYPE.label>Block Count</TYPE.label>
                  <Line />
                  <IfrarmeItem
                    src="https://dune.com/embeds/661189/1228271/a8eb091e-2acb-472d-a97c-e53c96808d11"
                    width="100%"
                    height="480px"
                    frameBorder={0}
                  />
                </AutoColumn>
              </BlockNetworkWrapper>
            </>
          </AutoColumn>
        </BlockChainWrapper>
      </AutoColumn>
    </AppBody>
  )
}
