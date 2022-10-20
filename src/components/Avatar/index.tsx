import multiavatar from '@multiavatar/multiavatar'
import { useLayoutEffect, useMemo, useRef } from 'react'
import styled from 'styled-components/macro'

const StyledIdenticon = styled.div<{ iconSize: number }>`
  height: ${({ iconSize }) => `${iconSize}px`};
  width: ${({ iconSize }) => `${iconSize}px`};
`

export default function AvatarExample({ name, size }: { name: string; size?: number }) {
  const iconSize = size ? size : 24

  const icon = useMemo(() => name && multiavatar(name), [name])
  const iconRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const current = iconRef.current
    if (icon && current) {
      current.innerHTML = icon
      return () => {
        try {
          current.innerHTML = ''
        } catch (e) {
          console.error('Avatar icon not found')
        }
      }
    }
    return
  }, [icon, iconRef])

  return (
    <StyledIdenticon iconSize={iconSize}>
      <span ref={iconRef} />
    </StyledIdenticon>
  )
}
