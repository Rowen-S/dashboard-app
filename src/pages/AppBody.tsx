import styled from 'styled-components/macro'

export const BodyWrapper = styled.main<{ margin?: string; maxWidth?: string }>`
  width: 100%;
  margin-top: ${({ margin }) => margin ?? '0px'};
  max-width: ${({ maxWidth }) => maxWidth ?? '1200px'};

  padding: 120px 16px 0px 16px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
      padding: 6rem 16px 16px 16px;
  `};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, ...rest }: { children: React.ReactNode }) {
  return <BodyWrapper {...rest}>{children}</BodyWrapper>
}
