import styled from '@emotion/styled'
import { ITourRecomData } from '@/types/recommend'
import Image from 'next/image'

interface ILocalHolidayRecommendItem {
  img: string
  title: string
  area: string
  tourList: ITourRecomData[]
  date?: string
}

export default function LocalHolidayRecommendItem({
  img,
  title,
  area,
  tourList,
  date,
}: ILocalHolidayRecommendItem) {
  console.log(tourList)
  return (
    <>
      <div className="col-lg-4">
        <Image src={img} width={400} height={300} alt="로컬홀리데이 추천" />
        <div className="pt-20" />
        <Title>{title}</Title>
        <div className="pt-10" />
        <Body>{area}</Body>
        <div className="pt-10" />

        <div style={{ display: 'flex' }}>
          {tourList?.map((item) => (
            <TourText key={tourList.indexOf(item)}>{item.name} &nbsp;</TourText>
          ))}
        </div>

        <Date>4박5일</Date>
      </div>
    </>
  )
}

const Title = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-H4);
`

const Body = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B1);
  color: var(--color-gray500);
`
const Date = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B1);
  color: var(--color-primary);
`
const TourText = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B2);
  color: var(--color-gray500);
`
