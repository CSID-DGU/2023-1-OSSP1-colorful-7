import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import { Root } from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <CommonHeader />
    </Root>
  )
}
