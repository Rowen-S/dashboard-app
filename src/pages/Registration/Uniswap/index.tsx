import { AutoColumn } from 'components/Column'
// import Row from 'components/Row'
import styled from 'styled-components/macro'
import { Line, TYPE } from 'theme'

import { ButtonOutlined } from 'components/Button'
import { useNavigate } from 'react-router-dom'
// import { Linkedin } from 'react-feather'
// import { OutlineCard } from 'components/Card'
import AppBody from 'pages/AppBody'

import { ReactComponent as UniswapLogoPink } from 'assets/svg/uniswap_logo_pink.svg'
// import AvatarExample from 'components/Avatar'
import { shortenAddress } from 'utils'

const BaseWrapper = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  & > div {
    display: flex;
    justify-content: center;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    & > div {
      flex-direction: column;
    }
  `};
`

const ButtonWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`

// const TableInformation = styled.table`
//   border: 1px solid ${({ theme }) => theme.bg2};
//   border-collapse: collapse;
//   font-size: 13px;
//   color: ${({ theme }) => theme.text1};
//   & > tr > td {
//     padding: 12px 16px;
//     border: 1px solid ${({ theme }) => theme.bg2};
//     :first-child {
//       width: 222px;
//       font-weight: 600;
//     }
//   }
// `

const Iframe = styled.iframe`
  border: 1px solid ${({ theme }) => theme.bg2};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    height: 1500px;
  `}
`

// const TeamWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-gap: 24px;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     grid-template-columns: repeat(2, 1fr);
//   `}
// `
// const TeamItem = styled(AutoColumn)`
//   text-align: center;
// `

// const TeamLink = styled(ExternalLink)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: fit-content;
//   margin: 0px auto;
//   width: 16px;
//   height: 16px;
//   background-color: ${({ theme }) => theme.bg5};
//   & > svg {
//     stroke: ${({ theme }) => theme.bg0};
//   }
// `

const AboutWrapper = styled(AutoColumn)`
  width: 78%;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`
const AboutHTMLWrapper = styled.div`
  width: 78%;
  * > img {
    width: 100%;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`

export default function Uniswap() {
  const navigate = useNavigate()

  /**  const teamList = [
    {
      name: 'Brad Garlinghouse',
      position: 'CEO',
      linkedIn: '',
    },
    {
      name: 'David Schwartz',
      position: 'CTO',
      linkedIn: '',
    },
    {
      name: 'Brynly Llyr',
      position: 'Legal Adviser',
      linkedIn: '',
    },
    {
      name: 'Brad Garlinghouse',
      position: 'CFO',
      linkedIn: '',
    },
    {
      name: 'David Schwartz',
      position: 'COO',
      linkedIn: '',
    },
  ] */
  return (
    <AppBody>
      <AutoColumn gap="24px">
        <TYPE.largeHeader fontSize={28}>Uniswap Labs</TYPE.largeHeader>
        <AutoColumn gap="12px">
          <TYPE.largeHeader>Base Information</TYPE.largeHeader>
          <Line />
        </AutoColumn>
        <BaseWrapper>
          <div>
            <TYPE.body>Founded on:&nbsp;</TYPE.body>
            <TYPE.black>2018</TYPE.black>
          </div>
          <div>
            <TYPE.body>Protocols:&nbsp;</TYPE.body>
            <TYPE.black>3</TYPE.black>
          </div>
          <div>
            <TYPE.body>Members:&nbsp;</TYPE.body>
            <TYPE.black>85</TYPE.black>
          </div>
        </BaseWrapper>
        <ButtonWrapper>
          <ButtonOutlined padding={'9px 24px'} onClick={() => navigate('/uniswap/info')}>
            <UniswapLogoPink fill="#666666" width="17px" />
            <TYPE.subHeader marginLeft={'8px'}>Uniswap</TYPE.subHeader>
          </ButtonOutlined>
        </ButtonWrapper>
        <AutoColumn gap="12px" style={{ marginTop: 24 }}>
          <TYPE.largeHeader>Total Revenue</TYPE.largeHeader>
          <Line />
        </AutoColumn>
        <AutoColumn gap="8px">
          <TYPE.black>Total revenue 30d</TYPE.black>
        </AutoColumn>
        <Iframe
          sandbox="allow-same-origin allow-scripts"
          src={'https://tokenterminal.com/terminal/projects/uniswap/embed/revenue_share'}
          width="100%"
          height="1350px"
          frameBorder={1}
        />
        <AutoColumn gap="8px">
          <TYPE.black>Annualized total revenue</TYPE.black>
        </AutoColumn>
        <Iframe
          sandbox="allow-same-origin allow-scripts"
          src={'https://tokenterminal.com/terminal/projects/uniswap/embed/key_metrics'}
          width="100%"
          height="1350px"
          frameBorder={1}
        />
        <AutoColumn gap="16px" style={{ marginTop: 20 }}>
          <TYPE.largeHeader fontSize={28}>About UNI</TYPE.largeHeader>
          <Line />
          <AboutWrapper gap="16px">
            <AboutHTMLWrapper
              dangerouslySetInnerHTML={{
                __html: `
                <ul><li><p>UNI, the Uniswap Protocol token, is live!</p></li><li><p>UNI contract address: <a href="https://etherscan.io/token/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984">${shortenAddress(
                  '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
                )}</a></p></li><li><p>60% of the UNI genesis supply is allocated to Uniswap community members, a quarter of which (15% of total supply) has already been distributed to past users</p></li><li><p>To start, UNI is available through four liquidity mining pools: UNI holders may vote to add more pools after an initial 30-day governance grace period</p></li></ul>
                <p><strong>UNI Allocation</strong></p>
                <p>1 billion UNI have been minted at genesis and will become accessible over the course of 4 years. The initial four year allocation is as follows:</p>
                <ul><li><p>60.00% to Uniswap community members <code>600,000,000 UNI</code></p></li><li><p>21.266% to team members and future employees with 4-year vesting <code>212,660,000 UNI</code></p></li><li><p>18.044% to investors with 4-year vesting <code>180,440,000 UNI</code></p></li><li><p>0.69% to advisors with 4-year vesting <code>6,900,000 UNI</code></p></li></ul>
                <p>A <strong>perpetual inflation rate of 2% per year will start after 4 years</strong>, ensuring continued participation and contribution to Uniswap at the expense of passive UNI holders.</p>
                <p><img src="https://uniswap.org/images/posts/uni/Genesis.png"></p>
                <p><img src="https://uniswap.org//images/posts/uni/Inflation.png"></p>
                `,
              }}
            />

            {/* <TYPE.mediumHeader marginTop={'24px'}>Team</TYPE.mediumHeader>
            <TeamWrapper>
              {teamList.map((t, i) => (
                <OutlineCard padding={'24px 16px'} key={t.name + i}>
                  <TeamItem gap="16px">
                    <Row justify={'center'}>
                      <AvatarExample name={t.name} size={64} />
                    </Row>
                    <AutoColumn gap="8px">
                      <TYPE.subHeader fontWeight={500}>{t.name}</TYPE.subHeader>
                      <TYPE.subHeader>{t.position}</TYPE.subHeader>
                    </AutoColumn>
                    <TeamLink href={t.linkedIn}>
                      <Linkedin size={12} />
                    </TeamLink>
                  </TeamItem>
                </OutlineCard>
              ))}
            </TeamWrapper> */}
          </AboutWrapper>
        </AutoColumn>
      </AutoColumn>
    </AppBody>
  )
}
