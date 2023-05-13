import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import { BannerSection } from './BannerSection'
import { PopularProjectListSection } from './PopularProjectListSection'
import { RecentProjectListSection } from './RecentProjectListSection'
import { Root } from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <CommonHeader />
      <BannerSection />
      <PopularProjectListSection />
      <RecentProjectListSection />
    </Root>
  )
}
