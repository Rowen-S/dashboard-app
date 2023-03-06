import AvatarExample from 'components/Avatar'
import { AutoColumn } from 'components/Column'
import { SearchInput } from 'components/Input/styled'
import Row from 'components/Row'
import useDebounce from 'hooks/useDebounce'
import { KeyboardEvent, useCallback, useState, useRef, RefObject, useMemo } from 'react'
import { FixedSizeList } from 'react-window'
import styled from 'styled-components/macro'
import { Line, TYPE } from 'theme'

const PublicOpinionWrapper = styled(AutoColumn)`
  width: 100%;
`

const PublicOpinionSearchInput = styled(SearchInput)`
  max-width: 368px;
  padding: 8px 16px 8px 40px;
  border-radius: 12px;
  align-self: flex-end;
  margin-left: 30px;

  ::placeholder {
    font-size: 14px;
  }
`
const OpinionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`

const iframeList = [
  {
    title: 'Should Lido on Ethereum be limited to some fixed % of stake?',
    url: 'https://dune.com/embeds/95814/191711/3bd61e40-249c-4191-b841-16bb640c5473',
    author: 'vsh',
  },
  {
    title: 'The Road to Trustless Ethereum Staking [Discussion]',
    url: 'https://dune.com/embeds/96263/192761/27c7c36c-8ef5-4de5-8273-b5b22c848482',
    author: 'kethfinex',
  },
  {
    title: 'Lido teams’ objectives and key results for 2022',
    url: 'https://dune.com/embeds/837989/1465115/33a79c18-84ea-4788-af50-6b5a8eafecc2',
    author: 'vsh',
  },
  {
    title: 'An update on reWARDS v2',
    url: 'https://dune.com/embeds/570874/1464690/809d87b0-5cb9-424e-915e-196bafa8701d',
    author: 'carvas',
  },
  {
    title: 'Lido Referral Program',
    url: 'https://dune.com/embeds/95980/192057/41a35ee9-4787-491b-b907-a56082de041f',
    author: 'kethfinex',
  },
  {
    title: 'Proposal to fund the depositor bot in Ethereum',
    url: 'https://dune.com/embeds/96707/193813/fe05b87f-f193-4620-a3b8-288b8d300bff',
    author: 'raman',
  },
  {
    title: 'LDO+stETH dual governance',
    url: 'https://dune.com/embeds/374112/712351/5ec5c6d3-138d-4549-9eda-4e5652ccb872',
    author: 'skozin',
  },
  {
    title: 'Issues supplying stEth on Curve/Yearn',
    url: 'https://dune.com/embeds/100870/203571/9fe4d388-302c-4eae-bac6-7139379460ce',
    author: 'cpryptoKnight',
  },
  {
    title: 'Lido for Aave - Proposal by Delphi Digital',
    url: 'https://dune.com/embeds/459431/1470937/1aba89a3-e7fb-41c0-88ec-274b91cf154b',
    author: 'lukedelphi',
  },
  {
    title: 'How does Lido want to approach wstETH going forward?',
    url: 'https://dune.com/embeds/226069/1470998/bd5e2f10-89c4-40da-928d-6e649915af32',
    author: 'frontalpha',
  },
  {
    title: 'How does Lido want to approach wstETH going forward?',
    url: 'https://dune.com/embeds/784387/1471050/9871a9f5-aa3f-45f5-bf93-14066714fdd3',
    author: 'frontalpha',
  },
  {
    title: 'How can we improve the stETH ETH peg?',
    url: 'https://dune.com/embeds/374112/1546340/3c919a3e-4df4-45de-80a8-0b08b0041c46',
    author: 'alkaid',
  },
]

export default function PublicOpinion() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const debouncedQuery = useDebounce(searchQuery, 800)

  // refs for fixed size lists
  const fixedList = useRef<FixedSizeList>()

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

  const fuzzyQuery = useCallback((list: { title: string; author: string; url: string }[], keyWord: string) => {
    const arr = []
    for (let i = 0; i < list.length; i++) {
      if (list[i].title.indexOf(keyWord) >= 0) {
        arr.push(list[i])
      }
    }
    return arr
  }, [])

  const filterList = useMemo(() => {
    if (debouncedQuery) {
      return fuzzyQuery(iframeList, debouncedQuery)
    } else {
      return iframeList
    }
  }, [debouncedQuery, fuzzyQuery])

  return (
    <PublicOpinionWrapper gap="24px">
      <TYPE.body>All data and charts on this page are from members of HashKey Dao.</TYPE.body>
      <Row>
        <TYPE.mediumHeader>Opinion:</TYPE.mediumHeader>
        <PublicOpinionSearchInput
          type="text"
          id="token-search-input"
          placeholder={`Search by Opinion key word`}
          autoComplete="off"
          value={searchQuery}
          ref={inputRef as RefObject<HTMLInputElement>}
          onChange={handleInput}
          onKeyDown={handleEnter}
        />
      </Row>
      <Line />
      <OpinionWrapper>
        {filterList.map((ifr, index) => (
          <AutoColumn key={ifr.author + index} gap="14px">
            <TYPE.mediumHeader>{ifr.title}</TYPE.mediumHeader>
            <Row>
              <AvatarExample name={ifr.author} size={30} />
              <TYPE.subHeader marginLeft={10}>@{ifr.author}</TYPE.subHeader>
            </Row>
            <iframe sandbox="" src={ifr.url} width="100%" height="250px" frameBorder={0} />
          </AutoColumn>
        ))}
      </OpinionWrapper>
    </PublicOpinionWrapper>
  )
}
