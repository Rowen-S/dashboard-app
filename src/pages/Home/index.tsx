import { darken } from 'polished'
import { DarkCard } from 'components/Card'
import { AutoColumn } from 'components/Column'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { TYPE } from 'theme'
import Row from 'components/Row'
import { ButtonOutlined } from 'components/Button'

import LidoBg from 'assets/images/lido-bg.jpeg'

const HomeWrapper = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
  align-items: flex-start;
`
const RegistrationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 54px;
  grid-row-gap: 41px;
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
    border: 1px solid ${({ theme }) => theme.text1};
  }
`

const LogoWrapper = styled.div`
  border-radius: 50%;
  opacity: 0.96;
  border: 1px solid ${({ theme }) => darken(0.1, theme.text5)};
  background-color: ${({ theme }) => theme.white};
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 46px;
    height: 46px;
  }
`

const RegistrationButton = styled(ButtonOutlined)`
  & > svg {
    path {
      fill: ${({ theme }) => theme.bg6};
    }
  }
  :hover {
    & > svg {
      path {
        fill: ${({ theme }) => theme.bg4};
      }
    }
  }
`

const RegistrationLogo = styled(AutoColumn)<{ url: string }>`
  padding: 40px 0;
  background: ${({ url }) => (url ? `url(${url}) no-repeat 100% 100%` : 'unset')};
  background-position: left;
`

const RegistrationInfo = styled(AutoColumn)`
  padding: 40px 0;
  width: fit-content;
  margin: 0px auto;
`

export default function Home() {
  return (
    <HomeWrapper gap="56px">
      <TYPE.label fontSize={56}>Registration List</TYPE.label>
      <RegistrationWrapper>
        <RegistrationCard as={Link} to={'/lido'}>
          <RegistrationLogo url={LidoBg} gap="10px" justify="center">
            <LogoWrapper>
              <svg viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.3366 11.2375L10.113 0L2.9761 11.2375L10.113 15.4135L17.3366 11.2375ZM10.113 2.89999L5.15765 10.701L10.113 13.601L15.0684 10.6865L10.113 2.89999ZM1.82033 13.05L10.113 17.893L18.4057 13.05L18.6368 13.398C19.6127 14.9321 20.1597 16.7013 20.2203 18.5204C20.2811 20.3395 19.8533 22.1415 18.9817 23.7377C18.1103 25.3339 16.8272 26.6655 15.2669 27.5931C13.7066 28.5207 11.9265 29.0101 10.113 29.0101C8.29955 29.0101 6.5194 28.5207 4.9591 27.5931C3.3988 26.6655 2.11571 25.3339 1.24425 23.7377C0.372764 22.1415 -0.0550319 20.3395 0.00566759 18.5204C0.0663365 16.7013 0.613273 14.9321 1.58919 13.398L1.82033 13.05Z"
                  fill="#00A3FF"
                />
              </svg>
            </LogoWrapper>
            <TYPE.largeHeader color="white">Lido</TYPE.largeHeader>
          </RegistrationLogo>
          <RegistrationInfo justify="flex-start" gap="16px">
            <AutoColumn gap="12px">
              <Row>
                <TYPE.body color={'text3'}>Founded on:&nbsp;</TYPE.body>
                <TYPE.body>2022/02/22</TYPE.body>
              </Row>
              <Row>
                <TYPE.body color={'text3'}>stETH on Curve:&nbsp;</TYPE.body>
                <TYPE.body>8</TYPE.body>
              </Row>
              <Row>
                <TYPE.body color={'text3'}>Number of employees:&nbsp;</TYPE.body>
                <TYPE.body>12</TYPE.body>
              </Row>
            </AutoColumn>

            <Row justify={'center'}>
              <RegistrationButton width={'32px'} height="32px" padding={'8px'}>
                <svg viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3366 11.2375L10.113 0L2.9761 11.2375L10.113 15.4135L17.3366 11.2375ZM10.113 2.89999L5.15765 10.701L10.113 13.601L15.0684 10.6865L10.113 2.89999ZM1.82033 13.05L10.113 17.893L18.4057 13.05L18.6368 13.398C19.6127 14.9321 20.1597 16.7013 20.2203 18.5204C20.2811 20.3395 19.8533 22.1415 18.9817 23.7377C18.1103 25.3339 16.8272 26.6655 15.2669 27.5931C13.7066 28.5207 11.9265 29.0101 10.113 29.0101C8.29955 29.0101 6.5194 28.5207 4.9591 27.5931C3.3988 26.6655 2.11571 25.3339 1.24425 23.7377C0.372764 22.1415 -0.0550319 20.3395 0.00566759 18.5204C0.0663365 16.7013 0.613273 14.9321 1.58919 13.398L1.82033 13.05Z"
                    fill="#00A3FF"
                  />
                </svg>
              </RegistrationButton>
            </Row>
          </RegistrationInfo>
        </RegistrationCard>
        {/* <RegistrationCard as={Link} to={'/aptos'}>
          AptosLabs
        </RegistrationCard> */}
      </RegistrationWrapper>
    </HomeWrapper>
  )
}
