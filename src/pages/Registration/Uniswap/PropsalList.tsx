import { lighten, darken } from 'polished'
import { useCallback, useEffect, useMemo, useState } from 'react'
import styled, { DefaultTheme } from 'styled-components/macro'
import { useGetProposalsQuery } from 'graphql/services/snapshot'

import Identicon from 'components/Identicon'
import { LoadingRows } from 'components/Loader/styled'
import { percentage, shortenAddress } from 'utils'
import { Button } from 'rebass/styled-components'
import { AutoColumn } from 'components/Column'
import { Line, TYPE } from 'theme'
import Row, { RowBetween, RowFlat } from 'components/Row'
import { ArrowLeft, ArrowRight, CheckCircle } from 'react-feather'
import { Z_INDEX } from 'theme/zIndex'
import useTheme from 'hooks/useTheme'

export enum ProposalState {
  PENDING = 'pending',
  ACTIVE = 'active',
  CLOSED = 'closed',
  CORE = 'core',
}

const Proposal = styled(Button)`
  padding: 1rem;
  width: 100%;
  border-radius: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text1};
  text-decoration: none;
  background-color: ${({ theme }) => theme.bg0};

  &:focus {
    background-color: ${({ theme }) => darken(0.05, theme.bg1)};
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg2};
    text-decoration: none;
  }
`

const ProposalStatusWrapper = styled.div`
  display: grid;
  align-items: center;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 16px;
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

const handleColorType = (status: ProposalState, theme: DefaultTheme) => {
  switch (status) {
    case ProposalState.PENDING:
    case ProposalState.ACTIVE:
      return theme.green2

    case ProposalState.PENDING:
      return theme.green1

    case ProposalState.CLOSED:
    case ProposalState.CORE:
      return theme.bg4
    default:
      return theme.text3
  }
}

function StatusText({ status }: { status: ProposalState }) {
  switch (status) {
    case ProposalState.PENDING:
      return <>Pending</>
    case ProposalState.ACTIVE:
      return <>Active</>
    case ProposalState.CLOSED:
      return <>Closed</>
    case ProposalState.CORE:
      return <>Core</>
    default:
      return <>Undetermined</>
  }
}

const StyledProposalContainer = styled.div<{ status: ProposalState }>`
  font-size: 0.825rem;
  font-weight: 600;
  padding: 0.3125rem 0.75rem;
  border-radius: 14px;
  background-color: ${({ status, theme }) => handleColorType(status, theme)};
  color: ${({ theme }) => theme.white};
  width: fit-content;
  justify-self: flex-end;
  /* text-transform: uppercase; */
`

function ProposalStatus({ status }: { status: ProposalState }) {
  return (
    <StyledProposalContainer status={status}>
      <StatusText status={status} />
    </StyledProposalContainer>
  )
}

function replaceStatus(status: string) {
  switch (status) {
    case 'pending':
      return ProposalState.PENDING
    case 'active':
      return ProposalState.ACTIVE
    case 'closed':
      return ProposalState.CLOSED
    default:
      return ProposalState.CORE
  }
}

const ChoicesWrapper = styled(AutoColumn)`
  max-width: 400px;
`

const ChoicesItemWrapper = styled(RowBetween)`
  z-index: 10;
  z-index: ${Z_INDEX.dropdown};
`
const ChoicesItemBgWrapper = styled.div<{ width?: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -${Z_INDEX.deprecated_content};
  width: ${({ width }) => width ?? 0}%;
  background-color: ${({ theme }) => lighten(0.55, theme.green2)};
`

const ChoicesPercentWrapper = styled.div`
  width: 300px;
  position: relative;
`

function ChoicesResult({ choices, scores }: { choices: string[]; scores: number[] }) {
  const theme = useTheme()
  /**
   * prev
   * current
   * index
   * arr
   */
  const sum = scores.reduce((prev, current) => {
    return prev + current
  })

  const max_index = useMemo(() => {
    return scores.indexOf(Math.max(...scores))
  }, [scores])

  return (
    <ChoicesWrapper gap="8px">
      {choices.map((c, i) => (
        <ChoicesItemWrapper key={c}>
          <RowBetween>
            <ChoicesPercentWrapper>
              <Row padding={'8px'}>
                {i == max_index && <CheckCircle size={16} color={theme.green2} />}

                <TYPE.subHeader fontWeight={500} paddingX={'8px'}>
                  {c}
                </TYPE.subHeader>
              </Row>
              <ChoicesItemBgWrapper width={percentage(scores[i], sum)} />
            </ChoicesPercentWrapper>

            <TYPE.subHeader fontWeight={500}>{percentage(scores[i], sum)} %</TYPE.subHeader>
          </RowBetween>
        </ChoicesItemWrapper>
      ))}
    </ChoicesWrapper>
  )
}

export default function PropsalList({ title = '', status = 'all' }: { title: string; status: string }) {
  const [skipNumber, setSkipNumber] = useState(0)
  const {
    data: proposalList,
    isLoading,
    isFetching,
  } = useGetProposalsQuery({ spacein: ['uniswap'], skipNumber, title, status: status.toLocaleLowerCase() })

  const previousPage = useCallback(() => {
    let a = skipNumber
    setSkipNumber((a -= 10))
  }, [setSkipNumber, skipNumber])

  const nextPage = useCallback(() => {
    let a = skipNumber
    setSkipNumber((a += 10))
  }, [setSkipNumber, skipNumber])

  useEffect(() => {
    setSkipNumber(0)
    return () => {
      setSkipNumber(0)
    }
  }, [title])

  if (!proposalList?.proposals.length) {
    return <div>No posts :(</div>
  }
  return (
    <div>
      {isLoading && (
        <LoadingRows>
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
        </LoadingRows>
      )}
      {isFetching ? (
        <LoadingRows>
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
          <div style={{ height: 80 }} />
        </LoadingRows>
      ) : (
        proposalList?.proposals.map((p) => (
          <div key={p.id}>
            <Proposal onClick={() => window.open(`//snapshot.org/#/lido-snapshot.eth/proposal/${p.id}`)}>
              <AutoColumn gap="16px">
                <ProposalStatusWrapper>
                  <Row>
                    <Identicon account={p.author} size={24} />
                    <TYPE.subHeader marginLeft={'8px'} color={'text2'}>
                      {shortenAddress(p.author)}
                    </TYPE.subHeader>
                  </Row>
                  <ProposalStatus status={replaceStatus(p.state)} />
                </ProposalStatusWrapper>

                <TYPE.largeHeader>{p.title}</TYPE.largeHeader>
                <TYPE.subHeader
                  color={'text3'}
                  dangerouslySetInnerHTML={{
                    __html: p.body && `${p.body.substring(0, 100)}...`,
                  }}
                />
                {p.state == ProposalState.CLOSED && <ChoicesResult choices={p.choices} scores={p.scores} />}
              </AutoColumn>
            </Proposal>
            <Line />
          </div>
        ))
      )}
      {proposalList?.proposals && (
        <Row marginTop={'30px'} justify={'flex-end'}>
          <RowFlat>
            <PageButton width={40} height={40} onClick={previousPage} disabled={skipNumber < 10}>
              <ArrowLeft size={24} strokeWidth={3} />
            </PageButton>
            <PageButton
              marginLeft={15}
              width={40}
              height={40}
              onClick={nextPage}
              disabled={proposalList?.proposals.length < 10}
            >
              <ArrowRight size={24} strokeWidth={3} />
            </PageButton>
          </RowFlat>
        </Row>
      )}
    </div>
  )
}
