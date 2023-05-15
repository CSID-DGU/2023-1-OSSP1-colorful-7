import { FC } from 'react'
import { Root } from './styled'

type UserProfilePageProps = {
  className?: string
}

export const UserProfilePage: FC<UserProfilePageProps> = ({ className }) => {
  return <Root className={className}>UserProfilePage</Root>
}
