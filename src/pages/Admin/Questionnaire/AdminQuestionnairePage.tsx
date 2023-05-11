import { FC } from 'react'
import { EditableQuestionnaireCard } from './components/EditableQuestionnaireCard'
import { ContentContainer, HeaderContainer, HeaderRoot, HeaderTypo, Root } from './styled'

type AdminQuestionnairePageProps = {
  className?: string
}

export const AdminQuestionnairePage: FC<AdminQuestionnairePageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <HeaderRoot>
        <HeaderContainer>
          <HeaderTypo>질문지 어드민</HeaderTypo>
        </HeaderContainer>
      </HeaderRoot>
      <ContentContainer>
        <EditableQuestionnaireCard type={'SELECT'} />
        <EditableQuestionnaireCard type={'RADIO'} />
        <EditableQuestionnaireCard type={'SHORT_ANSWER'} />
      </ContentContainer>
    </Root>
  )
}
