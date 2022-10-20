import { AutoColumn } from 'components/Column'
import Row, { RowBetween } from 'components/Row'
import styled from 'styled-components/macro'
import { ExternalLink, Line, TYPE } from 'theme'

import { ButtonOutlined } from 'components/Button'
import { useNavigate } from 'react-router-dom'
import { FileText, Linkedin } from 'react-feather'
import { OutlineCard } from 'components/Card'
import AppBody from 'pages/AppBody'
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

export default function Lido() {
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
          <ButtonOutlined padding={'9px 24px'} onClick={() => navigate('/lido/info')}>
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
                <td>LDO</td>
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
            <TYPE.body
              dangerouslySetInnerHTML={{
                __html: `At time of writing, founding members of the Lido DAO possess 64% of LDO tokens. These are locked for 1
              year, after which they will be vested over 1 year. At the time of writing, the only unlocked LDO in
              existence are 0.4% airdrop distributed to early stakers and DAO treasury tokens. Anyone can make a
              proposal on how they can be used via  <a href="//research.lido.fi" target="_blank">research.lido.fi</a>.`,
              }}
            />

            <TYPE.mediumHeader marginTop={'24px'}>Use of Funds</TYPE.mediumHeader>
            <TYPE.body>
              The allocation of these tokens is as follows:
              <ul>
                <li>DAO treasury - 36.32%</li>
                <li>Investors - 22.18%</li>
                <li>Validators and signature holders - 6.5%</li>
                <li>Initial Lido developers - 20%</li>
                <li>Founders and future employees - 15%</li>
              </ul>
            </TYPE.body>

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
