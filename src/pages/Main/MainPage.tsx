import { CommonHeader } from 'components/CommonHeader'
import { FC, useEffect } from 'react'
import { BannerSection } from './BannerSection'
import { PopularProjectListSection } from './PopularProjectListSection'
import { RecentProjectListSection } from './RecentProjectListSection'
import { RecommendProjectListSection } from './RecommendProjectListSection'
import { Root } from './styled'
import { axiosGET } from 'api/base'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {

  return (
    <Root className={className}>
      <CommonHeader />
      <BannerSection />
      <RecommendProjectListSection />
      <PopularProjectListSection />
      <RecentProjectListSection />
    </Root>
  )
}
