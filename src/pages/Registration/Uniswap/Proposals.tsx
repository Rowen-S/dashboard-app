import { KeyboardEvent, RefObject, useCallback, useRef, useState } from 'react'
import styled from 'styled-components/macro'
import { Line, TYPE } from 'theme'

import useDebounce from 'hooks/useDebounce'

import { FixedSizeList } from 'react-window'
import { ChevronDown } from 'react-feather'
import { useToggleModal } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'

import { AutoColumn } from 'components/Column'
import { SearchInput } from 'components/Input/styled'
import { RowBetween } from 'components/Row'

import { FlyoutAlignment, SelectMenu } from 'components/Menu'
import PropsalList from './PropsalList'

const PropsalsWrapper = styled(AutoColumn)`
  width: 100%;
`
const PropsalsSearchInput = styled(SearchInput)`
  max-width: 368px;
  padding: 8px 16px 8px 40px;
  border-radius: 12px;
  align-self: flex-end;

  ::placeholder {
    font-size: 14px;
  }
`
const Menu = styled(SelectMenu)`
  margin-left: 0;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex: 1 1 auto;
    width: 49%;
    right: 0px;
  `};
  a {
    width: 100%;
  }
`

const MenuItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;

  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
`

const MoreOptionsButton = styled.div`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 8px 8px;
  width: 100%;
  margin-right: 8px;
  color: ${({ theme }) => theme.text2};
  border-style: solid;
  border: 1px solid ${({ theme }) => theme.bg3};

  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
`

const menuStatusItems = ['All', 'Active', 'Pending', 'Closed']

export default function Proposals() {
  const toggle = useToggleModal(ApplicationModal.PROPOSALS_STATUS)

  // refs for fixed size lists
  const fixedList = useRef<FixedSizeList>()

  const [searchQuery, setSearchQuery] = useState<string>('')
  const debouncedQuery = useDebounce(searchQuery, 800)
  const [status, setStatus] = useState(menuStatusItems[0])
  const [title, setTitle] = useState<string>('')

  // manage focus on modal show
  const inputRef = useRef<HTMLInputElement>()
  const handleInput = useCallback((event: { target: { value: string } }) => {
    const input = event.target.value
    setSearchQuery(input)
    fixedList.current?.scrollTo(0)
  }, [])

  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const s = debouncedQuery.toLowerCase().trim()
        console.log('handleEnter', s)
        setTitle(s)
      } else {
        setTitle(debouncedQuery.toLowerCase().trim())
      }
    },
    [debouncedQuery]
  )

  const handleStatusOption = useCallback(
    (e: string) => {
      setStatus(e)
      toggle()
    },
    [toggle]
  )

  return (
    <PropsalsWrapper gap="24px">
      <RowBetween width={'80%'}>
        <PropsalsSearchInput
          type="text"
          id="token-search-input"
          placeholder={`Search by proposal key word, governace`}
          autoComplete="off"
          value={searchQuery}
          ref={inputRef as RefObject<HTMLInputElement>}
          onChange={handleInput}
          onKeyDown={handleEnter}
        />
        <AutoColumn gap="5px">
          <TYPE.subHeader>Status</TYPE.subHeader>
          <Menu
            menuItems={menuStatusItems.map((m) => (
              <MenuItem key={m} onClick={() => handleStatusOption(m)}>
                {m}
              </MenuItem>
            ))}
            flyoutAlignment={FlyoutAlignment.LEFT}
            ToggleUI={(props: any) => (
              <MoreOptionsButton {...props}>
                <TYPE.subHeader style={{ alignItems: 'center', textAlign: 'center', display: 'flex' }}>
                  <div style={{ minWidth: 60 }}>{status}</div>
                  <ChevronDown size={15} />
                </TYPE.subHeader>
              </MoreOptionsButton>
            )}
          />
        </AutoColumn>
      </RowBetween>
      <AutoColumn gap="16px">
        <TYPE.largeHeader>Proposal</TYPE.largeHeader>
        <Line />
        <PropsalList status={status} title={title} />
      </AutoColumn>
    </PropsalsWrapper>
  )
}
