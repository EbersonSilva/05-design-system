import { ComponentProps } from 'react'
import { AvataFallback, AvataImage, AvatarContainer } from './styles'
import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof AvataImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvataImage {...props} />

      <AvataFallback delayMs={600}>
        <User />
      </AvataFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
