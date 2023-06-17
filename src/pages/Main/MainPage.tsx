import { CommonHeader } from 'components/CommonHeader'
import { FC, useEffect, useState } from 'react'
import { BannerSection } from './BannerSection'
import { PopularProjectListSection } from './PopularProjectListSection'
import { RecentProjectListSection } from './RecentProjectListSection'
import { RecommendProjectListSection } from './RecommendProjectListSection'
import { Root } from './styled'
import { ProjectListType } from 'types/project'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const [recommendedProjectList, setRecommendedProjectList] = useState<ProjectListType>([]);
  const [popularProjectList, setPopularProjectList] = useState<ProjectListType>([]);
  const [recentProjectList, setRecentProjectList] = useState<ProjectListType>([])
  
  useEffect(() => {
    // 함수 만들어서 변수에 저장하기
    
  }, [])

  return ( 
    <Root className={className}>
      <CommonHeader />
      <BannerSection />
      <RecommendProjectListSection recommendedProjectList={recommendedProjectList}/>
      <PopularProjectListSection popularProjectList={popularProjectList}/>
      <RecentProjectListSection recentProjectList={recentProjectList}/>
    </Root>
  )
}
