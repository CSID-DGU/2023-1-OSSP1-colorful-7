import { axiosGET } from 'api/base'
import { AxiosRequestConfig } from 'axios'
import { QueryClient, useQuery, UseQueryOptions } from 'react-query'
import { generateQueryKey } from 'utils/generateQueryKey'

export type GetDashboardListRequestType = {}

export type GetDashboardListResponseType = {
  title: string
  contents: string
  image?: string
}[]

// eslint-disable-next-line no-empty-pattern
const getDashboardListQueryPath = ({}: GetDashboardListRequestType) => `/api/v1/dashboard/list`

const getDashboardList = (params: GetDashboardListRequestType, config?: AxiosRequestConfig) => {
  return axiosGET<GetDashboardListRequestType, GetDashboardListResponseType>(
    getDashboardListQueryPath(params),
    params,
    config
  )
}

export const getDashboardListQueryKey = (params: GetDashboardListRequestType) =>
  `${getDashboardListQueryPath(params)}?${generateQueryKey(params)}`

export const prefetchGetDashboardListQuery = async (
  queryClient: QueryClient,
  variables: GetDashboardListRequestType
) => {
  await queryClient.prefetchQuery(getDashboardListQueryKey(variables), () => getDashboardList(variables))

  return queryClient.getQueryState<GetDashboardListResponseType>(getDashboardListQueryKey(variables))
}

export const useGetDashboardListQuery = ({
  variables,
  options,
  axiosConfig,
}: {
  variables: GetDashboardListRequestType
  options?: Omit<UseQueryOptions<GetDashboardListResponseType>, 'queryKey' | 'queryFn'>
  axiosConfig?: AxiosRequestConfig
}) => {
  return useQuery<GetDashboardListResponseType>(
    getDashboardListQueryKey(variables),
    () => getDashboardList(variables, axiosConfig),
    options
  )
}
