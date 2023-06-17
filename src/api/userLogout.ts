import { AxiosRequestConfig } from 'axios'
import { axiosPOST } from './base'

export type UserLogoutRequestType = {}

export type UserLogoutResponseType = {
  status: "SUCCESS" | "FAILED"
	message?: string
}

export const userLogout = (url: string, config?: AxiosRequestConfig) => {
 return axiosPOST<UserLogoutRequestType, UserLogoutResponseType>(
    url,
    config
  )
}