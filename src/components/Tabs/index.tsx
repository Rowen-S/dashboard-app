import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

const TabListComponents = styled(TabList)`
  &[data-reach-tab-list] {
    background: unset;
    border-bottom: 1px solid ${({ theme }) => theme.text5};
  }
`

const TabComponents = styled(Tab)`
  &[data-reach-tab] {
    padding: 0.625rem 0.5em;
    border-bottom: 2px solid transparent;
    &[data-selected] {
      color: ${({ theme }) => theme.primary1};
      border-bottom-color: ${({ theme }) => theme.primary1};
      border-bottom-width: 2px;
    }
  }

  &:not(:first-child) {
    margin-left: 1.5625rem;
  }
`
const TabPanelComponents = styled(TabPanel)`
  padding: 1.5rem 0;
`

interface TabsProps {
  data: {
    label: string
    content: ReactNode
  }[]
}

export default function DataTabs({ data }: TabsProps) {
  return (
    <Tabs>
      <TabListComponents>
        {data.map((tab, index) => (
          <TabComponents key={index}>{tab.label}</TabComponents>
        ))}
      </TabListComponents>
      <TabPanels>
        {data.map((tab, index) => (
          <TabPanelComponents key={index}>{tab.content}</TabPanelComponents>
        ))}
      </TabPanels>
    </Tabs>
  )
}
