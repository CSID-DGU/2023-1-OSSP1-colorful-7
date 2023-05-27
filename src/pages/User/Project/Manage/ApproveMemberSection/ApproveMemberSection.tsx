import Avatar from 'assets/images/missing_avatar.png'
import { FC } from 'react'
import { ButtonWrapper, Root, StackTag, UserIcon, UserNameTypo, UserTypeTypo } from './styled'
import { Button, List, Space } from 'antd'
// import { camelizeKey } from 'utils/camelizeKey'

type ApproveMemberSectionProps = {
  className?: string
}
// 여기에 들어갈 json 데이터 정의 필요!
export const ApproveMemberSection: FC<ApproveMemberSectionProps> = ({ className }) => {
  return (
    <Root className={className}>
      <List
        dataSource={[
          {
            id: 1,
            name: 'Lily',
          },
          {
            id: 2,
            name: 'Lily',
          },
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <ButtonWrapper key={`a-${item.id}`}>
                <Button type="primary">승인</Button>
                <Button>거절</Button>
              </ButtonWrapper>,
            ]}
          >
            <List.Item.Meta
              avatar={<UserIcon src={Avatar} alt={'프로필 이미지'} />}
              title={
                <UserNameTypo>
                  {item.name}
                  <UserTypeTypo>분야 적기</UserTypeTypo>
                </UserNameTypo>
              }
              description={
                <Space size={[0, 'small']} wrap>
                  <StackTag>CSS</StackTag>
                  <StackTag>Javascript</StackTag>
                  <StackTag>HTML</StackTag>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Root>
  )
}
