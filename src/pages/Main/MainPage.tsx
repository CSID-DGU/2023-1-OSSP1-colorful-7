import { CommonHeader } from 'components/CommonHeader'
import { FC, useEffect, useState } from 'react'
import { BannerSection } from './BannerSection'
import { PopularProjectListSection } from './PopularProjectListSection'
import { RecentProjectListSection } from './RecentProjectListSection'
import { RecommendProjectListSection } from './RecommendProjectListSection'
import { Root } from './styled'
import { ProjectListType } from 'types/project'
import { GetMainInfoResponseType, getmainInfo } from 'api/getMainInfo'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const [recommendedProjectList, setRecommendedProjectList] = useState<ProjectListType>([]);
  const [popularProjectList, setPopularProjectList] = useState<ProjectListType>([]);
  const [recentProjectList, setRecentProjectList] = useState<ProjectListType>([])
  
  useEffect(() => {
    getmainInfo('/main/info')
    .then((response: GetMainInfoResponseType) => {
      if (response.status === 'SUCCESS') {
        console.log('SUCCESS');
        setRecommendedProjectList(recommendedProjectList)
        setPopularProjectList(popularProjectList)
        setRecentProjectList(recentProjectList)
      } else {
        console.log('FAIL');
        console.log('Error message:', response.message);
      }
    })
    .catch((error: any) => {
      console.error('Error :', error);
    });
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
