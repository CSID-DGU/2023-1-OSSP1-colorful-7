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
  title: string
  version: string
  questionnaireType: string
  questionListData: QuestionDataType[]
}
