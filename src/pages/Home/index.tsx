import { darken } from 'polished'
import { DarkCard } from 'components/Card'
import { AutoColumn } from 'components/Column'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { TYPE } from 'theme'
import Row from 'components/Row'
import { ButtonOutlined } from 'components/Button'

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

const LogoWrapper = styled.img`
  border-radius: 50%;
  width: 4.25rem;
  height: 4.25rem;
  opacity: 0.96;
  border: 1px solid ${({ theme }) => darken(0.1, theme.text5)};
`

const RegistrationLogo = styled(AutoColumn)<{ url: string }>`
  padding: 40px 0;
  background: ${({ url }) => (url ? `url(${url}) no-repeat 100% 100%` : 'unset')};
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
          <RegistrationLogo
            url="https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF"
            gap="10px"
            justify="center"
          >
            <LogoWrapper src="https://img0.baidu.com/it/u=1461773104,1813732012&fm=253&fmt=auto&app=138&f=JPG" />
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
              <ButtonOutlined width={'32px'} height="32px" padding={'8px'}>
                💧
              </ButtonOutlined>
            </Row>
          </RegistrationInfo>
        </RegistrationCard>
        <RegistrationCard as={Link} to={'/aptos'}>
          AptosLabs
        </RegistrationCard>
      </RegistrationWrapper>
    </HomeWrapper>
  )
}
