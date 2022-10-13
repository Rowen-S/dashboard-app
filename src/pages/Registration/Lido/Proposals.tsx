import { KeyboardEvent, RefObject, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components/macro'
import { darken } from 'polished'
import { Line, TYPE } from 'theme'

import { useGetProposalsQuery } from 'graphql/services/snapshot'
import useDebounce from 'hooks/useDebounce'

import { FixedSizeList } from 'react-window'
import { ArrowLeft, ArrowRight, ChevronDown } from 'react-feather'
import { useToggleModal } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'

import { Button } from 'rebass/styled-components'
import { AutoColumn } from 'components/Column'
import { SearchInput } from 'components/Input/styled'
import Row, { RowBetween, RowFixed, RowFlat } from 'components/Row'

import { FlyoutAlignment, SelectMenu } from 'components/Menu'
import Identicon from 'components/Identicon'
import { LoadingRows } from 'components/Loader/styled'

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

const Proposal = styled(Button)`
  padding: 1rem 1.5rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  background-color: ${({ theme }) => theme.bg0};

  border-style: solid;
  border: 1px solid ${({ theme }) => theme.bg3};

  &:focus {
    background-color: ${({ theme }) => darken(0.05, theme.bg1)};
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg2};
    text-decoration: none;
  }
`

const IdenticonWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  margin-right: 16px;
  background-color: ${({ theme }) => theme.bg1}; ;
`

const PageButton = styled(Button)`
  padding: unset;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary1};
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
    border: 1px solid ${({ theme }) => theme.bg3};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

const menuStatusItems = ['All', 'Active', 'Pending', 'Close', 'Core']

function ProposalsList({ status = 'all' }: { status: string }) {
  const [skipNumber, setSkipNumber] = useState(0)
  const {
    data: proposalList,
    isLoading,
    isFetching,
  } = useGetProposalsQuery({ spacein: ['lido-snapshot.eth'], skipNumber, status: status.toLocaleLowerCase() })

  const previousPage = useCallback(() => {
    let a = skipNumber
    setSkipNumber((a -= 10))
  }, [setSkipNumber, skipNumber])

  const nextPage = useCallback(() => {
    let a = skipNumber
    setSkipNumber((a += 10))
  }, [setSkipNumber, skipNumber])

  console.log('skipNumber', skipNumber)

  useEffect(() => {
    return () => {
      setSkipNumber(0)
    }
  }, [])

  return (
    <div>
      {isLoading && (
        <LoadingRows>
          <div />
          <div />
          <div />
          <div />
          <div />
        </LoadingRows>
      )}
      {proposalList?.proposals.map((p) => (
        <Proposal key={p.id} onClick={() => window.open(`//snapshot.org/#/lido-snapshot.eth/proposal/${p.id}`)}>
          <RowFixed>
            <IdenticonWrapper>
              <Identicon account={p.author} size={20} />
            </IdenticonWrapper>
            <AutoColumn gap="8px">
              <TYPE.body>{p.title}</TYPE.body>
              <TYPE.subHeader
                color={'text3'}
                dangerouslySetInnerHTML={{
                  __html: p.body && `${p.body.substring(0, 100)}...`,
                }}
              />
            </AutoColumn>
          </RowFixed>
        </Proposal>
      ))}

      <Row marginTop={'30px'} justify={'flex-end'}>
        <RowFlat>
          <PageButton width={40} height={40} onClick={previousPage} disabled={skipNumber < 10}>
            <ArrowLeft size={24} strokeWidth={3} />
          </PageButton>
          <PageButton marginLeft={15} width={40} height={40} onClick={nextPage}>
            <ArrowRight size={24} strokeWidth={3} />
          </PageButton>
        </RowFlat>
      </Row>
    </div>
  )
}
export default function Proposals() {
  const toggle = useToggleModal(ApplicationModal.PROPOSALS_STATUS)

  // refs for fixed size lists
  const fixedList = useRef<FixedSizeList>()

  const [searchQuery, setSearchQuery] = useState<string>('')
  const debouncedQuery = useDebounce(searchQuery, 200)
  const [status, setStatus] = useState(menuStatusItems[0])

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
        <ProposalsList status={status} />
      </AutoColumn>
    </PropsalsWrapper>
  )
}
