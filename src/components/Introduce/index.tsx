import { RowBetween } from 'components/Row'
import styled from 'styled-components/macro'
import { AutoColumn } from 'components/Column'
import { CopyContractAddress, ExternalLink, TYPE } from 'theme'

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
  contractUri?: string
}

// const info = {
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

export default function IntroduceToken(info: InfoType) {
  return (
    <IntroduceWrapper padding={'24px'}>
      <Logo src={info.logo} />
      <ProjectDetailWrapper gap="25px">
        <ProjectIntroduce
          dangerouslySetInnerHTML={{
            __html: info.desc,
          }}
        />
        <RowBetween width={'90%'}>
          <AutoColumn gap="12px">
            <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
            <ProjectSocial>
              {info.social.twitterUri && (
                <ExternalLink href={info.social.twitterUri}>
                  <SocialLogo src={Twitter} alt="twitter" />
                </ExternalLink>
              )}
              {info.social.discordUri && (
                <ExternalLink href={info.social.discordUri}>
                  <SocialLogo src={Discord} alt="twitter" />
                </ExternalLink>
              )}
              {info.social.radditUri && (
                <ExternalLink href={info.social.radditUri}>
                  <SocialLogo src={Raddit} alt="twitter" />
                </ExternalLink>
              )}
              {info.social.githubUri && (
                <ExternalLink href={info.social.githubUri}>
                  <SocialLogo src={Github} alt="twitter" />
                </ExternalLink>
              )}
            </ProjectSocial>
          </AutoColumn>

          <AutoColumn gap="12px">
            <TYPE.largeHeader fontSize={18}>Explorer</TYPE.largeHeader>
            {info.explorerUri ? (
              <TYPE.body>
                <ExternalLink href={info.explorerUri}>{info.explorerUri}</ExternalLink>
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

export function IntroduceChain(info: InfoType) {
  return (
    <IntroduceWrapper padding={'24px'}>
      <Logo src={info.logo} />
      <ProjectDetailWrapper gap="25px">
        <ProjectIntroduce
          dangerouslySetInnerHTML={{
            __html: info.desc,
          }}
        />
        <RowBetween width={'90%'}>
          <AutoColumn gap="12px">
            <TYPE.largeHeader fontSize={18}>Community</TYPE.largeHeader>
            <ProjectSocial>
              {info.social.twitterUri && (
                <ExternalLink href={info.social.twitterUri}>
                  <SocialLogo src={Twitter} alt="twitter" />
                </ExternalLink>
              )}
              {info.social.discordUri && (
                <ExternalLink href={info.social.discordUri}>
                  <SocialLogo src={Discord} alt="twitter" />
                </ExternalLink>
              )}
              {info.social.radditUri && (
                <ExternalLink href={info.social.radditUri}>
                  <SocialLogo src={Raddit} alt="twitter" />
                </ExternalLink>
              )}
              {info.social.githubUri && (
                <ExternalLink href={info.social.githubUri}>
                  <SocialLogo src={Github} alt="twitter" />
                </ExternalLink>
              )}
            </ProjectSocial>
          </AutoColumn>
          <AutoColumn gap="12px">
            <TYPE.largeHeader fontSize={18}>Contracts</TYPE.largeHeader>
            {info.contractUri ? (
              <TYPE.body>
                <CopyContractAddress address={info.contractUri} />
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
