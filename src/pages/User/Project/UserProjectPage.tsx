import { FC } from 'react'
import { Root } from './styled'

type UserProjectPageProps = {
  className?: string
}

export const UserProjectPage: FC<UserProjectPageProps> = ({ className }) => {
  return <Root className={className}>UserProjectPage</Root>
}
