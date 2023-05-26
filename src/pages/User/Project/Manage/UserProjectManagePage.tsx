import { CommonHeader } from 'components/CommonHeader'
import projectTitleIconImg from 'assets/images/project/titleIcon.png'
import { FC } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
// import { camelizeKey } from 'utils/camelizeKey'
import {
  Container,
  Root,
  ManageContainer,
  ManageTitleTypo,
  ManageTitleLogoImg,
  ManageTitleContainer,
  ManageExplainTypo,
} from './styled'
import { SearchMemberSection } from './SearchMemberSection'
import { ApproveMemberSection } from './ApproveMemberSection'
import { ChangeProjectSection } from './ChangeProjectSection'
import { DeleteProjectSection } from './DeleteProjectSection'

type UserProjectManagePageProps = {
  className?: string
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `추천멤버 조회`,
    children: <SearchMemberSection />,
  },
  {
    key: '2',
    label: `멤버 지원승인`,
    children: <ApproveMemberSection />,
  },
  {
    key: '3',
    label: `글 수정`,
    children: <ChangeProjectSection />,
  },
  {
    key: '4',
    label: `글 삭제`,
    children: <DeleteProjectSection />,
  },
]
/*
const onChange = (key: string) => {
  console.log(key);
};
*/

// 여기에 들어갈 json 데이터 정의 필요! + Tabs 컴포넌트 사용하기(antd)
export const UserProjectManagePage: FC<UserProjectManagePageProps> = ({ className }) => {
  // const manageProjectListData = camelizeKey(manageProjectListSampleJson.project_list) as ManageProjectListType
  // const expireProjectListData = camelizeKey(expireProjectListSampleJson.project_list) as ExpireProjectListType
  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <ManageContainer>
          <ManageTitleContainer>
            <ManageTitleLogoImg src={projectTitleIconImg} alt={'요즘 뜨는 프로젝트 로고 이미지'} />
            <ManageTitleTypo>프로젝트 제목 넣기</ManageTitleTypo>
          </ManageTitleContainer>
          <ManageExplainTypo>프로젝트 관리 페이지 입니다.</ManageExplainTypo>
          <Tabs defaultActiveKey="1" items={items} />
        </ManageContainer>
      </Container>
    </Root>
  )
}
