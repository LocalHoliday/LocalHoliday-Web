import styled from '@emotion/styled'
import { COLORS } from '@/styles/colors'

type category = 'recom' | 'search' | 'my' | 'area'

const backgroundColor: string[] = [
  `linear-gradient(
    275.61deg,
    #fcfcfc 0.27%,
    #c1fff8 24.15%,
    #d0ffe9 65.83%,
    #f3ffec 86.66%,
    #ffffff 97.84%
  )`,
  `linear-gradient(95.5deg, #FFE3E3 -0.01%, #FFF8F8 20.6%, #F4FFFF 59.8%, #E3FFFF 86.94%)`,
  `radial-gradient(71.69% 655.6% at 25.83% 43.5%, #F3FFF4 0%, #FDFFF8 50.52%, #FEF8FF 80.21%, #FCEEFF 100%) `,
  `linear-gradient(90deg, rgba(217, 255, 255, 0.5) 2.18%, rgba(210, 240, 240, 0.5) 49.39%, rgba(236, 249, 247, 0.5) 96.59%)`,
]

const breadImage: string[] = [
  '../assets/img/recom_bread.svg',
  '../assets/img/search_bread.svg',
  '../assets/img/my_bread.svg',
]

interface IBreadCrumbProps {
  colorIdx: number
  title: string
  subTitle: string

  breadImgIdx?: number
  areaImgIdx?: number
  isArea: boolean // 지역 이미지인지 아닌지 -> 얘만 breadcrumb 다름
}

export default function BreadCrumb({
  colorIdx,
  title,
  subTitle,
  breadImgIdx,
  areaImgIdx,
  isArea,
}: IBreadCrumbProps) {
  return (
    <>
      <Container color={backgroundColor[colorIdx]}>
        <div style={{ display: 'flex' }}>
          <div className=" ml-50 pt-50">
            <Title>{title}</Title>

            <SubTitle>{subTitle}</SubTitle>
          </div>
          {isArea ? null : (
            <div style={{ float: 'right' }}>
              <img
                src={breadImage[breadImgIdx as number]}
                width={300}
                height={300}
              />
            </div>
          )}
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  background: ${(props) => props.color};
`

const Title = styled.div`
  font-size: var(--font-H2);
  font-weight: var(--font-M);
`

const SubTitle = styled.div`
  font-size: var(--font-B1);
  font-weight: var(--font-M);
  color: ${COLORS.grayscale.gray500};
`
