import useCopyClipboard from 'hooks/useCopyClipboard'
import React, { forwardRef, HTMLProps, ReactNode, useCallback, useImperativeHandle, useState } from 'react'
import { ArrowLeft, CheckCircle, Copy, ExternalLink as LinkIconFeather, Trash, X } from 'react-feather'
import ReactGA from 'react-ga'
import { Link } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components/macro'
import { Z_INDEX } from 'theme/zIndex'

import { anonymizeLink } from '../utils/anonymizeLink'
import { ReactComponent as TooltipTriangle } from '../assets/svg/tooltip_triangle.svg'

import { Color } from './styled'

export const ButtonText = styled.button`
  outline: none;
  border: none;
  font-size: inherit;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  :focus {
    text-decoration: underline;
  }
`

export const CloseIcon = styled(X)<{ onClick: () => void }>`
  cursor: pointer;
`

// for wrapper react feather icons
export const IconWrapper = styled.div<{
  stroke?: string
  size?: string
  marginRight?: string
  marginLeft?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size ?? '20px'};
  height: ${({ size }) => size ?? '20px'};
  margin-right: ${({ marginRight }) => marginRight ?? 0};
  margin-left: ${({ marginLeft }) => marginLeft ?? 0};
  & > * {
    stroke: ${({ theme, stroke }) => stroke ?? theme.blue1};
  }
`

// A button that triggers some onClick result, but looks like a link.
export const LinkStyledButton = styled.button<{ disabled?: boolean }>`
  border: none;
  text-decoration: none;
  background: none;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ theme, disabled }) => (disabled ? theme.text2 : theme.primary1)};
  font-weight: 500;

  :hover {
    text-decoration: ${({ disabled }) => (disabled ? null : 'underline')};
  }

  :focus {
    outline: none;
    text-decoration: ${({ disabled }) => (disabled ? null : 'underline')};
  }

  :active {
    text-decoration: none;
  }
`

export const ClickableStyle = css`
  text-decoration: none;
  cursor: pointer;
  transition-duration: 125ms;

  :hover {
    opacity: 0.6;
  }
  :active {
    opacity: 0.4;
  }
`

// An internal link from the react-router-dom library that is correctly styled
export const StyledInternalLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`

export const LinkStyle = css`
  color: ${({ theme }) => theme.primary1};
  stroke: ${({ theme }) => theme.primary1};
  font-weight: 500;
`

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`

const LinkIconWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    text-decoration: none;
    opacity: 0.7;
  }

  :focus {
    outline: none;
    text-decoration: none;
  }

  :active {
    text-decoration: none;
  }
`

const IconStyle = css`
  height: 16px;
  width: 18px;
  margin-left: 10px;
`

const LinkIcon = styled(LinkIconFeather)`
  height: 16px;
  width: 18px;
  margin-left: 10px;
  stroke: ${({ theme }) => theme.blue1};
`

const CopyIcon = styled(Copy)`
  ${IconStyle}
  ${ClickableStyle}
  ${LinkStyle}
  stroke: ${({ theme }) => theme.primary1};
`

export const TrashIcon = styled(Trash)`
  height: 16px;
  width: 18px;
  margin-left: 10px;
  stroke: ${({ theme }) => theme.text3};

  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    opacity: 0.7;
  }
`

const rotateImg = keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`

export const UniTokenAnimated = styled.img`
  animation: ${rotateImg} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  padding: 2rem 0 0 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`

function handleClickExternalLink(event: React.MouseEvent<HTMLAnchorElement>) {
  const { target, href } = event.currentTarget

  const anonymizedHref = anonymizeLink(href)

  // don't prevent default, don't redirect if it's a new tab
  if (target === '_blank' || event.ctrlKey || event.metaKey) {
    ReactGA.outboundLink({ label: anonymizedHref }, () => {
      console.debug('Fired outbound link event', anonymizedHref)
    })
  } else {
    event.preventDefault()
    // send a ReactGA event and then trigger a location change
    ReactGA.outboundLink({ label: anonymizedHref }, () => {
      window.location.href = anonymizedHref
    })
  }
}

/**
 * Outbound link that handles firing google analytics events
 */
export function ExternalLink({
  target = '_blank',
  href,
  rel = 'noopener noreferrer',
  ...rest
}: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & { href: string }) {
  return <StyledLink target={target} rel={rel} href={href} onClick={handleClickExternalLink} {...rest} />
}

export function ExternalLinkIcon({
  target = '_blank',
  href,
  rel = 'noopener noreferrer',
  ...rest
}: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & { href: string }) {
  return (
    <LinkIconWrapper target={target} rel={rel} href={href} onClick={handleClickExternalLink} {...rest}>
      <LinkIcon />
    </LinkIconWrapper>
  )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const SpinnerCss = css`
  animation: 2s ${rotate} linear infinite;
`

const Spinner = styled.img`
  ${SpinnerCss}
  width: 16px;
  height: 16px;
`
export const SpinnerSVG = styled.svg`
  ${SpinnerCss}
`

const BackArrowLink = styled(StyledInternalLink)`
  color: ${({ theme }) => theme.text1};
`
export function BackArrow({ to }: { to: string }) {
  return (
    <BackArrowLink to={to}>
      <ArrowLeft />
    </BackArrowLink>
  )
}

export const CustomLightSpinner = styled(Spinner)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

export const HideSmall = styled.span`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`

export const HideExtraSmall = styled.span`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

export const SmallOnly = styled.span`
  display: none;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: block;
  `};
`

// styles
export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`

const TOOLTIP_WIDTH = 60

const ToolTipWrapper = styled.div<{ isCopyContractTooltip?: boolean; tooltipX?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: ${({ isCopyContractTooltip, tooltipX }) =>
    isCopyContractTooltip && (tooltipX ? `${tooltipX - TOOLTIP_WIDTH / 2}px` : '50%')};
  transform: translate(5px, 32px);
  z-index: ${Z_INDEX.tooltip};
`

const StyledTooltipTriangle = styled(TooltipTriangle)`
  path {
    fill: ${({ theme }) => theme.black};
  }
`

const CopiedTooltip = styled.div<{ isCopyContractTooltip?: boolean }>`
  background-color: ${({ theme }) => theme.black};
  text-align: center;
  justify-content: center;
  width: ${({ isCopyContractTooltip }) => !isCopyContractTooltip && `${TOOLTIP_WIDTH}px`};
  height: ${({ isCopyContractTooltip }) => !isCopyContractTooltip && '32px'};
  line-height: ${({ isCopyContractTooltip }) => !isCopyContractTooltip && '32px'};

  padding: ${({ isCopyContractTooltip }) => isCopyContractTooltip && '8px'};
  border-radius: 8px;

  color: ${({ theme }) => theme.white};
  font-size: 12;
`
function Tooltip({ isCopyContractTooltip, tooltipX }: { isCopyContractTooltip: boolean; tooltipX?: number }) {
  return (
    <ToolTipWrapper isCopyContractTooltip={isCopyContractTooltip} tooltipX={tooltipX}>
      <StyledTooltipTriangle />
      <CopiedTooltip isCopyContractTooltip={isCopyContractTooltip}>Copied!</CopiedTooltip>
    </ToolTipWrapper>
  )
}

const CopyIconWrapper = styled.div`
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
`

export function CopyLinkIcon({ toCopy }: { toCopy: string }) {
  const [isCopied, setCopied] = useCopyClipboard()
  const copy = useCallback(() => {
    setCopied(toCopy)
  }, [toCopy, setCopied])
  return (
    <CopyIconWrapper onClick={copy}>
      <CopyIcon />
      {isCopied && <Tooltip isCopyContractTooltip={false} />}
    </CopyIconWrapper>
  )
}

const FullAddress = styled.span`
  @media only screen and (max-width: '420px') {
    display: none;
  }
`
const TruncatedAddress = styled.span`
  display: none;
  @media only screen and (max-width: '420px') {
    display: flex;
  }
`

const CopyAddressRow = styled.div<{ isClicked: boolean }>`
  ${ClickableStyle}
  color: inherit;
  stroke: inherit;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 6px;
  ${({ isClicked }) => isClicked && `opacity: 0.3 !important`}
`

const CopyContractAddressWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`

export function CopyContractAddress({ address }: { address: string }) {
  const [isCopied, setCopied] = useCopyClipboard()
  const [tooltipX, setTooltipX] = useState<number | undefined>()
  const copy = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setTooltipX(e.clientX)
      setCopied(address)
    },
    [address, setCopied]
  )

  const truncated = `${address.slice(0, 4)}...${address.slice(-3)}`
  return (
    <CopyContractAddressWrapper onClick={copy}>
      <CopyAddressRow isClicked={isCopied}>
        <FullAddress>{address}</FullAddress>
        <TruncatedAddress>{truncated}</TruncatedAddress>
        <Copy size={14} />
      </CopyAddressRow>
      {isCopied && <Tooltip isCopyContractTooltip tooltipX={tooltipX} />}
    </CopyContractAddressWrapper>
  )
}

const CopyHelperContainer = styled(LinkStyledButton)<{ clicked: boolean }>`
  ${({ clicked }) => !clicked && ClickableStyle};
  color: ${({ color, theme }) => color || theme.primary1};
  padding: 0;
  flex-shrink: 0;
  display: flex;
  text-decoration: none;
  :hover,
  :active,
  :focus {
    text-decoration: none;
    color: ${({ color, theme }) => color || theme.primary1};
  }
`
const CopyHelperText = styled.span<{ fontSize: number }>`
  ${({ theme }) => theme.flexRowNoWrap};
  font-size: ${({ fontSize }) => fontSize + 'px'};
  font-weight: 400;
  align-items: center;
`
const CopiedIcon = styled(CheckCircle)`
  color: ${({ theme }) => theme.success};
  stroke-width: 1.5px;
`
interface CopyHelperProps {
  link?: boolean
  toCopy: string
  color?: Color
  fontSize?: number
  iconSize?: number
  gap?: number
  iconPosition?: 'left' | 'right'
  iconColor?: Color
  children?: ReactNode
}

export type CopyHelperRefType = { forceCopy: () => void }
export const CopyHelper = forwardRef<CopyHelperRefType, CopyHelperProps>(
  (
    {
      link,
      toCopy,
      color,
      fontSize = 16,
      iconSize = 20,
      gap = 12,
      iconPosition = 'left',
      iconColor,
      children,
    }: CopyHelperProps,
    ref
  ) => {
    const [isCopied, setCopied] = useCopyClipboard()
    const copy = useCallback(() => {
      setCopied(toCopy)
    }, [toCopy, setCopied])

    useImperativeHandle(ref, () => ({
      forceCopy() {
        copy()
      },
    }))

    const BaseIcon = isCopied ? CopiedIcon : link ? LinkIconFeather : Copy

    return (
      <CopyHelperContainer onClick={copy} color={color} clicked={isCopied}>
        <div style={{ display: 'flex', flexDirection: 'row', gap }}>
          {iconPosition === 'left' && <BaseIcon size={iconSize} strokeWidth={1.5} color={iconColor} />}
          <CopyHelperText fontSize={fontSize}>{isCopied ? <>Copied!</> : children}</CopyHelperText>
          {iconPosition === 'right' && <BaseIcon size={iconSize} strokeWidth={1.5} color={iconColor} />}
        </div>
      </CopyHelperContainer>
    )
  }
)
CopyHelper.displayName = 'CopyHelper'
