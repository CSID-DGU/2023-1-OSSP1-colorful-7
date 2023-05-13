import questionnaireSampleJson from 'constants/json/questionnaire_sample.json'
import { FC } from 'react'
import { QuestionnaireDataType } from 'types/questionnaire'
import { camelizeKey } from 'utils/camelizeKey'
import { EditableQuestionCard } from './components/EditableQuestionCard'
import { ContentContainer, HeaderContainer, HeaderRoot, HeaderTypo, Root } from './styled'

type AdminQuestionnairePageProps = {
  className?: string
}

export const AdminQuestionnairePage: FC<AdminQuestionnairePageProps> = ({ className }) => {
  const questionnaireSample: QuestionnaireDataType = camelizeKey(questionnaireSampleJson) as QuestionnaireDataType

  return (
    <Root className={className}>
      <HeaderRoot>
        <HeaderContainer>
          <HeaderTypo>질문지 어드민</HeaderTypo>
        </HeaderContainer>
      </HeaderRoot>
      <ContentContainer>
        {questionnaireSample.questionListData.map((questionData) => (
          <EditableQuestionCard questionData={questionData} key={`question_${questionData.key}`} />
        ))}
      </ContentContainer>
    </Root>
  )
}
