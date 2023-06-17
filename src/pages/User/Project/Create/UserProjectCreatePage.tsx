import projectTitleIconImg from 'assets/images/project/titleIcon.png'
import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import {
  Container,
  ProjectOptionContainer,
  Root,
  TitleContainer,
  TitleLogoImg,
  TitleTypo,
  InputTitle,
  ProjectOptionLeftContainer,
  ProjectOptionRightContainer,
  InputContainer,
  LeaderPositionContainer,
  InputTitleRequired,
  SearchContainer,
  ProjectMemberInputTitleContainer,
  ProjectMemberExplainIcon,
  ProjectMemberExplainWrapper,
  ProjectMemberExplainContentWrapper,
  ProjectMemberExplainTitle,
  ProjectMemberExplainText,
  ProjectMemberInputContainer,
  ProjectDateContainer,
  ProjectCreateButton,
  LocationContainer,
} from './styled'
// antd 적용하기
import { Form, Input, Select, DatePicker, Checkbox, Row, Col, Slider } from 'antd'
import { CreateProjectSection } from './CreateProjectSection'
import type { SliderMarks } from 'antd/es/slider';
import { locationOptions } from 'constants/project/locationOptions'

type UserProjectCreatePageProps = {
  className?: string
}

const { Option } = Select

interface StackType {
  id: number;
  label: string;
  key: string;
}

const stackName: StackType[] = [
  {id: 0, label: '프론트엔드', key: 'WEB_PRONTEND'},
  {id: 1, label: '백엔드', key: 'SERVER_BACKEND'},
  {id: 2, label: '앱 클라이언트', key: 'APP_CLIENT'},
  {id: 3, label: '기타', key: 'ETC'},
];

const marks: SliderMarks = {
  0: {
    style: {
      fontSize: '30px',
    },
    label: '🥚',
  },
  25: {
    style: {
      fontSize: '30px',
    },
    label: '🐣',
  },
  50: {
    style: {
      fontSize: '30px',
    },
    label: '🐥',
  },
  75: {
    style: {
      fontSize: '30px',
    },
    label: '🐔',
  },
  100: {
    style: {
      fontSize: '30px',
    },
    label: '🦢',
  },
};

const content = (
  <ProjectMemberExplainContentWrapper>
    <ProjectMemberExplainTitle>원하는 팀원의 실력을 정해주세요.</ProjectMemberExplainTitle>
    <ProjectMemberExplainText>다음은 회원가입 시 푸는 퀴즈에 따라 분류된 등급입니다.</ProjectMemberExplainText>
    <ProjectMemberExplainText>E는 가장 낮은 등급, A는 가장 높은 등급입니다.</ProjectMemberExplainText>
    <Slider marks={marks} defaultValue={100} disabled={true}/>
  </ProjectMemberExplainContentWrapper>
);

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';

// 아니 근데 제목 입력 받는 부분 필요해...ㅠ
// 분야는 중복 선택 가능한가??
export const UserProjectCreatePage: FC<UserProjectCreatePageProps> = ({ className }) => {

  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <TitleContainer>
          <TitleLogoImg src={projectTitleIconImg} alt={'요즘 뜨는 프로젝트 로고 이미지'} />
          <TitleTypo>프로젝트 생성하기</TitleTypo>
        </TitleContainer>
        <ProjectOptionContainer>
          <ProjectOptionLeftContainer>
            <Form layout="vertical" autoComplete="off">
              <Form.Item style={{ marginBottom: 0 }}>
                <ProjectMemberInputTitleContainer>
                  <InputTitleRequired>모집인원</InputTitleRequired>
                  <ProjectMemberExplainWrapper content={content} title="등급 안내" placement="right">
                    <ProjectMemberExplainIcon />
                  </ProjectMemberExplainWrapper>
                </ProjectMemberInputTitleContainer>
                {stackName
                  .map((stackItem) => (
                    <ProjectMemberInputContainer key={stackItem.id}>
                      <Form.Item
                        name="memberStack"
                        style={{ display: 'inline-block', width: 'calc(40% - 8px)', marginBottom: '5px'}}
                      >
                        <div>{stackItem.label}</div>
                      </Form.Item>
                      <Form.Item
                        name={`number_${stackItem.key}`}
                        style={{ display: 'inline-block', width: 'calc(30% - 8px)', marginLeft: '5px', marginBottom: 0 }}
                      >
                        <Input placeholder="인원" />
                      </Form.Item>
                      <Form.Item
                        name={`grade_${stackItem.key}`}
                        style={{ display: 'inline-block', width: 'calc(30% - 8px)', marginLeft: '5px', marginBottom: 0  }}
                      >
                        <Select placeholder="등급">
                          <Option value='1'>A</Option>
                          <Option value='2'>B</Option>
                          <Option value='3'>C</Option>
                          <Option value='4'>D</Option>
                          <Option value='5'>E</Option>
                        </Select>
                      </Form.Item>
                  </ProjectMemberInputContainer>
                  ))
                }
              </Form.Item>
            </Form>
          </ProjectOptionLeftContainer>
          <ProjectOptionRightContainer>
            <Form layout="vertical" autoComplete="off">
              <InputContainer>
                <LeaderPositionContainer>
                  <InputTitleRequired>팀장 포지션</InputTitleRequired>
                  <Form.Item name="leader-position">
                    <Select placeholder="팀장 포지션">
                      <Option value="WEB_FRONTEND">프론트</Option>
                      <Option value="SERVER_BACKEND">백엔드</Option>
                      <Option value="APP_CLIENT">앱 클라이언트</Option>
                      <Option value="ETC">기타</Option>
                    </Select>
                  </Form.Item>
                </LeaderPositionContainer>
                <ProjectDateContainer>
                  <InputTitleRequired>프로젝트 기간</InputTitleRequired>
                  <InputContainer>
                    <RangePicker format={dateFormat} />
                  </InputContainer>
                </ProjectDateContainer>
              </InputContainer>
              <Form.Item>
                <InputTitleRequired>분야</InputTitleRequired>
                <Checkbox.Group>
                  <Row style={{ flexFlow: 'row nowrap' }}>
                    <Col span={10}>
                      <Checkbox value="WEB" style={{ lineHeight: '32px' }}>
                        WEB
                      </Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="SERVER" style={{ lineHeight: '32px' }}>
                        SERVER
                      </Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="APP" style={{ lineHeight: '32px' }}>
                        APP
                      </Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="ETC" style={{ lineHeight: '32px' }}>
                        ETC
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form>
          </ProjectOptionRightContainer>
        </ProjectOptionContainer>
        <SearchContainer>
          <LocationContainer>
            <InputTitle>지역</InputTitle>
            <Select defaultValue={0} options={locationOptions} size="large" placeholder="지역 선택" style={{ width: 200 }}/>
          </LocationContainer>
          <LocationContainer>
            <InputTitleRequired>제목</InputTitleRequired>
            <Input />
          </LocationContainer>
          <ProjectCreateButton type="primary">프로젝트 생성하기</ProjectCreateButton>
        </SearchContainer>
        <CreateProjectSection />
      </Container>
    </Root>
  )
}
