import { FC } from 'react'
import { Root } from './styled'

type JoinPageProps = {
  className?: string
}

export const JoinPage: FC<JoinPageProps> = ({ className }) => {
  return <Root className={className}>JoinPage</Root>
}
