import bannerBackgroundImg from 'assets/images/main/banner_background.png'
import { FC } from 'react'
import { BannerImg, Container, Root } from './styled'

type BannerSectionProps = {
  className?: string
}

export const BannerSection: FC<BannerSectionProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Container>
        <BannerImg src={bannerBackgroundImg} alt={'배너 배경 이미지'} />
      </Container>
    </Root>
  )
}
