import { useRouter } from 'next/router'
import RecommendBookDetail from '../Common/RecommendTemplate/BookDetail/RecommendBookDetail'
import useGetBookDetail from '@/hooks/recommend/useGetBookDetail'

export default function LocalHolidayBookRecommendDetail() {
  const { query } = useRouter()
  const billId = query.billId
  const { data, isLoading } = useGetBookDetail(billId as string)

  return <></>
}
