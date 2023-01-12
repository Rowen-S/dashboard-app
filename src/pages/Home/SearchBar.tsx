import styled from 'styled-components/macro'
import { useGetHotWordsQuery, useGetSuggestionQuery } from 'services/dataYes'
import { useModalIsOpen, useToggleModal } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import { SearchInput } from 'components/Input/styled'
import { RefObject, useCallback, useRef, useState } from 'react'
import useDebounce from 'hooks/useDebounce'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { MenuFlyout } from 'components/Menu'
import Row from 'components/Row'
import { AutoColumn } from 'components/Column'
import { FixedSizeList } from 'react-window'
import { LoadingRows } from 'components/Loader/styled'
import { ExternalLink, TYPE } from 'theme'

import { ReactComponent as TagIcon } from 'assets/svg/tag.svg'
import { ReactComponent as CertifiedIcon } from 'assets/svg/certified.svg'
import NoPicture from 'assets/svg/no_picture.svg'
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'
import { ExplorerDataType, getExplorerLink } from 'utils/getExplorerLink'

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

const ResultExternalLink = styled(ExternalLink)`
  color: unset;
  text-decoration: none;
  padding: 0.5rem 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
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
  font-size: 14px;
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

const EmptyProposals = styled.div`
  border: 1px solid ${({ theme }) => theme.text4};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AccountIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
`
const AccountBody = styled(AutoColumn)`
  margin-left: 12px;
`
const AccountTitle = styled(Row)`
  :first-child > svg {
    margin-left: 4px;
  }
`

function SearchResult({ searchKey }: { searchKey: string }) {
  const { data: suggestion, isLoading, isFetching, isError, isSuccess } = useGetSuggestionQuery({ key: searchKey })

  let content

  if (isLoading || isFetching) {
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

  if ((!suggestion?.data.length && isSuccess) || isError) {
    content = (
      <EmptyProposals>
        <TYPE.body style={{ marginBottom: '8px' }}>No result found.</TYPE.body>
        <TYPE.subHeader>
          <i>Results will appear here.</i>
        </TYPE.subHeader>
      </EmptyProposals>
    )
  }

  if (suggestion?.data.length && isSuccess) {
    content = (
      <SearchResWrapper>
        {suggestion?.data?.map((data) =>
          data.type == 'tag'
            ? data.list.map((list, i) => (
                <ResultExternalLink href={getExplorerLink(list.value, ExplorerDataType.TAG)} key={list.name + '' + i}>
                  <IconWrapper>
                    <TagIcon width={12} height={12} />
                  </IconWrapper>
                  <AccountBody>
                    <TYPE.body fontWeight={500}>{list.value}</TYPE.body>
                  </AccountBody>
                </ResultExternalLink>
              ))
            : data.type == 'query'
            ? data.list.map((list, i) => (
                <ResultExternalLink href={getExplorerLink(list.value, ExplorerDataType.QUERY)} key={list.name + '' + i}>
                  <IconWrapper>
                    <SearchIcon width={14} />
                  </IconWrapper>
                  <AccountBody>
                    <TYPE.body fontWeight={500}>{list.value}</TYPE.body>
                  </AccountBody>
                </ResultExternalLink>
              ))
            : data.type == 'account'
            ? data.list.map((list, i) => (
                <ResultExternalLink
                  href={getExplorerLink(list.value, ExplorerDataType.ACCOUNT)}
                  key={list.name + '' + i}
                >
                  <AccountIcon src={list.icon ?? NoPicture} alt={list.name} />
                  <AccountBody>
                    <AccountTitle>
                      <TYPE.subHeader fontWeight={500}>{list.value}</TYPE.subHeader>
                      {list.isCertificated ? <CertifiedIcon width={12} height={12} title="is certificated" /> : null}
                    </AccountTitle>
                    <TYPE.subHeader color={'text3'}>{list.name}</TYPE.subHeader>
                  </AccountBody>
                </ResultExternalLink>
              ))
            : null
        )}
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
  // console.log('HotWordsQuery:', words?.data)

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
