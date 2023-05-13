export type QuestionType = 'RADIO' | 'SELECT'

export type QuestionDataType = {
  key: number
  type: QuestionType
  title: string
  answerKeyList: number[]
  score: number
  question: {
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
