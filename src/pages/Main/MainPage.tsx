import { useGetDashboardListQuery } from 'api/dashboard/getDashboardList'
import { FC } from 'react'
import { Root } from './styled'

type MainPageProps = {
  className?: string
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const { data: dashboardListData } = useGetDashboardListQuery({ variables: {} })

  console.log({ dashboardListData })

  return <Root className={className}>test to deploy</Root>
}
