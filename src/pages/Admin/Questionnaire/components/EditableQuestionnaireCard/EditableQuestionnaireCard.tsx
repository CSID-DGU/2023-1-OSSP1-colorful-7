import { FC } from 'react'
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

type QuestionnaireType = 'SELECT' | 'RADIO' | 'SHORT_ANSWER'

type EditableQuestionnaireCardProps = {
  className?: string
  type: QuestionnaireType
}

export const EditableQuestionnaireCard: FC<EditableQuestionnaireCardProps> = ({ className, type }) => {
  return (
    <Root className={className}>
      <TypeSelectContainer>
        <ContentRadioContainer>
          <ContentRadio name={'questionnaire_type'} />
          <ContentRadioTypo>다중 선택</ContentRadioTypo>
        </ContentRadioContainer>
        <ContentRadioContainer>
          <ContentRadio name={'questionnaire_type'} />
          <ContentRadioTypo>단일 선택</ContentRadioTypo>
        </ContentRadioContainer>
        <ContentRadioContainer>
          <ContentRadio name={'questionnaire_type'} />
          <ContentRadioTypo>단답형</ContentRadioTypo>
        </ContentRadioContainer>
      </TypeSelectContainer>
      <TitleContainer>
        <ContentInput addonBefore={'제목'} />
      </TitleContainer>
      <AnswerContainer>
        <ContentInput addonBefore={'정답'} />
        <ContentInput type={'number'} addonBefore={'배점'} addonAfter={'점'} />
      </AnswerContainer>
      {type === 'SELECT' && (
        <QuestionContainer>
          <QuestionItemContainer>
            <ContentInput addonBefore={'질문 1'} />
            <QuestionItemDeleteButton>질문 삭제</QuestionItemDeleteButton>
          </QuestionItemContainer>
          <QuestionItemContainer>
            <ContentInput addonBefore={'질문 2'} />
            <QuestionItemDeleteButton>질문 삭제</QuestionItemDeleteButton>
          </QuestionItemContainer>
          <QuestionItemContainer>
            <ContentInput addonBefore={'질문 3'} />
            <QuestionItemDeleteButton>질문 삭제</QuestionItemDeleteButton>
          </QuestionItemContainer>
          <QuestionItemContainer>
            <ContentInput addonBefore={'질문 4'} />
            <QuestionItemDeleteButton>질문 삭제</QuestionItemDeleteButton>
          </QuestionItemContainer>
          <QuestionItemAddButton>질문 추가</QuestionItemAddButton>
        </QuestionContainer>
      )}
      {type === 'RADIO' && (
        <QuestionContainer>
          <QuestionItemContainer>
            <ContentInput addonBefore={'질문 1'} />
            <QuestionItemDeleteButton>질문 삭제</QuestionItemDeleteButton>
          </QuestionItemContainer>
          <QuestionItemContainer>
            <ContentInput addonBefore={'질문 2'} />
            <QuestionItemDeleteButton>질문 삭제</QuestionItemDeleteButton>
          </QuestionItemContainer>
          <QuestionItemContainer>
            <ContentInput addonBefore={'질문 3'} />
            <QuestionItemDeleteButton>질문 삭제</QuestionItemDeleteButton>
          </QuestionItemContainer>
          <QuestionItemContainer>
            <ContentInput addonBefore={'질문 4'} />
            <QuestionItemDeleteButton>질문 삭제</QuestionItemDeleteButton>
          </QuestionItemContainer>
          <QuestionItemAddButton>질문 추가</QuestionItemAddButton>
        </QuestionContainer>
      )}
      {type === 'SHORT_ANSWER' && (
        <QuestionContainer>
          <QuestionItemContainer>
            <ContentInput addonBefore={'질문'} />
          </QuestionItemContainer>
        </QuestionContainer>
      )}
    </Root>
  )
}
