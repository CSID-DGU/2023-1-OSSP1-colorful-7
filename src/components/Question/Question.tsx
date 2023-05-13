import { FC } from 'react'
import { QuestionDataType } from 'types/questionnaire'
import {
  ContentCheckbox,
  ContentRadio,
  OptionContainer,
  OptionListContainer,
  OptionTypo,
  Root,
  ScoreTypo,
  TitleContainer,
  TitleTypo,
} from './styled'

type QuestionProps = {
  className?: string
  questionData: QuestionDataType
  questionAnswerData: number[]
  // eslint-disable-next-line no-unused-vars
  onChangeQuestionAnswerSheet: (optionKey: number) => () => void
}

export const Question: FC<QuestionProps> = ({
  className,
  questionData,
  questionAnswerData,
  onChangeQuestionAnswerSheet,
}) => {
  return (
    <Root className={className}>
      <TitleContainer>
        <TitleTypo>{questionData.title}</TitleTypo>
        <ScoreTypo>({questionData.score}점)</ScoreTypo>
      </TitleContainer>
      <OptionListContainer>
        {questionData.optionListData.map((optionItemData) => (
          <OptionContainer key={`option_item_${optionItemData.key}`}>
            {questionData.type === 'SELECT' && (
              <ContentCheckbox
                onChange={onChangeQuestionAnswerSheet(optionItemData.key)}
                checked={questionAnswerData.includes(optionItemData.key)}
              />
            )}
            {questionData.type === 'RADIO' && (
              <ContentRadio
                onChange={onChangeQuestionAnswerSheet(optionItemData.key)}
                checked={questionAnswerData.includes(optionItemData.key)}
              />
            )}
            <OptionTypo>{optionItemData.title}</OptionTypo>
          </OptionContainer>
        ))}
      </OptionListContainer>
    </Root>
  )
}
