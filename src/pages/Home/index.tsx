import { darken } from 'polished'
import { ReactNode } from 'react'
import useTheme from 'hooks/useTheme'
import { LightCard } from 'components/Card'
import { AutoColumn, ColumnCenter } from 'components/Column'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import { TYPE } from 'theme'
import Row from 'components/Row'
import { ButtonOutlined } from 'components/Button'
// import SearchBar from './SearchBar'

import LidoBg from 'assets/images/lido-bg.png'
import LidoLogo from 'assets/images/logo-lido.png'

import HomeBg from 'assets/images/home-bg.png'

import { ReactComponent as UniswapLogoPink } from 'assets/svg/uniswap_logo_pink.svg'

import UniLogo from 'assets/images/logo-uni.png'
import UniBg from 'assets/images/bg-uni.png'

import EthBg from 'assets/images/eth-bg.png'
// import EthLogo from 'assets/images/eth.png'
import EthLogo from 'assets/images/eth-icon.png'

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
const BannerWrapper = styled(ColumnCenter)<{ src?: string }>`
  position: relative;
  /* height: calc(100vh - 120px); */
  background: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
`

const HeroContentWrapper = styled(AutoColumn)`
  /* min-width: 600px; */
  justify-items: center;
  padding: 120px 0 24px 0;
`

// const VideoWrapper = styled.div`
//   position: absolute;
//   left: 0%;
//   top: 0%;
//   right: 0%;
//   bottom: 0%;
//   -webkit-box-flex: 0;
//   -webkit-flex: 0 0 auto;
//   -ms-flex: 0 0 auto;
//   flex: 0 0 auto;
// `
// const VideoComponents = styled.video`
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: 50% 50%;
//   margin: auto;
//   right: -100%;
//   bottom: -100%;
//   top: -100%;
//   left: -100%;
//   object-fit: cover;
//   z-index: -100;
// `
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

const RegistrationCard = styled(LightCard)`
  padding: 0;
  margin: 0;
  display: block;
  border: 1px solid ${({ theme }) => theme.black};
  text-decoration: none;
  color: unset;
  /* image */
  overflow: hidden;
  :hover {
    & > div > #project-bg {
      transform: scale(1.2);
    }
  }
`

const LogoWrapper = styled.div<{ src?: string }>`
  border-radius: 50%;
  opacity: 0.96;
  border: 1px solid ${({ theme }) => darken(0.1, theme.bg0)};
  background: ${({ theme }) => theme.white};
  background: url(${({ src }) => src});
  background-size: contain;

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

const RegistrationBgWrapper = styled.div`
  height: 180px;
  overflow: hidden;
`

const RegistrationBg = styled.div<{ url: string }>`
  height: 100%;
  background: ${({ url }) => (url ? `url(${url}) no-repeat ` : 'unset')};
  background-size: cover;
  background-position: center center;
  z-index: -1;
  transform: scale(1);
  transition: all 0.5s ease-out;
`

const RegistrationInfo = styled.div`
  border-top: 1px solid ${({ theme }) => theme.black};
  padding: 24px 24px 35px;
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

const HornImageAbs = styled.img<{
  left?: string
  right?: string
  top?: string
  bottom?: string
  zIndex?: number
  rotate?: string
}>`
  position: absolute;
  left: ${({ left }) => left ?? 'unset'};
  right: ${({ right }) => right ?? 'unset'};
  top: ${({ top }) => top ?? 'unset'};
  bottom: ${({ bottom }) => bottom ?? 'unset'};
  z-index: ${({ zIndex }) => zIndex ?? '1'};
  transform: rotate(${({ rotate }) => rotate ?? '0deg'});
`

export default function Home() {
  const navigate = useNavigate()

  return (
    <HomeWrapper gap="56px">
      <BannerWrapper>
        <HeroContentWrapper gap="64px">
          <img src={HomeBg} alt="Web3 Discovery Dashboard" />
          <AutoColumn gap="16px">
            <Row>
              <TYPE.largeHeader fontSize={[32, 56]} color={'primary1'}>
                Web3
              </TYPE.largeHeader>
              &nbsp; &nbsp;
              <TYPE.largeHeader fontSize={[32, 56]}> Discovery Dashboard</TYPE.largeHeader>
            </Row>
            <TYPE.largeHeader fontSize={[32]} color={'text3'} textAlign="center">
              Projects &nbsp; &nbsp; Twitter &nbsp; &nbsp; Data &nbsp; &nbsp; Idea &nbsp; &nbsp;
            </TYPE.largeHeader>
          </AutoColumn>
          {/* <SearchBar /> */}
        </HeroContentWrapper>

        {/* <VideoWrapper>
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
        </VideoWrapper> */}
      </BannerWrapper>

      <HomeContent gap="32px">
        <TYPE.label fontSize={32} textAlign="center">
          Registration
        </TYPE.label>
        <RegistrationWrapper>
          <BoxerCard to={'/lido'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={LidoBg} id="project-bg" />
            </RegistrationBgWrapper>

            <RegistrationInfo>
              <LogoWrapper src={LidoLogo} />
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
                    style={{
                      width: 'fit-content',
                    }}
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
          </BoxerCard>

          {/* uniswap */}
          <BoxerCard to={'/uniswap'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={UniBg} id="project-bg" />
            </RegistrationBgWrapper>

            <RegistrationInfo>
              <LogoWrapper src={UniLogo} />
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
                    style={{
                      width: 'fit-content',
                    }}
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
          </BoxerCard>
        </RegistrationWrapper>

        <TYPE.label fontSize={32} marginTop={32} textAlign="center">
          Blockchain Metrics
        </TYPE.label>
        <RegistrationWrapper>
          <BoxerCard to={'/ethereum'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={EthBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>
          <BoxerCard to={'/solana'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={SolBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>

          {/* Polygon */}
          <BoxerCard to={'/polygon'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={MaticBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>

          {/* BNB */}
          <BoxerCard to={'/bsc'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={BnbBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>

          {/* ADA */}
          <BoxerCard to={'/cardano'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={AdaBg} id="project-bg" />
            </RegistrationBgWrapper>

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
          </BoxerCard>

          <BoxerCard to={'/algorand'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={AlgoBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>

          <BoxerCard to={'/cosmos'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={AtomBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>

          <BoxerCard to={'/avalanche'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={AvaxBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>

          <BoxerCard to={'/doge'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={DogeBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>

          <BoxerCard to={'/litecoin'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={LtcBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>

          <BoxerCard to={'/polkadot'}>
            <RegistrationBgWrapper>
              <RegistrationBg url={DotBg} id="project-bg" />
            </RegistrationBgWrapper>
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
          </BoxerCard>
        </RegistrationWrapper>
      </HomeContent>
    </HomeWrapper>
  )
}

const BoxerCardWrapper = styled.div`
  position: relative;
  overflow: hidden;
`
function BoxerCard({ children, to }: { children: ReactNode; to: string }) {
  return (
    <BoxerCardWrapper>
      <HornImageAbs src={'data:image/svg+xml;base64,' + BoxerImg()} top="-1.5px" left="-1px" />
      <HornImageAbs src={'data:image/svg+xml;base64,' + BoxerImg()} top="-1.5px" right="-1px" rotate="90deg" />
      <HornImageAbs src={'data:image/svg+xml;base64,' + BoxerImg()} bottom="-1px" left="-1px" rotate="-90deg" />
      <HornImageAbs src={'data:image/svg+xml;base64,' + BoxerImg()} bottom="-1px" right="-1px" rotate="180deg" />
      <RegistrationCard as={Link} to={to}>
        {children}
      </RegistrationCard>
    </BoxerCardWrapper>
  )
}

function BoxerImg(): string {
  const theme = useTheme()
  const image = `
    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.41 25.41">
      <defs>
          <style>
              .cls-1 {
                  fill: ${theme.bg0} ;
              }

              .cls-2 {
                  fill: ${theme.black};
              }
          </style>
      </defs>
      <g>
          <g>
              <path class="cls-1" d="M0,24,24,0H0Z" />
              <polygon class="cls-2" points="0 24 24 0 25.41 0 24.71 0.71 0.71 24.71 0 25.41 0 24" />
          </g>
      </g>
    </svg>
  `
  return btoa(unescape(encodeURIComponent(image)))
}
