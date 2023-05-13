export type QuestionType = 'RADIO' | 'SELECT'

export type QuestionDataType = {
  key: number
  type: QuestionType
  title: string
  answer: string
  score: number
  optionListData: {
    key: number
    title: string
  }[]
}

export type QuestionnaireDataType = {
  key: number
  title: string
  version: number
  questionnaireType: string
  questionListData: QuestionDataType[]
}

export type QuestionnaireListDataType = {
  questionnaireListData: QuestionnaireDataType[]
}

export type QuestionAnswerSheetType = {
  questionKey: number
  answer: number[]
}

export type QuestionAnswerSheetListType = QuestionAnswerSheetType[]

export type QuestionnaireAnswerSheetType = {
  questionnaireKey: number
  questionAnswerSheetList: QuestionAnswerSheetType[]
}
