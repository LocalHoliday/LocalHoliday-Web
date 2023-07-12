import Image from 'next/image'
import * as styles from './SearchItem.style'
import { useRouter } from 'next/router'

export interface SearchItemProps {
  id: string
  isWork: boolean
  name: string
  location: string
  photo: string
  workDate?: string
  workPay?: number
  area?: string
  lon?: string
  lat?: string
  info?: string
  hostPhone?: string
}
export default function SearchItem({
  id,
  isWork,
  name,
  location,
  photo,
  workDate,
  workPay,
  area,
}: SearchItemProps) {
  const router = useRouter()
  const onJobClick = () => {
    console.log(id)
    console.log(name)
    router.push(
      {
        pathname: `/search/detail/${id}`,
        query: {
          uuid: id,
          isJob: true,
          area: area,
        },
      },
      `/search/detail/${id}`,
    )
  }
  const onPlayClick = () => {
    console.log('놀거리')
    router.push(
      {
        pathname: `/search/detail/${id}`,
        query: {
          name: name,
          uuid: id,
          isJob: false,
        },
      },
      `/search/detail/${id}`,
    )
  }
  return (
    <>
      {isWork ? (
        <div
          className="col-lg-4"
          style={{ padding: '30px' }}
          onClick={onJobClick}
        >
          <Image src={photo} width={350} height={350} alt="지역별" priority />
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
          <div
            className="col-lg-4"
            style={{ padding: '30px' }}
            onClick={onPlayClick}
          >
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
