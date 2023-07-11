import RecommendBody from '../Body'

import Image from 'next/image'
import RecommendTitle from '../Title/RecommendTitle'
import RecommendDetailTitle from '../Title/RecommendDetailTitle'

interface CourseWorkDetailProps {
  img: string
  title: string
  location: string
  date: string
  pay: number
}

export default function CourseWorkDetail({
  img,
  title,
  location,
  date,
  pay,
}: CourseWorkDetailProps) {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Image
          src={img as string}
          width={300}
          height={300}
          alt="detail"
          priority
        />
        <div className="pr-20" />
        <div>
          <div className="pt-20" />
          <RecommendDetailTitle title={title} />
          <div className="pt-30" />
          <div style={{ display: 'flex' }}>
            <RecommendBody
              label={'장소'.concat('\u00A0')}
              colorType="mainColor"
            />
            <RecommendBody label={location} colorType="grayScale" />
          </div>
          <div className="pt-20"></div>
          <div style={{ display: 'flex' }}>
            <RecommendBody
              label={'작업기간'.concat('\u00A0')}
              colorType="mainColor"
            />
            <RecommendBody label={date} colorType="grayScale" />
          </div>
          <div className="pt-20"></div>
          <div style={{ display: 'flex' }}>
            <RecommendBody
              label={'시급'.concat('\u00A0')}
              colorType="mainColor"
            />
            <RecommendBody label={pay?.toString()} colorType="grayScale" />
          </div>
          <div className="pt-20"></div>
        </div>
      </div>
    </>
  )
}
