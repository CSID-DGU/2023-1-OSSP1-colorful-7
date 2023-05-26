// import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import { Root } from './styled'
// import { camelizeKey } from 'utils/camelizeKey'

type ChangeProjectSectionProps = {
  className?: string
}
// 여기에 들어갈 json 데이터 정의 필요!
export const ChangeProjectSection: FC<ChangeProjectSectionProps> = ({ className }) => {
  return <Root className={className}>글 수정</Root>
}
