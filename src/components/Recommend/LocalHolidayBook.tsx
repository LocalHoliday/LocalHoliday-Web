import styled from '@emotion/styled'
import RecommendBook from '../Common/RecommendTemplate/Book/RecommendBook'
import { useGetBookList } from '@/hooks/recommend/useGetBookList'
import { GetBookListRes } from '@/types/review'

interface LocalHolidayBookProps {
  bookList: GetBookListRes
}

export default function LocalHolidayBook({ bookList }: LocalHolidayBookProps) {
  return (
    <Container>
      <div>
        <Title>📷 다른 사람들의 로컬홀리데이를 구경해보세요</Title>

        <div className="pt-50" />
        <div className="row col-lg-12">
          <div className="col" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {bookList?.reviews?.map((item) => (
              <RecommendBook
                id={item.id}
                key={item.id}
                img={item.profile}
                title={item.title}
                content={item.content}
                billId={item.bill_id}
                userId={item.user_id}
              />
            ))}
          </div>
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
