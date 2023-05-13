import { QuestionAnswerSheetListType, QuestionnaireDataType } from 'types/questionnaire'

const compareNumberArrayAnswerAndStringAnswer = (numberArrayAnswer: number[], stringAnswer: string) => {
  let washedStringAnswer = stringAnswer.replaceAll(' ', '')
  let washedNumberArrayAnswer = numberArrayAnswer
    .sort()
    .toString()
    .replaceAll(' ', '')
    .replace('[', '')
    .replace(']', '')
  return washedNumberArrayAnswer === washedStringAnswer
}

export const gradeQuestionnaire = (
  questionnaireData: QuestionnaireDataType,
  answerSheetData: QuestionAnswerSheetListType
) => {
  let grade = 0
  questionnaireData.questionListData.forEach((questionData) => {
    if (
      compareNumberArrayAnswerAndStringAnswer(
        answerSheetData.filter((value) => value.questionKey === questionData.key)[0].answer,
        questionData.answer
      )
    ) {
      grade += questionData.score
    }
  })
  return grade
}
