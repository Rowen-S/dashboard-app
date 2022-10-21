import styled from 'styled-components/macro'
import { useModalIsOpen, useToggleModal } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import { SearchInput } from 'components/Input/styled'
import Row from 'components/Row'
import { RefObject, useCallback, useRef, useState } from 'react'
import useDebounce from 'hooks/useDebounce'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { MenuFlyout } from 'components/Menu'
import { AutoColumn } from 'components/Column'
import { FixedSizeList } from 'react-window'
import { LoadingRows } from 'components/Loader/styled'
import { Line, TYPE } from 'theme'

const SearchBarWraper = styled(Row)`
  width: 55%;
  justify-self: center;
  position: relative;
`
const HomeSearch = styled(SearchInput)`
  border-radius: 30px;
  padding: 14px 24px;
  padding-left: 40px;
`
const SearchFlyout = styled(MenuFlyout)`
  top: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.bg0};
`
const SearchResWrapper = styled(AutoColumn)`
  padding: 1rem;
`
export default function SearchBar() {
  const node = useRef<HTMLDivElement>()
  const open = useModalIsOpen(ApplicationModal.HOME_SEARCH)
  const toggle = useToggleModal(ApplicationModal.HOME_SEARCH)
  useOnClickOutside(node, open ? toggle : undefined)

  const inputRef = useRef<HTMLInputElement>()

  const [searchQuery, setSearchQuery] = useState<string>('')
  const debouncedQuery = useDebounce(searchQuery, 600)

  // refs for fixed size lists
  const fixedList = useRef<FixedSizeList>()
  const handleInput = useCallback((event: { target: { value: string } }) => {
    const input = event.target.value
    setSearchQuery(input)
    fixedList.current?.scrollTo(0)
  }, [])

  return (
    <SearchBarWraper ref={node as any}>
      <HomeSearch
        type="text"
        id="token-search-input"
        placeholder={`Search by registration key word`}
        autoComplete="off"
        value={searchQuery}
        ref={inputRef as RefObject<HTMLInputElement>}
        onChange={handleInput}
        onClick={toggle}
      />
      {open && (
        <SearchFlyout>
          {!debouncedQuery && (
            <LoadingRows>
              <div />
              <div />
              <div />
              <div />
              <div />
            </LoadingRows>
          )}
          {debouncedQuery && (
            <SearchResWrapper gap="16px">
              <Row>
                <svg viewBox="0 0 21 30" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3366 11.2375L10.113 0L2.9761 11.2375L10.113 15.4135L17.3366 11.2375ZM10.113 2.89999L5.15765 10.701L10.113 13.601L15.0684 10.6865L10.113 2.89999ZM1.82033 13.05L10.113 17.893L18.4057 13.05L18.6368 13.398C19.6127 14.9321 20.1597 16.7013 20.2203 18.5204C20.2811 20.3395 19.8533 22.1415 18.9817 23.7377C18.1103 25.3339 16.8272 26.6655 15.2669 27.5931C13.7066 28.5207 11.9265 29.0101 10.113 29.0101C8.29955 29.0101 6.5194 28.5207 4.9591 27.5931C3.3988 26.6655 2.11571 25.3339 1.24425 23.7377C0.372764 22.1415 -0.0550319 20.3395 0.00566759 18.5204C0.0663365 16.7013 0.613273 14.9321 1.58919 13.398L1.82033 13.05Z"
                    fill="#00A3FF"
                  />
                </svg>
                <TYPE.body fontWeight={500} marginLeft={12}>
                  Lido
                </TYPE.body>
              </Row>
              <Line />
              <Row>
                <svg fill="#1d9bf0" viewBox="0 0 24 24" width={24} aria-hidden="true">
                  <g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </g>
                </svg>
                <TYPE.body fontWeight={500} marginLeft={12}>
                  Staked ETH issued by Lido is...
                </TYPE.body>
              </Row>
              <Row>
                <svg fill="#1d9bf0" viewBox="0 0 24 24" width={24} aria-hidden="true">
                  <g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </g>
                </svg>
                <TYPE.body fontWeight={500} marginLeft={12}>
                  Staked ETH issued by Lido is...
                </TYPE.body>
              </Row>
              <Row>
                <svg fill="#1d9bf0" viewBox="0 0 24 24" width={24} aria-hidden="true">
                  <g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                  </g>
                </svg>
                <TYPE.body fontWeight={500} marginLeft={12}>
                  Staked ETH issued by Lido is...
                </TYPE.body>
              </Row>
            </SearchResWrapper>
          )}
        </SearchFlyout>
      )}
    </SearchBarWraper>
  )
}
