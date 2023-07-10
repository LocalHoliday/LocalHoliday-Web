import { useGetRecommendList } from '@/hooks/recommend/useGetRecommendList'
import styled from '@emotion/styled'
import RecommendCourse from '../Common/RecommendTemplate/Course'

export function LocalHolidayRecommend() {
  const { data: recommendList, isLoading } = useGetRecommendList()

  return (
    <Container>
      {isLoading ? null : (
        <>
          <div className=" ml-50 pt-50"></div>
          <Title>
            🏖 이번 여름에 딱 맞는 로컬홀리데이 코스를 추천해드릴게요
          </Title>
          <div className="pt-50" />
          <div className="row col-lg-12">
            <div className="col" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {recommendList?.result.slice(0, 3).map((item) => (
                <RecommendCourse
                  key={item.uuid}
                  courseId={item.uuid}
                  img={item.photo}
                  title={item.title}
                  area={item.location}
                  tourList={item.tourList}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </Container>
  )
}
const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`
const Title = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-H5);
`
