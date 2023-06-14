import Avatar from 'assets/images/missing_avatar.png'
import { FC } from 'react'
import userListSampleJson from 'constants/json/user_list_sample.json';
import { ButtonWrapper, Root, StackTag, UserIcon, UserNameTypo } from './styled'
import { Button, List, Space } from 'antd'
import { camelizeKey } from 'utils/camelizeKey'
import { UserInfoListType } from 'types/project';
// import { camelizeKey } from 'utils/camelizeKey'

type ApproveMemberSectionProps = {
  className?: string
}

const userListData = camelizeKey(userListSampleJson.user_list) as UserInfoListType;

// 여기에 들어갈 json 데이터 정의 필요!
export const ApproveMemberSection: FC<ApproveMemberSectionProps> = ({ className }) => {
  const filteredUserListData = userListData.filter(
    (userItem) => 
      userItem.userId++ &&
      userItem.nickname.toLowerCase() &&
      userItem.developmentStackList
  )
  return (
    <Root className={className}>
      <List
        dataSource={
          filteredUserListData
        }
        // dataSource={[
        //   {
        //     id: 1,
        //     name: 'Lily',
        //     stack: '프론트엔드',
        //   },
        //   {
        //     id: 2,
        //     name: 'Lily',
        //     stack: '백엔드',
        //   },
        // ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.userId}
            actions={[
              <ButtonWrapper key={`a-${item.userId}`}>
                <Button type="primary">승인</Button>
                <Button>거절</Button>
              </ButtonWrapper>,
            ]}
          >
            <List.Item.Meta
              avatar={<UserIcon src={Avatar} alt={'프로필 이미지'} />}
              title={<UserNameTypo>{item.nickname}</UserNameTypo>}
              description={
                <Space size={[0, 'small']} wrap>
                  {item.developmentStackList
                    .map((stack) => (
                      <StackTag key={stack.stackId}>{stack.developmentStack}</StackTag>
                    ))
                  }
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Root>
  )
}
