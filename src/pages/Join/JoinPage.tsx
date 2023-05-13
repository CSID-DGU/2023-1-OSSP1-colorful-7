import logoImg from 'assets/images/logo.png'
import { CommonHeader } from 'components/CommonHeader'
import { QuestionnaireModal } from 'components/QuestionnaireModal'
import { defaultDevelopmentStack } from 'constants/project/developmentStack'
import { useModal } from 'hooks/useModal'
import { FC, useState } from 'react'
import { DevelopmentStackType } from 'types/project'
import { translateDevelopmentStack } from 'utils/translateDevelopmentStack'
import {
  Container,
  ContentInput,
  ContentSelect,
  ContentTextArea,
  InputContainer,
  JoinButton,
  LogoImg,
  LogoTypo,
  QuestionnaireButton,
  QuestionnaireScoreTypo,
  Root,
} from './styled'

type JoinPageProps = {
  className?: string
}

export const JoinPage: FC<JoinPageProps> = ({ className }) => {
  const [developmentStack, setDevelopmentStack] = useState<DevelopmentStackType>()
  const { open: questionnaireModalOpen, handleModal: handleQuestionnaireModal } = useModal({})
  const [questionnaireScore, setQuestionnaireScore] = useState<number>()

  const onChangeDevelopmentStack = (value: string | any) => {
    setDevelopmentStack(value as DevelopmentStackType)
  }

  const developmentStackOptionList = defaultDevelopmentStack.map((developmentStackItem) => ({
    value: developmentStackItem,
    label: translateDevelopmentStack(developmentStackItem),
  }))

  const onClickQuestionnaireButton = () => {
    if (developmentStack) {
      handleQuestionnaireModal('OPEN')()
      return
    }
  }

  const onSubmitQuestionnaireAnswerSheet = (score: number) => {
    setQuestionnaireScore(score)
  }

  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <LogoImg src={logoImg} alt={'로고 이미지'} />
        <LogoTypo>당신의 능력, 티밍에서 펼쳐보세요!</LogoTypo>
        <InputContainer>
          <ContentInput placeholder="아이디" />
          <ContentInput placeholder="비밀번호" />
          <ContentInput placeholder="비밀번호 확인" />
          <ContentInput placeholder="닉네임" />
          <ContentTextArea placeholder="자기소개"></ContentTextArea>
          <ContentSelect
            value={developmentStack}
            onChange={onChangeDevelopmentStack}
            placeholder="기술 스택을 선택해주세요."
            options={developmentStackOptionList}
            disabled={!!questionnaireScore}
          />
          {developmentStack && (
            <QuestionnaireButton onClick={onClickQuestionnaireButton} disabled={!!questionnaireScore}>
              퀴즈 풀기
            </QuestionnaireButton>
          )}
          {questionnaireScore && <QuestionnaireScoreTypo>퀴즈 점수 : {questionnaireScore}점</QuestionnaireScoreTypo>}
        </InputContainer>
        <JoinButton type={'primary'}>회원가입</JoinButton>
      </Container>
      {developmentStack && (
        <QuestionnaireModal
          open={questionnaireModalOpen}
          developmentStack={developmentStack}
          onCloseModal={handleQuestionnaireModal('CLOSE')}
          onSubmitQuestionnaireAnswerSheet={onSubmitQuestionnaireAnswerSheet}
        />
      )}
    </Root>
  )
}
