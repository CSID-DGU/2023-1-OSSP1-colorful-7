// import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import { Root } from './styled'
// import { camelizeKey } from 'utils/camelizeKey'

type ApproveMemberSectionProps = {
  className?: string
}
// 여기에 들어갈 json 데이터 정의 필요!
export const ApproveMemberSection: FC<ApproveMemberSectionProps> = ({ className }) => {
  return <Root className={className}>멤버 지원 승인</Root>
}
