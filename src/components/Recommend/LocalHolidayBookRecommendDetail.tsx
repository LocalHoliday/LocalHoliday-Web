import { useRouter } from 'next/router'
import RecommendBookDetail from '../Common/RecommendTemplate/BookDetail/RecommendBookDetail'
import useGetBookDetail from '@/hooks/recommend/useGetBookDetail'
import Spinner from '../Common/Spinner'

export default function LocalHolidayBookRecommendDetail() {
  const { query } = useRouter()
  const billId = query.billId
  const { data, isLoading } = useGetBookDetail(billId as string)
  console.log(data)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : data == null ? (
        <h1>준비중입니당</h1>
      ) : (
        <>
          <RecommendBookDetail
            title={data?.review.title as string}
            author={data?.review.nickname as string}
            playIds={data?.review.playIds as string[]}
            jobIds={data?.review.jobIds as string[]}
            img={data?.review.photo as string}
            content={data?.review.content as string}
          />
        </>
      )}
    </>
  )
}
