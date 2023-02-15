import { RowBetween } from 'components/Row'
import styled from 'styled-components/macro'
import { AutoColumn } from 'components/Column'
import { ExternalLink, TYPE } from 'theme'

import Twitter from 'assets/svg/twitter.svg'
import Discord from 'assets/svg/discord.svg'
import Raddit from 'assets/svg/raddit.svg'
import Github from 'assets/svg/github.svg'
import { LightCard } from 'components/Card'

const IntroduceWrapper = styled(LightCard)`
  ${({ theme }) => theme.flexRowNoWrap}
`

const Logo = styled.img`
  flex: none;
  width: 180px;
  height: 180px;

  padding: 24px;
  border-radius: 6px;
  background: #f8f8f8;
  display: flex;
  align-self: flex-start;
`

const ProjectDetailWrapper = styled(AutoColumn)`
  margin-left: 55px;
`
const ProjectIntroduce = styled.div`
  & > a {
    color: ${({ theme }) => theme.primary1};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`

const ProjectSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
`

const SocialLogo = styled.img`
  width: 28px;
  height: 28px;
  :hover {
    opacity: 80%;
  }
`

export interface InfoType {
  logo: string
  desc: string
  social: {
    twitterUri?: string
    discordUri?: string
    radditUri?: string
    githubUri?: string
  }
  explorerUri?: string
}

// const tokenInfo = {
//   logo: CoinLogo,
//   desc: ``,
//   social: {
//     twitterUri: '//twitter.com/',
//     discordUri: '//discord.com/invite/',
//     radditUri: '//www.reddit.com/r/',
//     githubUri: '//github.com/',
//   },
//   explorerUri: '',
// }

export default function IntroduceToken(tokenInfo: InfoType) {
  return (
    <IntroduceWrapper padding={'24px'}>
      <Logo src={tokenInfo.logo} />
      <ProjectDetailWrapper gap="25px">
        <ProjectIntroduce
          dangerouslySetInnerHTML={{
            __html: tokenInfo.desc,
          }}
        />
        <RowBetween width={'90%'}>
          <AutoColumn gap="12px">
            <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
            <ProjectSocial>
              {tokenInfo.social.twitterUri && (
                <ExternalLink href={tokenInfo.social.twitterUri}>
                  <SocialLogo src={Twitter} alt="twitter" />
                </ExternalLink>
              )}
              {tokenInfo.social.discordUri && (
                <ExternalLink href={tokenInfo.social.discordUri}>
                  <SocialLogo src={Discord} alt="twitter" />
                </ExternalLink>
              )}
              {tokenInfo.social.radditUri && (
                <ExternalLink href={tokenInfo.social.radditUri}>
                  <SocialLogo src={Raddit} alt="twitter" />
                </ExternalLink>
              )}
              {tokenInfo.social.githubUri && (
                <ExternalLink href={tokenInfo.social.githubUri}>
                  <SocialLogo src={Github} alt="twitter" />
                </ExternalLink>
              )}
            </ProjectSocial>
          </AutoColumn>

          <AutoColumn gap="12px">
            <TYPE.largeHeader fontSize={18}>Explorer</TYPE.largeHeader>
            {tokenInfo.explorerUri ? (
              <TYPE.body>
                <ExternalLink href={tokenInfo.explorerUri}>{tokenInfo.explorerUri}</ExternalLink>
              </TYPE.body>
            ) : (
              '-'
            )}
          </AutoColumn>
        </RowBetween>
      </ProjectDetailWrapper>
    </IntroduceWrapper>
  )
}
