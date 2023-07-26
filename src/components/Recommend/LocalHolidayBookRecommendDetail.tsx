import { useRouter } from 'next/router'
import RecommendBookDetail from '../Common/RecommendTemplate/BookDetail/RecommendBookDetail'
import useGetBookDetail from '@/hooks/recommend/useGetBookDetail'
import Spinner from '../Common/Spinner'
import { useParams } from 'next/navigation'

export default function LocalHolidayBookRecommendDetail() {
  const { query } = useRouter()
  console.log(query)
  const billId = query.id
  const { data: bookData, isLoading: bookLoading } = useGetBookDetail(
    billId as string,
  )

  return (
    <>
      {bookLoading ? (
        <Spinner />
      ) : bookData == null ? (
        <h1>준비중입니당</h1>
      ) : (
        <>
          <RecommendBookDetail
            title={bookData?.review.title as string}
            nickname={bookData?.review.nickname as string}
            profile={bookData.review.profile as string}
            playIds={bookData?.review.playIds as string[]}
            jobIds={bookData?.review.jobIds as string[]}
            content={bookData?.review.content as string}
          />
        </>
      )}
    </>
  )
}
