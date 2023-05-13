import { FC } from 'react'
import { QuestionDataType } from 'types/questionnaire'
import {
  AnswerContainer,
  ContentInput,
  ContentRadio,
  ContentRadioContainer,
  ContentRadioTypo,
  QuestionContainer,
  QuestionItemAddButton,
  QuestionItemContainer,
  QuestionItemDeleteButton,
  Root,
  TitleContainer,
  TypeSelectContainer,
} from './styled'

type EditableQuestionCardProps = {
  className?: string
  questionData: QuestionDataType
}

export const EditableQuestionCard: FC<EditableQuestionCardProps> = ({ className, questionData }) => {
  return (
    <Root className={className}>
      <TypeSelectContainer>
        <ContentRadioContainer>
          <ContentRadio name={'question_type'} checked={questionData.type === 'SELECT'} />
          <ContentRadioTypo>다중 선택</ContentRadioTypo>
        </ContentRadioContainer>
        <ContentRadioContainer>
          <ContentRadio name={'question_type'} checked={questionData.type === 'RADIO'} />
          <ContentRadioTypo>단일 선택</ContentRadioTypo>
        </ContentRadioContainer>
      </TypeSelectContainer>
      <TitleContainer>
        <ContentInput addonBefore={'제목'} value={questionData.title} />
      </TitleContainer>
      <AnswerContainer>
        <ContentInput addonBefore={'정답'} value={JSON.stringify(questionData.answerKeyList)} />
        <ContentInput type={'number'} addonBefore={'배점'} addonAfter={'점'} value={questionData.score} />
      </AnswerContainer>
      <QuestionContainer>
        {questionData.question.map((questionData) => (
          <QuestionItemContainer key={`question_${questionData.key}`}>
            <ContentInput addonBefore={'질문 1'} value={questionData.title} />
            <QuestionItemDeleteButton>질문 삭제</QuestionItemDeleteButton>
          </QuestionItemContainer>
        ))}
        <QuestionItemAddButton>질문 추가</QuestionItemAddButton>
      </QuestionContainer>
    </Root>
  )
}
