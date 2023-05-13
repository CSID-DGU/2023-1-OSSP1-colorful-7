import { Question } from 'components/Question/Question'
import questionnaireListSampleJson from 'constants/json/questionnaire_list_sample.json'
import questionnaireSampleJson from 'constants/json/questionnaire_sample.json'
import { getDevelopmentKeyByString } from 'constants/project/developmentStack'
import { FC, useEffect, useState } from 'react'
import { DevelopmentStackType } from 'types/project'
import {
  QuestionAnswerSheetListType,
  QuestionnaireDataType,
  QuestionnaireListDataType,
  QuestionType,
} from 'types/questionnaire'
import { camelizeKey } from 'utils/camelizeKey'
import { QuestionContainer, Root, SubmitButton } from './styled'

type QuestionnaireModalProps = {
  className?: string
  open: boolean
  developmentStack: DevelopmentStackType
  onCloseModal: () => void
}

export const QuestionnaireModal: FC<QuestionnaireModalProps> = ({
  className,
  open,
  developmentStack,
  onCloseModal,
}) => {
  // eslint-disable-next-line no-undef
  const localStorageQuestionnaireListData = localStorage.getItem('questionnaire_list_sample')
  const questionnaireListData: QuestionnaireListDataType = localStorageQuestionnaireListData
    ? (camelizeKey(JSON.parse(localStorageQuestionnaireListData)) as QuestionnaireListDataType)
    : (camelizeKey(questionnaireListSampleJson) as QuestionnaireListDataType)

  const questionnaireKey = getDevelopmentKeyByString(developmentStack)

  const [questionnaireData] = useState<QuestionnaireDataType>(
    (questionnaireListData.questionnaireListData.filter(
      (questionnaireItemData) => questionnaireItemData.key === questionnaireKey
    )[0] as QuestionnaireDataType) ?? (camelizeKey(questionnaireSampleJson) as QuestionnaireDataType)
  )
  const [questionAnswerSheetListData, setQuestionAnswerSheetListData] = useState<QuestionAnswerSheetListType>()

  const onChangeQuestionAnswerSheet =
    (questionKey: number, questionType: QuestionType) => (optionKey: number) => () => {
      setQuestionAnswerSheetListData((prev) => {
        if (prev) {
          let newAnswer = prev?.filter((value) => value.questionKey === questionKey)[0].answer
          if (newAnswer) {
            if (questionType === 'RADIO') {
              newAnswer = [optionKey]
              return prev.map((value) => (value.questionKey === questionKey ? { ...value, answer: newAnswer } : value))
            }
            if (questionType === 'SELECT') {
              if (newAnswer.includes(optionKey)) {
                newAnswer = newAnswer.filter((value) => value !== optionKey)
              } else {
                newAnswer = newAnswer.concat(optionKey)
              }
              return prev.map((value) => (value.questionKey === questionKey ? { ...value, answer: newAnswer } : value))
            }
          }
        }
        return prev
      })
    }

  useEffect(() => {
    setQuestionAnswerSheetListData(
      questionnaireData.questionListData.map((questionItemData) => ({ questionKey: questionItemData.key, answer: [] }))
    )
  }, [open])

  return (
    <Root
      className={className}
      title={`퀴즈 질문지(${questionnaireData.title} version: ${questionnaireData.version})`}
      open={open}
      onCancel={onCloseModal}
      footer={<SubmitButton type="primary">제출하기</SubmitButton>}
    >
      <QuestionContainer>
        {questionAnswerSheetListData &&
          questionnaireData.questionListData.map((questionItemData, index) => (
            <Question
              questionData={questionItemData}
              questionAnswerData={questionAnswerSheetListData[index].answer}
              onChangeQuestionAnswerSheet={onChangeQuestionAnswerSheet(questionItemData.key, questionItemData.type)}
              key={`question_${questionItemData.key}`}
            />
          ))}
      </QuestionContainer>
    </Root>
  )
}
