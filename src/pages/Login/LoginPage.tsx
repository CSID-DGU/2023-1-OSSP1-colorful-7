import { FC } from 'react'
import { Root } from './styled'

type LoginPageProps = {
  className?: string
}

export const LoginPage: FC<LoginPageProps> = ({ className }) => {
  return <Root className={className}>LoginPage</Root>
}
