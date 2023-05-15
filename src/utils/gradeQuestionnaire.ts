import { QuestionAnswerSheetListType, QuestionnaireItemType } from 'types/questionnaire'

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
  questionnaireItem: QuestionnaireItemType,
  answerSheetData: QuestionAnswerSheetListType
) => {
  let grade = 0
  questionnaireItem.questionList.forEach((questionItem) => {
    if (
      compareNumberArrayAnswerAndStringAnswer(
        answerSheetData.filter((value) => value.questionKey === questionItem.key)[0].answer,
        questionItem.answer
      )
    ) {
      grade += +questionItem.score
    }
  })
  return grade
}
