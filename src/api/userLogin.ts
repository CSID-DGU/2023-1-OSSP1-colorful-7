import { AxiosRequestConfig } from 'axios'
import { axiosPOST } from './base'

export type UserLoginRequestType = {
  id: string
	pw: string
}

export type UserLoginResponseType = {
  status: "SUCCESS" | "FAILED"
	message?: string
}

export const userLogin = (url: string, data: UserLoginRequestType, config?: AxiosRequestConfig) => {
 return axiosPOST<UserLoginRequestType, UserLoginResponseType>(
    url,
    data,
    config
  )
}