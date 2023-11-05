import { GetBookListRes } from '@/types/bill'
import BreadCrumb from '../Common/BreadCrumb'
import Spinner from '../Common/Spinner'
import LocalHolidayBook from './LocalHolidayBook'
import { LocalHolidayRecommend } from './LocalHolidayRecommend'
import { useGetBookList } from '@/hooks/recommend/useGetBookList'
import { useGetRecommendList } from '@/hooks/recommend/useGetRecommendList'
import { GetRecommendListRes } from '@/types/recommend'
export default function Recommend() {
  const { data: bookList, isLoading: bookLoading } = useGetBookList()
  const { data: recommendList, isLoading: recommendLoading } =
    useGetRecommendList()
  console.log(recommendList)
  console.log(bookList)
  return (
    <>
      <BreadCrumb
        title={'로컬 홀리데이 추천'}
        subTitle={
          '나에게 맞는 로컬홀리데이 코스와 다른 사람들의 로컬홀리데이를 구경해보세요.'
        }
        colorIdx={0}
        breadImgIdx={0}
        isArea={false}
      />
      <>
        <LocalHolidayRecommend
          recommendList={recommendList as GetRecommendListRes}
        />
        <div className="pt-50"></div>
        <LocalHolidayBook bookList={bookList as GetBookListRes} />
      </>
      <div className="pt-100"></div>
    </>
  )
}
