import { darken } from 'polished'
import { DarkCard } from 'components/Card'
import Column, { AutoColumn, ColumnCenter } from 'components/Column'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import { TYPE } from 'theme'
import Row from 'components/Row'
import { ButtonOutlined } from 'components/Button'

import LidoBg from 'assets/images/lido-bg.jpeg'
import { ReactComponent as UniswapLogoPink } from 'assets/svg/uniswap_logo_pink.svg'

import UniswapLogo from 'assets/svg/uniswap_logo.svg'
import SearchBar from './SearchBar'
import LidoLogo from 'components/Logo'

import EthBg from 'assets/images/eth-bg.png'
import EthLogo from 'assets/images/eth.png'

import SolBg from 'assets/images/sol-bg.png'
import SolLogo from 'assets/images/sol.png'

import MaticBg from 'assets/images/matic-bg.png'
import MaticLogo from 'assets/images/matic.png'

import BnbBg from 'assets/images/bnb-bg.png'
import BnbLogo from 'assets/images/bnb.png'

import AdaBg from 'assets/images/ada-bg.png'
import AdaLogo from 'assets/images/ada.png'

import AlgoBg from 'assets/images/algo-bg.png'
import AlgoLogo from 'assets/images/algo.png'

import AtomBg from 'assets/images/atom-bg.png'
import AtomLogo from 'assets/images/atom.png'

import AvaxBg from 'assets/images/avax-bg.png'
import AvaxLogo from 'assets/images/avax.png'

import DogeBg from 'assets/images/doge-bg.png'
import DogeLogo from 'assets/images/doge.png'

import LtcBg from 'assets/images/ltc-bg.png'
import LtcLogo from 'assets/images/ltc.png'

import DotBg from 'assets/images/dot-bg.png'
import DotLogo from 'assets/images/dot.png'

// import EthLogo from 'assets/images/eth.png'

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
  /* & > img {
    width: 100%;
    height: 100%;
  } */
`

const MetricsLogoWrapper = styled.div`
  border-radius: 50%;
  opacity: 0.96;
  background-color: ${({ theme }) => theme.white};
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
    height: 100%;
  }
`

const RegistrationBg = styled.div<{ url: string }>`
  background: ${({ url }) => (url ? `url(${url}) no-repeat 100% 100%` : 'unset')};
  min-height: 160px;
  background-size: cover;
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

export default function Home() {
  const navigate = useNavigate()

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
        <TYPE.label fontSize={32}>Blockchain Metrics</TYPE.label>
        <RegistrationWrapper>
          <RegistrationCard as={Link} to={'/ethereum'}>
            <RegistrationBg url={EthBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={EthLogo} alt="eth" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>ETH</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether.
                  ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of
                  decentralized smart contracts.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>
          <RegistrationCard as={Link} to={'/solana'}>
            <RegistrationBg url={SolBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={SolLogo} alt="Solana" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Solana</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Solana is a highly functional open source project that banks on blockchain technology’s permissionless
                  nature to provide decentralized finance (DeFi) solutions. Solana was founded by Anatoly Yakovenko,
                  Greg Fitzgerald, Raj Gokal, etc. and launched in 2020.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          {/* Polygon */}
          <RegistrationCard as={Link} to={'/polygon'}>
            <RegistrationBg url={MaticBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={MaticLogo} alt="Matic" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Polygon</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Polygon is a platform design to support infrastructure development and help Ethereum scale. Polygon
                  was founded by Jaynti Kanani, Sandeep Nailwal & Anurag Arjun and launched in 2017.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          {/* BNB */}
          <RegistrationCard as={Link} to={'/bsc'}>
            <RegistrationBg url={BnbBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={BnbLogo} alt="BNB" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Binance Smart Chain</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Binance Chain, which was renamed BNB Beacon Chain in 2022, was launched by Binance in April 2019. Its
                  primary focus is to facilitate fast, decentralized (or non-custodial) trading.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          {/* ADA */}
          <RegistrationCard as={Link} to={'/cardano'}>
            <RegistrationBg url={AdaBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={AdaLogo} alt="Cardano" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Cardano</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Cardano is a proof-of-stake blockchain platform that says its goal is to allow “changemakers,
                  innovators and visionaries” to bring about positive global change. Cardano was founded by Charles
                  Hoskinson & Jeremy Wood and launched in 2017.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          <RegistrationCard as={Link} to={'/algorand'}>
            <RegistrationBg url={AlgoBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={AlgoLogo} alt="ALGO" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Algorand</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Algorand is a self-sustaining, decentralized, blockchain-based network that supports a wide range of
                  applications. Algorand was founded by Silvio Micali and launched in 2018.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          <RegistrationCard as={Link} to={'/cosmos'}>
            <RegistrationBg url={AtomBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={AtomLogo} alt="Atom" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Cosmos</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Cosmos (ATOM) is a cryptocurrency that powers an ecosystem of blockchains designed to scale and
                  interoperate with each other. Cosmos was founded by Ethan Buchman & Jae Kwon and launched in 2019.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          <RegistrationCard as={Link} to={'/avalanche'}>
            <RegistrationBg url={AvaxBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={AvaxLogo} alt="Avax" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Avalanche</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Avalanche is a layer one blockchain that functions as a platform for decentralized applications and
                  custom blockchain networks. It is one of Ethereum’s rivals, aiming to unseat Ethereum as the most
                  popular blockchain for smart contracts. Avalanche was founded by Emin Gün Sirer and launched in 2019.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          <RegistrationCard as={Link} to={'/doge'}>
            <RegistrationBg url={DogeBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={DogeLogo} alt="doge" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Dogecoin</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  {` Dogecoin (DOGE) is based on the popular "doge" Internet meme and features a Shiba Inu on its logo.
                  Dogecoin was founded by Billy Markus & Jackson Palmer and launched in 2013.`}
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          <RegistrationCard as={Link} to={'/litecoin'}>
            <RegistrationBg url={LtcBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={LtcLogo} alt="Litecoin" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Litecoin</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Litecoin (LTC) is a cryptocurrency that was designed to provide fast, secure and low-cost payments by
                  leveraging the unique properties of blockchain technology. Litecoin was founded by Charlie Lee and
                  launched in 2010.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>

          <RegistrationCard as={Link} to={'/polkadot'}>
            <RegistrationBg url={DotBg} />
            <RegistrationInfo>
              <MetricsLogoWrapper>
                <img src={DotLogo} alt="Polkadot" />
              </MetricsLogoWrapper>
              <AutoColumn gap="12px">
                <TYPE.largeHeader>Polkadot</TYPE.largeHeader>
                <TYPE.body color={'text3'}>
                  Polkadot is an open-source sharded multichain protocol that connects and secures a network of
                  specialized blockchains, facilitating cross-chain transfer of any data or asset types, not just
                  tokens, thereby allowing blockchains to be interoperable with each other. Polkadot was founded by
                  Gavin Wood and launched in 2020.
                </TYPE.body>
              </AutoColumn>
            </RegistrationInfo>
          </RegistrationCard>
        </RegistrationWrapper>
      </HomeContent>
    </HomeWrapper>
  )
}
