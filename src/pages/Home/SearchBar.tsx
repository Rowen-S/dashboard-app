import styled from 'styled-components/macro'
import { useModalIsOpen, useToggleModal } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import { SearchInput } from 'components/Input/styled'
import { RefObject, useCallback, useRef, useState } from 'react'
import useDebounce from 'hooks/useDebounce'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { MenuFlyout } from 'components/Menu'
import { AutoColumn } from 'components/Column'
import { FixedSizeList } from 'react-window'
import { LoadingRows } from 'components/Loader/styled'
import { ExternalLink, TYPE } from 'theme'
import { Link } from 'react-router-dom'
import LidoLogo from 'components/Logo'
import { useGetHotWordsQuery, useGetSuggestionQuery } from 'services/dataYes'

const SearchBarWraper = styled(AutoColumn)`
  position: relative;
  width: 55%;
  justify-self: center;
  position: relative;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `}
`
const HomeSearch = styled(SearchInput)`
  border-radius: 30px;
  padding: 14px 24px;
  padding-left: 40px;
`
const SearchFlyout = styled(MenuFlyout)`
  position: absolute;
  top: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.bg0};
`
const SearchResWrapper = styled(AutoColumn)`
  padding: 0.6rem;
`

const ResultLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 5px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.text5};
  :hover {
    background-color: ${({ theme }) => theme.bg1};
  }
`

const ResultExternalLink = styled(ExternalLink)`
  text-decoration: none;
  padding: 0.5rem 5px;
  display: flex;
  align-items: center;
  :hover {
    background-color: ${({ theme }) => theme.bg1};
    text-decoration: none;
  }
`

const HotWordsWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: 12px;
`
const HotTagLink = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  color: ${({ theme }) => theme.text1};
  padding: 7px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.bg1};
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.bg8};
  }
`

function SearchResult({ searchKey }: { searchKey: string }) {
  const { data: suggestion, isLoading, isFetching, isError, isSuccess } = useGetSuggestionQuery({ key: searchKey })
  console.log('SuggestionQuery:', suggestion?.data)
  console.log('isLoading:', isLoading)
  console.log('isFetching:', isFetching)
  console.log('isError:', isError)
  console.log('isSuccess:', isSuccess)

  let content

  if (isFetching) {
    content = (
      <LoadingRows>
        <div />
        <div />
        <div />
        <div />
        <div />
      </LoadingRows>
    )
  }

  if (suggestion?.data && isSuccess) {
    content = (
      <SearchResWrapper>
        <ResultLink to="/lido">
          <LidoLogo />
          <TYPE.body fontWeight={500} marginLeft={12}>
            Lido
          </TYPE.body>
        </ResultLink>
        {suggestion?.data?.map((data) =>
          data.list.map((list, i) => (
            <ResultExternalLink href="" key={list.name + '' + i}>
              <img width={24} height={24} src={list.icon} alt={list.name} />
              <TYPE.body fontWeight={500} marginLeft={12}>
                {list.value}
              </TYPE.body>
            </ResultExternalLink>
          ))
        )}
        {/* <ResultExternalLink href="">
          <svg fill="#1d9bf0" viewBox="0 0 24 24" width={24} aria-hidden="true">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
          <TYPE.body fontWeight={500} marginLeft={12}>
            the validator exiting order design for Lido post withdrawals...
          </TYPE.body>
        </ResultExternalLink>
        <ResultExternalLink href="">
          <svg fill="#1d9bf0" viewBox="0 0 24 24" width={24} aria-hidden="true">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
          <TYPE.body fontWeight={500} marginLeft={12}>
            {`8) #Lido DAO rallied +6.8% last 1w as Lido Finance...`}
          </TYPE.body>
        </ResultExternalLink>
        <ResultExternalLink href="">
          <svg fill="#1d9bf0" viewBox="0 0 24 24" width={24} aria-hidden="true">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
          <TYPE.body fontWeight={500} marginLeft={12}>
            Here&apos;s @LidoFinance on the topic of solo node...
          </TYPE.body>
        </ResultExternalLink> */}
        <ExternalLink href="//">More Tweet</ExternalLink>
      </SearchResWrapper>
    )
  }

  return <>{content}</>
}

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

  const { data: words } = useGetHotWordsQuery({})
  console.log('HotWordsQuery:', words?.data)

  return (
    <SearchBarWraper ref={node as any} gap="16px">
      <HomeSearch
        type="text"
        id="token-search-input"
        placeholder={`Search by registration key word`}
        autoComplete="off"
        value={searchQuery}
        ref={inputRef as RefObject<HTMLInputElement>}
        onChange={handleInput}
        onFocus={() => {
          if (!open) {
            toggle()
          }
          return
        }}
      />
      <HotWordsWrapper>
        <TYPE.subHeader fontWeight={'bold'} color={'text3'}>
          Trending
        </TYPE.subHeader>
        {words?.data?.map((words) => (
          <HotTagLink key={words.id}>
            {words.name}
            {/* <MouseoverTooltip text={words.name}>{words.name}</MouseoverTooltip> */}
          </HotTagLink>
        ))}
      </HotWordsWrapper>
      {open && (
        <SearchFlyout>
          {debouncedQuery ? (
            <SearchResult searchKey={debouncedQuery} />
          ) : (
            <LoadingRows>
              <div />
              <div />
              <div />
              <div />
              <div />
            </LoadingRows>
          )}
        </SearchFlyout>
      )}
    </SearchBarWraper>
  )
}
