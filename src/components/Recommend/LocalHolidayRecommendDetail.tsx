import BreadCrumb from '../Common/BreadCrumb'
import { useRouter } from 'next/router'
import { useGetRecommendList } from '@/hooks/recommend/useGetRecommendList'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import RecommendBodyDetail from '../Common/RecommendTemplate/Body/RecommendBodyDetail'
import { IMainRecomData } from '@/types/recommend'
import { COLORS } from '@/styles/colors'
import CourseWorkDetail from '../Common/RecommendTemplate/CourseDetail/CourseWorkDetail'
import RecommendBody from '../Common/RecommendTemplate/Body'
import CoursePlayDetail from '../Common/RecommendTemplate/CourseDetail/CoursePlayDetail'

export default function LocalHolidayRecommendDetail() {
  const { query } = useRouter()
  const recommendId = query.courseId

  const { data: recommendList, isLoading } = useGetRecommendList()
  const [detailData, setDetailData] = useState<IMainRecomData>()
  useEffect(() => {
    recommendList?.result.filter((item) => {
      if (item.uuid === recommendId) {
        setDetailData(item)
      }
    })
  }, [isLoading])
  const jobDate = `${detailData?.jobDTO?.startTime.substring(
    0,
    10,
  )} ~ ${detailData?.jobDTO?.endTime.substring(0, 10)}`

  console.log(detailData)
  return (
    <>
      {isLoading || detailData === undefined ? (
        <h1>null</h1>
      ) : (
        <Container>
          <div className="pt-50"></div>
          <SubContainer>
            <Image
              src={detailData?.photo as string}
              width={900}
              height={600}
              alt="로컬홀리데이 추천 상세"
              className="center-image"
            />
            <div className="pt-50"></div>
            <div
              style={{
                marginRight: 'auto',
              }}
            >
              <TitleText>{detailData?.title as string}</TitleText>
            </div>
            <div className="pt-20"></div>

            <RecommendBody label={detailData?.location} colorType="grayScale" />
            <RecommendBodyDetail label="4박5일" colorType="mainColor" />
            <div className="pt-60"></div>
            <div style={{ display: 'flex' }}>
              <AccentText>{detailData?.location.substring(0, 3)}</AccentText>
              <RecomText>에 딱맞는 로컬 일거리를 추천드려요!</RecomText>
            </div>
            <div className="pt-50"></div>
            <CourseWorkDetail
              img={detailData?.jobDTO.photo as string}
              title={detailData?.jobDTO?.name as string}
              location={detailData?.jobDTO?.addr as string}
              date={jobDate}
              pay={detailData?.jobDTO?.pay as number}
            />

            <div className="pt-100"></div>
            <div style={{ display: 'flex' }}>
              <AccentText>{detailData?.location.substring(0, 3)}</AccentText>
              <RecomText>에 딱맞는 로컬 놀거리를 추천드려요!</RecomText>
            </div>
            <div className="pt-50"></div>
            <div className="row col-lg-12">
              <div
                className="col"
                style={{ display: 'flex', flexWrap: 'wrap' }}
              >
                {detailData?.tourList.map((item) => (
                  <CoursePlayDetail
                    key={item.uuid}
                    img={item.photo}
                    title={item.name}
                    location={item.addr}
                    phone="010-1234-1234"
                  />
                ))}
              </div>
            </div>
          </SubContainer>
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

const RecomText = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-SB);
  font-size: var(--font-H4);
`
const AccentText = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-SB);
  font-size: var(--font-H4);
  color: ${COLORS.mainColor.primary};
`

const TitleText = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-SB);
  font-size: var(--font-H3);
`
