import { AxiosRequestConfig } from 'axios'
import { axiosGET } from './base'
import { UserInfoListType } from 'types/project'

export type GetUserProjectManageRecommendRequestType = {
  projectKey: number
}

export type GetUserProjectManageRecommendResponseType = {
  UserInfoListType: UserInfoListType
  status: "SUCCESS" | "FAILED"
	message?: string
}

const getQueryPath = (params: GetUserProjectManageRecommendRequestType) => `/user/project/manage/recommend/${params}`

export const getUserProjectManageRecommend = (params: GetUserProjectManageRecommendRequestType, config?: AxiosRequestConfig) => {
 return axiosGET<GetUserProjectManageRecommendRequestType, GetUserProjectManageRecommendResponseType>(
    getQueryPath(params),
    params,
    config
  )
}