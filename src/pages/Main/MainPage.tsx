import { useGetDashboardListQuery } from 'api/dashboard/getDashboardList'
import { API_URL } from 'constants/system/url'
import { FC } from 'react'
import { Root } from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const { data: dashboardListData } = useGetDashboardListQuery({ variables: {} })

  return (
    <Root className={className}>
      {dashboardListData?.map((dashboardItem, index: number) => (
        <div key={`dashboard_item_${index}`}>
          {dashboardItem.title} <br />
          {dashboardItem.contents}
          {dashboardItem.image && <img src={`${API_URL}${dashboardItem.image}`} alt={dashboardItem.title} />}
        </div>
      ))}
    </Root>
  )
}
