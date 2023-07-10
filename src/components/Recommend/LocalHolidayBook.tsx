import styled from '@emotion/styled'
import { useGetRecommendList } from '@/hooks/recommend/useGetRecommendList'
import RecommendBook from '../Common/RecommendTemplate/Book/RecommendBook'

export default function LocalHolidayBook() {
  const { data: recommendList, isLoading } = useGetRecommendList()
  recommendList?.result.slice(0, 3).map((item) => {
    console.log(item)
  })

  return (
    <Container>
      <Title>📷 다른 사람들의 로컬홀리데이를 구경해보세요</Title>

      <div className="pt-50" />
      <div className="row col-lg-12">
        <div className="col" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {recommendList?.result.slice(0, 3).map((item) => (
            <RecommendBook
              key={item.uuid}
              img={item.photo}
              title={item.title}
              startTime={'2023.07.01'}
              endTime={'2023.07.08'}
              job={'알바'}
              tourList={item.tourList}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`
const Title = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-H5);
`
