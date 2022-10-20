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
    title: 'We can learn a lot from SUSHI',
    url: 'https://dune.com/embeds/18920/38466/25396d15-b940-4fef-9581-f10ea991ebe1',
    author: 'Satoshi',
  },
  {
    title: 'Uniswap Liquidity Mining Report',
    url: 'https://dune.com/embeds/44618/87313/382cfc0e-ef47-4ebe-93de-b1e68b402d2a',
    author: 'Integral',
  },
  {
    title: '10 questions for every uniswap trader to build a better ecosystem',
    url: 'https://dune.com/embeds/9798/19495/b2e60f71-40e3-4877-aee7-f356a50a0b78',
    author: 'sasha_codes',
  },
  {
    title: 'New DeFi aggregator with integrations like Uniswap, dYdX, 1inch, etc.',
    url: 'https://dune.com/embeds/1274979/2193032/2fd5c312-d9f4-4be8-a315-d31ad0ac1966',
    author: 'Joebrauk',
  },
  {
    title: `What's Your Preferred Decentralized Exchange (DEX)?`,
    url: 'https://dune.com/embeds/4323/8547/1ccf0146-3c38-47bf-aa87-cf84222cb996',
    author: 'KryptoSC',
  },
  {
    title: 'Can you share your front-running/MEV stories with us?',
    url: 'https://dune.com/embeds/233623/438791/3b1a0e57-5d50-44cc-a1d1-351247791858',
    author: 'stardustwealth',
  },
  {
    title: 'Top 10 Crypto Exchanges Of All Time!',
    url: 'https://dune.com/embeds/4319/22558/c84800e8-d575-41e9-933e-7feaf87fa8c6',
    author: 'Tariiiixx',
  },
  {
    title: '“Fee Switch” Design Space & Next Steps',
    url: 'https://dune.com/embeds/56126/113379/fda627bf-ae0b-4519-8fe7-83572484c3b3',
    author: 'Leighton',
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

            <iframe src={ifr.url} width="100%" height="250px" frameBorder={0} />
          </AutoColumn>
        ))}
      </OpinionWrapper>
    </PublicOpinionWrapper>
  )
}
