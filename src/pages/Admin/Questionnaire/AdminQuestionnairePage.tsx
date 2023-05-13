import questionnaireSampleJson from 'constants/json/questionnaire_sample.json'
import { FC, useState } from 'react'
import { QuestionnaireDataType, QuestionType } from 'types/questionnaire'
import { camelizeKey } from 'utils/camelizeKey'
import { EditableQuestionCard } from './components/EditableQuestionCard'
import {
  ContentContainer,
  HeaderContainer,
  HeaderRoot,
  HeaderTypo,
  QuestionCreateButton,
  Root,
  TitleContainer,
  TitleTypo,
} from './styled'

type AdminQuestionnairePageProps = {
  className?: string
}

export const AdminQuestionnairePage: FC<AdminQuestionnairePageProps> = ({ className }) => {
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireDataType>(
    camelizeKey(questionnaireSampleJson) as QuestionnaireDataType
  )

  const onChangeQuestionType = (questionKey: number) => (questionType: QuestionType) => () => {
    setQuestionnaireData((prevQuestionnaireData) => {
      let newQuestionnaireData = prevQuestionnaireData
      let newQuestionListData = newQuestionnaireData.questionListData.map((questionData) =>
        questionData.key === questionKey ? { ...questionData, type: questionType } : questionData
      )

      return { ...newQuestionnaireData, questionListData: newQuestionListData }
    })
  }

  const onCreateQuestion = () => {
    setQuestionnaireData((prevQuestionnaireData) => {
      let newQuestionnaireData = prevQuestionnaireData
      let newQuestionKey =
        newQuestionnaireData.questionListData[newQuestionnaireData.questionListData.length - 1].key + 1
      let newQuestionListData = [
        ...prevQuestionnaireData.questionListData,
        {
          key: newQuestionKey,
          title: '',
          answer: '0',
          optionListData: [
            {
              key: 0,
              title: '질문 1',
            },
          ],
          score: 5,
          type: 'RADIO' as QuestionType,
        },
      ]
      newQuestionnaireData = { ...newQuestionnaireData, questionListData: newQuestionListData }
      return newQuestionnaireData
    })
  }

  const onDeleteQuestion = (questionKey: number) => () => {
    setQuestionnaireData((prevQuestionnaireData) => {
      let newQuestionnaireData = prevQuestionnaireData
      let newQuestionListData = newQuestionnaireData.questionListData.filter(
        (questionData) => questionData.key !== questionKey
      )
      newQuestionnaireData = { ...newQuestionnaireData, questionListData: newQuestionListData }
      return newQuestionnaireData
    })
  }

  const onChangeQuestionTitle = (questionKey: number) => (e: any) => {
    setQuestionnaireData((prevQuestionnaireData) => {
      let newQuestionnaireData = prevQuestionnaireData
      let newQuestionListData = newQuestionnaireData.questionListData.map((questionData) =>
        questionData.key === questionKey
          ? {
              ...questionData,
              title: e.target.value,
            }
          : questionData
      )
      newQuestionnaireData = { ...newQuestionnaireData, questionListData: newQuestionListData }
      return newQuestionnaireData
    })
  }

  const onChangeQuestionScore = (questionKey: number) => (e: any) => {
    setQuestionnaireData((prevQuestionnaireData) => {
      let newQuestionnaireData = prevQuestionnaireData
      let newQuestionListData = newQuestionnaireData.questionListData.map((questionData) =>
        questionData.key === questionKey
          ? {
              ...questionData,
              score: e.target.value,
            }
          : questionData
      )
      newQuestionnaireData = { ...newQuestionnaireData, questionListData: newQuestionListData }
      return newQuestionnaireData
    })
  }

  const onChangeQuestionAnswer = (questionKey: number) => (e: any) => {
    setQuestionnaireData((prevQuestionnaireData) => {
      let newQuestionnaireData = prevQuestionnaireData
      let newQuestionListData = newQuestionnaireData.questionListData.map((questionData) =>
        questionData.key === questionKey
          ? {
              ...questionData,
              answer: e.target.value,
            }
          : questionData
      )
      newQuestionnaireData = { ...newQuestionnaireData, questionListData: newQuestionListData }
      return newQuestionnaireData
    })
  }

  const onCreateOption = (questionKey: number) => () => {
    setQuestionnaireData((prevQuestionnaireData) => {
      let newQuestionnaireData = prevQuestionnaireData
      let newOptionKey =
        newQuestionnaireData.questionListData[questionKey].optionListData[
          newQuestionnaireData.questionListData[questionKey].optionListData.length - 1
        ].key + 1
      let newQuestionListData = newQuestionnaireData.questionListData.map((questionData) =>
        questionData.key === questionKey
          ? {
              ...questionData,
              optionListData: questionData.optionListData.concat({
                key: newOptionKey,
                title: `선택지 ${newOptionKey}`,
              }),
            }
          : questionData
      )
      newQuestionnaireData = { ...newQuestionnaireData, questionListData: newQuestionListData }
      return newQuestionnaireData
    })
  }

  const onDeleteOption = (questionKey: number) => (optionKey: number) => () => {
    setQuestionnaireData((prevQuestionnaireData) => {
      let newQuestionnaireData = prevQuestionnaireData
      let newQuestionListData = newQuestionnaireData.questionListData.map((questionData) =>
        questionData.key === questionKey
          ? {
              ...questionData,
              optionListData: questionData.optionListData.filter((optionData) => optionData.key !== optionKey),
            }
          : questionData
      )
      newQuestionnaireData = { ...newQuestionnaireData, questionListData: newQuestionListData }
      return newQuestionnaireData
    })
  }

  const onChangeOption = (questionKey: number) => (optionKey: number) => (e: any) => {
    setQuestionnaireData((prevQuestionnaireData) => {
      let newQuestionnaireData = prevQuestionnaireData
      let newQuestionListData = newQuestionnaireData.questionListData.map((questionData) =>
        questionData.key === questionKey
          ? {
              ...questionData,
              optionListData: questionData.optionListData.map((optionData) =>
                optionData.key === optionKey ? { ...optionData, title: e.target.value } : optionData
              ),
            }
          : questionData
      )
      newQuestionnaireData = { ...newQuestionnaireData, questionListData: newQuestionListData }
      return newQuestionnaireData
    })
  }

  return (
    <Root className={className}>
      <HeaderRoot>
        <HeaderContainer>
          <HeaderTypo>질문지 어드민</HeaderTypo>
        </HeaderContainer>
      </HeaderRoot>
      <ContentContainer>
        <TitleContainer>
          <TitleTypo>
            {questionnaireData.title} 질문지 수정 (current version : {questionnaireData.version})
          </TitleTypo>
        </TitleContainer>
        {questionnaireData.questionListData.map((questionData) => (
          <EditableQuestionCard
            questionData={questionData}
            onChangeQuestionType={onChangeQuestionType(questionData.key)}
            onChangeQuestionTitle={onChangeQuestionTitle(questionData.key)}
            onChangeQuestionScore={onChangeQuestionScore(questionData.key)}
            onChangeQuestionAnswer={onChangeQuestionAnswer(questionData.key)}
            onDeleteQuestion={onDeleteQuestion(questionData.key)}
            onDeleteOption={onDeleteOption(questionData.key)}
            onCreateOption={onCreateOption(questionData.key)}
            onChangeOption={onChangeOption(questionData.key)}
            key={`question_${questionData.key}`}
          />
        ))}
        <QuestionCreateButton onClick={onCreateQuestion}>질문 추가</QuestionCreateButton>
      </ContentContainer>
    </Root>
  )
}
