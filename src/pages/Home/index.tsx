import { DarkCard } from 'components/Card'
import { AutoColumn } from 'components/Column'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { TYPE } from 'theme'

const HomeWrapper = styled(AutoColumn)`
  max-width: 1200px;
  width: 100%;
  align-items: flex-start;
`
const RegistrationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 54px;
  grid-row-gap: 41px;
`

const RegistrationCard = styled(DarkCard)``

export default function Home() {
  return (
    <HomeWrapper gap="56px">
      <TYPE.label fontSize={56}>Registration List</TYPE.label>
      <RegistrationWrapper>
        <RegistrationCard as={Link} to={'/lido'}>
          Lido
        </RegistrationCard>
        <RegistrationCard as={Link} to={'/aptos'}>
          AptosLabs
        </RegistrationCard>
      </RegistrationWrapper>
    </HomeWrapper>
  )
}
