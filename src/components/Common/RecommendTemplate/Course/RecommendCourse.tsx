import { ITourRecomData } from '@/types/recommend'
import Image from 'next/image'
import RecommendTitle from '../Title/RecommendTitle'
import RecommendBody from '../Body'
import { COLORS } from '@/styles/colors'
import { useRouter } from 'next/router'

interface ICourseItem {
  img: string
  title: string
  area: string
  tourList: ITourRecomData[]
  date?: string
}

export default function RecommendCourse({
  img,
  title,
  area,
  tourList,
  date,
}: ICourseItem) {
  const router = useRouter()
  const onClick = () => {
    router.push(`/recommend/course/${title}`)
  }
  return (
    <div className="col-lg-4">
      <div style={{ cursor: 'pointer' }} onClick={onClick}>
        <Image src={img} width={400} height={300} alt="로컬홀리데이 추천" />
        <div className="pt-20" />
        <RecommendTitle title={title} />
        <div className="pt-10" />
        <RecommendBody label={area} colorType="grayScale" />
        <div className="pt-10" />

        <div style={{ display: 'flex' }}>
          {tourList?.map((item) => (
            <div key={tourList.indexOf(item)}>
              <RecommendBody
                label={item.name.concat(`${'\u00A0'}`)}
                colorType="grayScale"
              />
            </div>
          ))}
        </div>
        <div className="pt-10" />
        <RecommendBody label="4박5일" colorType="mainColor" />
      </div>
    </div>
  )
}
