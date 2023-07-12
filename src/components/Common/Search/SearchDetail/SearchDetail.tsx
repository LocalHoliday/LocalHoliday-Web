import Image from 'next/image'
import { SearchItemProps } from '../SearchItem/SearchItem'
import * as styles from './SearchDetail.style'
import ScheduleButton from '../../Button/ScheduleButton/ScheduleButton'

export default function SearchDetail({
  isWork,
  name,
  location,
  photo,
  workDate,
  workPay,
  lon,
  lat,
  info,
}: SearchItemProps) {
  console.log(name)
  console.log(isWork)
  return (
    <>
      {isWork ? (
        <>
          <div style={{ display: 'flex' }}>
            <div>
              <Image src={photo} width={550} height={550} alt="상세이미지" />
            </div>
            <div>
              <div className="pt-30"></div>
              <styles.Title>{name}</styles.Title>
              <div className="pt-50"></div>
              <div style={{ display: 'flex' }}>
                <styles.CategoryTitle>위치</styles.CategoryTitle>
                <div className="pt-30"></div>
                <styles.Body>{location}</styles.Body>
              </div>
              <div style={{ display: 'flex' }}>
                <styles.CategoryTitle>위치</styles.CategoryTitle>
                <div className="pt-30"></div>
                <styles.Body>{location}</styles.Body>
              </div>
              <div style={{ display: 'flex' }}>
                <styles.CategoryTitle>작업기간</styles.CategoryTitle>
                <div className="pt-30"></div>
                <styles.Body>{workDate}</styles.Body>
              </div>
              <div style={{ display: 'flex' }}>
                <styles.CategoryTitle>급여</styles.CategoryTitle>
                <div className="pt-30"></div>
                <styles.Body>{workPay}</styles.Body>
              </div>
              <ScheduleButton />
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'flex' }}>
            <div>
              <Image src={photo} width={550} height={550} alt="상세이미지" />
            </div>
            <div style={{ padding: '50px' }}>
              <div className="pt-30"></div>
              <styles.Title>{name}</styles.Title>
              <div className="pt-50"></div>
              <div style={{ display: 'flex' }}>
                <styles.CategoryTitle>위치</styles.CategoryTitle>
                <div className="pl-30"></div>
                <styles.Body>{location}</styles.Body>
              </div>
              <div className="pt-20"></div>
              <div style={{ display: 'flex' }}>
                <styles.CategoryTitle>상세정보</styles.CategoryTitle>
                <div className="pl-30"></div>
                <styles.Body>{info}</styles.Body>
              </div>
              <div className="pt-20"></div>
              <ScheduleButton />
            </div>
          </div>
        </>
      )}
    </>
  )
}
