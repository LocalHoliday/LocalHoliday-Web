import BreadCrumb from '../Common/BreadCrumb'
import LocalHolidayBook from './LocalHolidayBook'
import { LocalHolidayRecommend } from './LocalHolidayRecommend'

export default function Recommend() {
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
      <LocalHolidayRecommend />
      <div className="pt-50" />
      <LocalHolidayBook />
    </>
  )
}
