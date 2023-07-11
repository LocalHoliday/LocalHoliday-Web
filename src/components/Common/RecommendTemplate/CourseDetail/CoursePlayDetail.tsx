import RecommendBody from '../Body'
import RecommendTitle from '../Title/RecommendTitle'
import Image from 'next/image'
interface CoursePlayDetailProps {
  img: string
  title: string
  location: string
  phone: string
}

export default function CoursePlayDetail({
  img,
  title,
  location,
  phone,
}: CoursePlayDetailProps) {
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
          <RecommendTitle title={title} />
          <div className="pt-20" />
          <div>
            <div style={{ display: 'flex' }}>
              <RecommendBody
                label={'장소'.concat('\u00A0')}
                colorType="mainColor"
              />
              <RecommendBody label={location} colorType="grayScale" />
            </div>
            <div className="pt-20" />
            <div style={{ display: 'flex' }}>
              <RecommendBody
                label={'전화번호 '.concat('\u00A0')}
                colorType="mainColor"
              />
              <RecommendBody label={phone} colorType="grayScale" />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-100" />
    </>
  )
}
