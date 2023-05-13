import questionnaireListSampleJson from 'constants/json/questionnaire_list_sample.json'
import questionnaireSampleJson from 'constants/json/questionnaire_sample.json'
import { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { QuestionnaireDataType, QuestionnaireListDataType, QuestionType } from 'types/questionnaire'
import { camelizeKey } from 'utils/camelizeKey'
import { decamelizeKey } from 'utils/decamelizeKey'
import { EditableQuestionCard } from './components/EditableQuestionCard'
import {
  ContentContainer,
  HeaderContainer,
  HeaderRoot,
  HeaderTypo,
  QuestionCreateButton,
  QuestionnaireListButton,
  QuestionnaireSubmitButton,
  Root,
} from './styled'

type AdminQuestionnairePageProps = {
  className?: string
}

export const AdminQuestionnairePage: FC<AdminQuestionnairePageProps> = ({ className }) => {
  const navigate = useNavigate()
  const { questionnaireId = 0 } = useParams()
  // eslint-disable-next-line no-undef
  const localStorageQuestionnaireListData = localStorage.getItem('questionnaire_list_sample')
  const questionnaireListData: QuestionnaireListDataType = localStorageQuestionnaireListData
    ? (camelizeKey(JSON.parse(localStorageQuestionnaireListData)) as QuestionnaireListDataType)
    : (camelizeKey(questionnaireListSampleJson) as QuestionnaireListDataType)

  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireDataType>(
    (questionnaireListData.questionnaireListData.filter(
      (questionnaireItemData) => questionnaireItemData.key === +questionnaireId
    )[0] as QuestionnaireDataType) ?? (camelizeKey(questionnaireSampleJson) as QuestionnaireDataType)
  )

  const onClickQuestionnaireListButton = () => {
    navigate('/admin/questionnaire/list')
  }

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

  const onClickQuestionnaireEditButton = () => {
    let newQuestionnaireListData = questionnaireListData
    newQuestionnaireListData.questionnaireListData = newQuestionnaireListData.questionnaireListData.map(
      (questionnaireItemData) =>
        questionnaireItemData.key === +questionnaireId
          ? { ...questionnaireData, version: questionnaireItemData.version + 1 }
          : questionnaireItemData
    )
    // eslint-disable-next-line no-undef
    localStorage.removeItem('questionnaire_list_sample')
    // eslint-disable-next-line no-undef
    localStorage.setItem('questionnaire_list_sample', JSON.stringify(decamelizeKey(newQuestionnaireListData)))
    // eslint-disable-next-line no-undef
    alert('질문지 수정이 완료되었습니다!')
    // eslint-disable-next-line no-undef
    window.location.reload()
  }

  return (
    <Root className={className}>
      <HeaderRoot>
        <HeaderContainer>
          <HeaderTypo>
            질문지 어드민_{questionnaireData.title} 질문지 수정 (current version : {questionnaireData.version})
          </HeaderTypo>
        </HeaderContainer>
      </HeaderRoot>
      <ContentContainer>
        <QuestionnaireListButton onClick={onClickQuestionnaireListButton}>목록으로</QuestionnaireListButton>
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
        <QuestionnaireSubmitButton onClick={onClickQuestionnaireEditButton}>질문지 수정</QuestionnaireSubmitButton>
      </ContentContainer>
    </Root>
  )
}
