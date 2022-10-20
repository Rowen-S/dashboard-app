import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import styled from 'styled-components/macro'
import { ExternalLink, Line, TYPE } from 'theme'

import { ButtonOutlined } from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { FileText, Linkedin } from 'react-feather'
import { OutlineCard } from 'components/Card'
import AppBody from 'pages/AppBody'

import { ReactComponent as UniswapLogoPink } from 'assets/svg/uniswap_logo_pink.svg'
import AvatarExample from 'components/Avatar'

const ButtonWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
`

const Iframe = styled.iframe`
  padding: 0px 20px;
  border: 1px solid ${({ theme }) => theme.bg2}; ;
`

const TableInformation = styled.table`
  border: 1px solid ${({ theme }) => theme.bg2};
  border-collapse: collapse;
  font-size: 13px;
  color: ${({ theme }) => theme.text1};
  & > tr > td {
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.bg2};
    :first-child {
      width: 222px;
      font-weight: 600;
    }
  }
`

const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 24px;
`

const TeamItem = styled(AutoColumn)`
  text-align: center;
`

const TeamLink = styled(ExternalLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0px auto;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.bg5};
  & > svg {
    stroke: ${({ theme }) => theme.bg0};
  }
`

export default function Uniswap() {
  const navigate = useNavigate()

  const teamList = [
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
  ]
  return (
    <AppBody>
      <AutoColumn gap="24px">
        <TYPE.largeHeader fontSize={28}>Optimism</TYPE.largeHeader>
        <AutoColumn gap="12px">
          <TYPE.largeHeader>Base Information</TYPE.largeHeader>
          <Line />
        </AutoColumn>
        <RowBetween width={'55%'}>
          <Row justify="center" width={'auto'}>
            <TYPE.body>Founded on:&nbsp;</TYPE.body>
            <TYPE.black>2022/02/22</TYPE.black>
          </Row>
          <Row justify="center" width={'auto'}>
            <TYPE.body>Protocols:&nbsp;</TYPE.body>
            <TYPE.black>8</TYPE.black>
          </Row>
          <Row justify="center" width={'auto'}>
            <TYPE.body>Protocols:&nbsp;</TYPE.body>
            <TYPE.black>12</TYPE.black>
          </Row>
        </RowBetween>
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
          src={'https://tokenterminal.com/terminal/projects/lido-finance/embed/key_metrics'}
          width="100%"
          height="1350px"
          frameBorder={1}
        />
        <AutoColumn gap="8px">
          <TYPE.black>Annualized total revenue</TYPE.black>
        </AutoColumn>
        <Iframe
          src={'https://tokenterminal.com/terminal/projects/lido-finance/embed/key_metrics'}
          width="100%"
          height="1350px"
          frameBorder={1}
        />
        <AutoColumn gap="16px" style={{ marginTop: 20 }}>
          <TYPE.largeHeader fontSize={28}>Optimism Token</TYPE.largeHeader>
          <Line />
          <AutoColumn gap="16px" style={{ width: '78%' }}>
            <TYPE.mediumHeader>Overview</TYPE.mediumHeader>
            <TYPE.body>
              Optimism is a layer two protocol and smart contract platform that aims to enable low-cost and
              near-instantaneous Ethereum transactions. The OP cryptocurrency powers the Token House, which will be a
              division of the Optimism Collective alongside the Citizens&apos; House. The Collective governs network
              parameters, treasury disbursements, and protocol upgrades.
            </TYPE.body>
            <ExternalLink href={''}>
              <FileText width={12} height={12} /> Whitepaper
            </ExternalLink>

            <TYPE.mediumHeader marginTop={'24px'}>Fundraise Information</TYPE.mediumHeader>
            <TableInformation>
              <tr>
                <td>Total Raise</td>
                <td>$100,000,000 USD</td>
              </tr>
              <tr>
                <td>Soft Cap</td>
                <td>$50,000,000 USD</td>
              </tr>
              <tr>
                <td>Raise Status</td>
                <td>Open</td>
              </tr>
              <tr>
                <td>Minimum Investment</td>
                <td>$134,000,000 USD</td>
              </tr>
              <tr>
                <td>Accepted Investors</td>
                <td>International Accredited</td>
              </tr>
              <tr>
                <td>Security Type</td>
                <td>Lp Fund Interest</td>
              </tr>
              <tr>
                <td>Exemptions</td>
                <td>Regulation D 506(c) - General Solicitation, Regulation S (International)</td>
              </tr>
              <tr>
                <td>Instrument</td>
                <td>NA</td>
              </tr>
            </TableInformation>

            <TYPE.mediumHeader marginTop={'24px'}>Token Information</TYPE.mediumHeader>
            <TableInformation>
              <tr>
                <td>Token Symbol</td>
                <td>SMC</td>
              </tr>
              <tr>
                <td>Token Protocol</td>
                <td>ERC20</td>
              </tr>
              <tr>
                <td>Price Per (SMC)</td>
                <td>$ 2.00</td>
              </tr>
              <tr>
                <td>Payment Options</td>
                <td>USDC</td>
              </tr>
              <tr>
                <td>Token Issuance Info</td>
                <td>6 months</td>
              </tr>
            </TableInformation>

            <TYPE.mediumHeader marginTop={'24px'}>Token Rights</TYPE.mediumHeader>
            <TYPE.body>
              Tokenized LP Interest Transparent Portfolio 100% of net exit revenues distributed to token holders
            </TYPE.body>

            <TYPE.mediumHeader marginTop={'24px'}>Use of Funds</TYPE.mediumHeader>
            <iframe
              src="https://dune.com/embeds/490251/929384/cf79d64f-4ee0-4ab5-b2f4-603e1837e0c2"
              width={'100%'}
              height={'300px'}
              frameBorder="0"
            />

            <TYPE.mediumHeader marginTop={'24px'}>Team</TYPE.mediumHeader>
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
            </TeamWrapper>
          </AutoColumn>
        </AutoColumn>
      </AutoColumn>
    </AppBody>
  )
}
