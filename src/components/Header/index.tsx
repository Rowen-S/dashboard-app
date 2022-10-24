import useScrollPosition from '@react-hook/window-scroll'
import { Moon, Sun } from 'react-feather'
import { useDarkModeManager } from 'state/user/hooks'
import styled, { useTheme } from 'styled-components/macro'
// import SearchBar from './SearchBar'

import { ReactComponent as Logo } from '../../assets/svg/logo.svg'

const HeaderFrame = styled.div<{ showBackground: boolean }>`
  width: 100%;
  top: 0;
  z-index: 21;
  position: relative;

  /* Background slide effect on scroll. */
  background-image: ${({ theme }) => `linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`};
  background-position: ${({ showBackground }) => (showBackground ? '0 -100%' : '0 0')};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.bg2 : 'transparent;')};
  transition: background-position 0.1s, box-shadow 0.1s;
`
const HeaderNav = styled.nav`
  padding: 1rem;

  max-width: 1200px;
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  margin: 0px auto;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding:  1rem;
    grid-template-columns: auto 1fr;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 1rem;
  `}
`
const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    width: 100%;
    max-width: 960px;
    padding: 1rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
    height: 72px;
    border-radius: 12px 12px 0 0;
    background-color: ${({ theme }) => theme.bg1};
  `};
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
`

const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg2};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
  :hover {
    cursor: pointer;
  }
`

const DashBoardIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }

  position: relative;
`

export default function Header() {
  const [darkMode, toggleDarkMode] = useDarkModeManager()

  const scrollY = useScrollPosition()

  const { white, black } = useTheme()

  return (
    <HeaderFrame showBackground={scrollY > 45}>
      <HeaderNav>
        <Title href=".">
          <DashBoardIcon>
            <Logo fill={darkMode ? white : black} width="100%" height="44px" title="logo" />
          </DashBoardIcon>
        </Title>
        <div />
        {/* <SearchBar /> */}
        <HeaderControls>
          <HeaderElementWrap>
            <StyledMenuButton onClick={() => toggleDarkMode()}>
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </StyledMenuButton>
          </HeaderElementWrap>
        </HeaderControls>
      </HeaderNav>
    </HeaderFrame>
  )
}
