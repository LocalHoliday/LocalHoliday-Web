import { useRouter } from 'next/router'
import RecommendBookDetail from '../Common/RecommendTemplate/BookDetail/RecommendBookDetail'

export default function LocalHolidayBookRecommendDetail() {
  const { query } = useRouter()
  const userId = query.userId
  const billId = query.billId

  return (
    <>
      <RecommendBookDetail />
    </>
  )
}
