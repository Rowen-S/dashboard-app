import { darken } from 'polished'
import { DarkCard } from 'components/Card'
import Column, { AutoColumn, ColumnCenter } from 'components/Column'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Line, TYPE } from 'theme'
import Row from 'components/Row'
import { ButtonOutlined } from 'components/Button'

import LidoBg from 'assets/images/lido-bg.jpeg'
import { ReactComponent as UniswapLogoPink } from 'assets/svg/uniswap_logo_pink.svg'

import UniswapLogo from 'assets/svg/uniswap_logo.svg'
import SearchBar from './SearchBar'
import LidoLogo from 'components/Logo'
import Card from 'components/Card'
import { useGetEthereumStatsQuery } from 'services/ethereum'
// import UniswapPinkLogo from 'assets/svg/uniswap_logo_pink.svg'

const HomeWrapper = styled(AutoColumn)`
  width: 100%;
`
const BannerWrapper = styled(ColumnCenter)`
  position: relative;
  height: calc(100vh - 120px);
`

const HeroContentWrapper = styled(Column)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const VideoWrapper = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
`

const VideoComponents = styled.video`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  margin: auto;
  right: -100%;
  bottom: -100%;
  top: -100%;
  left: -100%;
  object-fit: cover;
  z-index: -100;
`
const HomeContent = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 1rem;
  `};
`
const RegistrationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 54px;
  grid-row-gap: 41px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
      grid-template-columns: repeat(1, 1fr);

  `};
`

const RegistrationCard = styled(DarkCard)`
  padding: unset;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text5};
  text-decoration: none;
  color: unset;

  /* image */
  overflow: hidden;

  :hover {
    border: 1px solid ${({ theme }) => theme.bg4};
  }
`

const LogoWrapper = styled.div`
  border-radius: 50%;
  opacity: 0.96;
  border: 1px solid ${({ theme }) => darken(0.1, theme.text5)};
  background-color: ${({ theme }) => theme.white};
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 46px;
    height: 46px;
  }
`

const RegistrationBg = styled.div<{ url: string }>`
  background: ${({ url }) => (url ? `url(${url}) no-repeat 100% 100%` : 'unset')};
  min-height: 160px;
`

const RegistrationInfo = styled.div`
  padding: 35px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 27px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 15px;
  `}
`

const ButtonOttions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    & > button {
      padding: 5px 6px;
    }
  `}
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
`

const IfrarmeItem = styled.iframe`
  background-color: ${({ theme }) => theme.bg7};
`

export default function Home() {
  const navigate = useNavigate()

  const { data: totalSupply } = useGetEthereumStatsQuery('ethsupply')
  const { data: nodeCount } = useGetEthereumStatsQuery('nodecount')

  return (
    <HomeWrapper gap="56px">
      <BannerWrapper>
        <HeroContentWrapper>
          <TYPE.largeHeader fontSize={58}>PUSHING BOUNDARIES,</TYPE.largeHeader>
          <TYPE.largeHeader fontSize={58}> REAPING BENEFITS.</TYPE.largeHeader>
        </HeroContentWrapper>

        <VideoWrapper>
          <VideoComponents
            autoPlay
            muted
            poster="https://assets-global.website-files.com/5ed86e0c8e1f403ffd4a902d/62c1e4e4ff36a9bbdb180e84_transparent-image.png"
          >
            <source
              src="https://assets-global.website-files.com/5ed86e0c8e1f403ffd4a902d/62835f75027da7186b88878f_Full%20scene_02-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets-global.website-files.com/5ed86e0c8e1f403ffd4a902d/62835f75027da7186b88878f_Full scene_02-transcode.mp4,https://assets-global.website-files.com/5ed86e0c8e1f403ffd4a902d/62835f75027da7186b88878f_Full scene_02-transcode.webm"
              type="video/webm"
            />
          </VideoComponents>
        </VideoWrapper>
      </BannerWrapper>

      <HomeContent gap="33px">
        <SearchBar />
        <TYPE.label fontSize={32}>Registration List</TYPE.label>
        <RegistrationWrapper>
          <RegistrationCard as={Link} to={'/lido'}>
            <RegistrationBg url={LidoBg} />
            <RegistrationInfo>
              <LogoWrapper>
                <LidoLogo />
              </LogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Lido</TYPE.largeHeader>
                <Row>
                  <TYPE.body color={'text3'}>Founded on:&nbsp;</TYPE.body>
                  <TYPE.body>2020</TYPE.body>
                </Row>
                <Row>
                  <TYPE.body color={'text3'}>stETH on Curve:&nbsp;</TYPE.body>
                  <TYPE.body>1</TYPE.body>
                </Row>
                <Row>
                  <TYPE.body color={'text3'}>Number of employees:&nbsp;</TYPE.body>
                  <TYPE.body>50-200</TYPE.body>
                </Row>
                <ButtonOttions>
                  <ButtonOutlined
                    padding={'9px 24px'}
                    onClick={(event) => {
                      event.preventDefault()
                      navigate('/lido/info')
                    }}
                  >
                    <svg width="11" height="17" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.3366 11.2375L10.113 0L2.9761 11.2375L10.113 15.4135L17.3366 11.2375ZM10.113 2.89999L5.15765 10.701L10.113 13.601L15.0684 10.6865L10.113 2.89999ZM1.82033 13.05L10.113 17.893L18.4057 13.05L18.6368 13.398C19.6127 14.9321 20.1597 16.7013 20.2203 18.5204C20.2811 20.3395 19.8533 22.1415 18.9817 23.7377C18.1103 25.3339 16.8272 26.6655 15.2669 27.5931C13.7066 28.5207 11.9265 29.0101 10.113 29.0101C8.29955 29.0101 6.5194 28.5207 4.9591 27.5931C3.3988 26.6655 2.11571 25.3339 1.24425 23.7377C0.372764 22.1415 -0.0550319 20.3395 0.00566759 18.5204C0.0663365 16.7013 0.613273 14.9321 1.58919 13.398L1.82033 13.05Z"
                        fill="#666666"
                      />
                    </svg>
                    <TYPE.subHeader marginLeft={'8px'}>Lido</TYPE.subHeader>
                  </ButtonOutlined>
                </ButtonOttions>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          {/* uniswap */}
          <RegistrationCard as={Link} to={'/uniswap'}>
            <RegistrationBg url={'https://uniswap.org/images/horse-card.png'} />

            <RegistrationInfo>
              <LogoWrapper>
                <img src={UniswapLogo} width="35" alt="uniswap" />
              </LogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Uniswap</TYPE.largeHeader>
                <Row>
                  <TYPE.body color={'text3'}>Founded on:&nbsp;</TYPE.body>
                  <TYPE.body>2018</TYPE.body>
                </Row>
                <Row>
                  <TYPE.body color={'text3'}>stETH on Curve:&nbsp;</TYPE.body>
                  <TYPE.body>3</TYPE.body>
                </Row>
                <Row>
                  <TYPE.body color={'text3'}>Number of employees:&nbsp;</TYPE.body>
                  <TYPE.body>85</TYPE.body>
                </Row>
                <ButtonOttions>
                  <ButtonOutlined
                    padding={'9px 24px'}
                    onClick={(event) => {
                      event.preventDefault()
                      navigate('/uniswap/info')
                    }}
                  >
                    <UniswapLogoPink fill="#666666" width="17px" />
                    <TYPE.subHeader marginLeft={'8px'}>Uniswap</TYPE.subHeader>
                  </ButtonOutlined>
                </ButtonOttions>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>
        </RegistrationWrapper>
        <BlockChainWrapper gap="24px">
          <AutoColumn gap="md">
            <TYPE.label fontSize={32}>Blockchain Metrics</TYPE.label>
            <Line />
          </AutoColumn>
          <AutoColumn gap="24px">
            <TYPE.largeHeader>Basic</TYPE.largeHeader>
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
            </BlockBasicWrapper>
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
              </BlockBasicWrapper>
              <AutoColumn gap="16px">
                <TYPE.label>Activate Users</TYPE.label>
                <Line />
                <IfrarmeItem
                  src="https://dune.com/embeds/1097143/1875623/77594d22-5858-4e34-af6c-6b62add6996e"
                  width="100%"
                  height="480px"
                  frameBorder={0}
                />
              </AutoColumn>
              <BlockBasicWrapper>
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

              <AutoColumn gap="16px">
                <TYPE.label>New Users</TYPE.label>
                <Line />
                <IfrarmeItem
                  src="https://dune.com/embeds/1103912/1884830/aee31897-b6dc-46c0-9922-f3e7a4e88d11"
                  width="100%"
                  height="480px"
                  frameBorder={0}
                />
              </AutoColumn>
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
            </>
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
                    <TYPE.label>Total Supply</TYPE.label>
                    <TYPE.mediumHeader>
                      {totalSupply?.result ? Number(totalSupply.result) / 1e9 : '-'} Billion
                    </TYPE.mediumHeader>
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
            </>

            {/* Network */}
            <>
              <TYPE.largeHeader>Network</TYPE.largeHeader>
              <BlockNetworkWrapper>
                <DuneCard>
                  <AutoColumn gap="16px">
                    <TYPE.label>Total nodes</TYPE.label>
                    <TYPE.mediumHeader>{nodeCount?.result?.TotalNodeCount || '-'}</TYPE.mediumHeader>
                  </AutoColumn>
                </DuneCard>
                <IfrarmeItem
                  src="https://dune.com/embeds/612372/1143523/c1c14e2a-25f4-41f3-bcf4-5e9190a58382"
                  width="100%"
                  height="230px"
                  frameBorder={0}
                />
              </BlockNetworkWrapper>
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
            </>
          </AutoColumn>
        </BlockChainWrapper>
      </HomeContent>
    </HomeWrapper>
  )
}
