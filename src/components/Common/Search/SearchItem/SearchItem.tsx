import Image from 'next/image'
import * as styles from './SearchItem.style'

interface SearchItemProps {
  isWork: boolean
  name: string
  location: string
  photo: string
  workDate?: string
  workPay?: number
}
export default function SearchItem({
  isWork,
  name,
  location,
  photo,
  workDate,
  workPay,
}: SearchItemProps) {
  return (
    <>
      {isWork ? (
        <div className="col-lg-4" style={{ padding: '30px' }}>
          <Image src={photo} width={350} height={350} alt="지역별" />
          <div className="pt-30"></div>
          <styles.Title>{name}</styles.Title>
          <div className="pt-30"></div>
          <div style={{ display: 'flex' }}>
            <styles.CategoryBox>위치</styles.CategoryBox>
            <div className="pl-20"></div>
            <styles.Body>{location}</styles.Body>
          </div>
          <div className="pt-30"></div>
          <div style={{ display: 'flex' }}>
            <styles.CategoryBox>작업기간</styles.CategoryBox>
            <div className="pl-20"></div>
            <styles.Body>{workDate}</styles.Body>
          </div>
          <div className="pt-30"></div>
          <div style={{ display: 'flex' }}>
            <styles.CategoryBox>급여</styles.CategoryBox>
            <div className="pl-20"></div>
            <styles.Body>{workPay}</styles.Body>
          </div>
        </div>
      ) : (
        <>
          <div className="col-lg-4" style={{ padding: '30px' }}>
            <Image src={photo} width={350} height={350} alt="지역별" />
            <div className="pt-30"></div>
            <styles.Title>{name}</styles.Title>
            <div className="pt-30"></div>
            <div style={{ display: 'flex' }}>
              <styles.CategoryBox>위치</styles.CategoryBox>
              <div className="pl-20"></div>
              <styles.Body>{location}</styles.Body>
            </div>
          </div>
        </>
      )}
    </>
  )
}
