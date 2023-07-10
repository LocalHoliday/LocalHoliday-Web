import { ITourRecomData } from '@/types/recommend'
import Image from 'next/image'
import RecommendTitle from '../Title/RecommendTitle'
import RecommendBody from '../Body'
import { COLORS } from '@/styles/colors'
import { useRouter } from 'next/router'
import Hashtag from '../../Hashtag'

interface RecommendBookProps {
  img: string
  title: string
  startTime: string
  endTime: string
  job: string
  tourList: ITourRecomData[]
}

export default function RecommendBook({
  img,
  title,
  startTime,
  endTime,
  job,
  tourList,
}: RecommendBookProps) {
  const router = useRouter()
  const onClick = () => {
    router.push(`/recommend/book/${title}`)
  }
  const date = `${startTime} ~ ${endTime}`

  return (
    <div className="col-lg-4">
      <div style={{ cursor: 'pointer' }} onClick={onClick}>
        <Image src={img} width={400} height={300} alt="로컬홀리데이북 조회" />
        <div className="pt-20" />
        <RecommendTitle title={title} />
        <div className="pt-10" />
        <div style={{ display: 'flex' }}>
          <RecommendBody
            label={date.concat(`${'\u00A0'}`)}
            colorType="grayScale"
          />
          <RecommendBody label="4박5일" colorType="mainColor" />
        </div>
        <div className="pt-10" />
        <Hashtag label={job} />
        <div className="pt-10" />
        <div>
          {tourList?.map((item) => (
            <div key={tourList.indexOf(item)}>
              <RecommendBody label={item.name} colorType="mainColor" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
