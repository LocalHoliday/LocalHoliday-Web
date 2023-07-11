import { COLORS } from '@/styles/colors'
import styled from '@emotion/styled'
import Image from 'next/image'
import CourseWorkDetail from '../CourseDetail/CourseWorkDetail'
import CoursePlayDetail from '../CourseDetail/CoursePlayDetail'
interface RecommendBookDetailProps {
  title: string
  author: string
  img: string
  content: string
}

interface ColorProps {
  color: 'main' | 'gray'
}

export default function RecommendBookDetail() {
  return (
    <>
      <Container>
        <SubContainer>
          <AuthorInfoField>
            <Title>전주에서의 로컬 홀리몰리</Title>
            <Author>블랑사랑에디</Author>
          </AuthorInfoField>
          <div className="pt-30"></div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1672855635926-c0c4c0483bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80"
            width={500}
            height={500}
            alt="디테일"
            priority
          />
          <div className="pt-30"></div>
          <ContentContainer>
            생일을 맞아서 친구들과 함께 로컬 홀리데이로 전주에 갔다. 블루베리
            농장은 너무 힘들었지만 밥도 맛있고 한옥마을도 너무 예뻐서 완벽한
            여행이였다!
          </ContentContainer>
          <div className="pt-100"></div>
          <div style={{ display: 'flex' }}>
            <Body color="main">블랑사랑에디</Body>
            <Body color="gray"> 님의 로컬일자리</Body>
          </div>
          <div className="pt-50"></div>
          <CourseWorkDetail
            img=""
            title="죵나 힘들다"
            location="서울시"
            date="ddd"
            pay={12000}
          />
          <div className="pt-60"></div>
          <div style={{ display: 'flex' }}>
            <Body color="main">블랑사랑에디</Body>
            <Body color="gray"> 님의 로컬놀거리</Body>
          </div>
          <div className="pt-50"></div>
          <div className="row col-lg-12">
            <div className="col-lg-12">
              <CoursePlayDetail
                img=""
                title="죵나 힘들다"
                location="서울시"
                phone="010-1234-1234"
              />
              <CoursePlayDetail
                img=""
                title="죵나 힘들다"
                location="서울시"
                phone="010-1234-1234"
              />
            </div>
          </div>
        </SubContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const SubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
const Title = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-SB);
  font-size: var(--font-H2);
`

const Author = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B1);
`
const AuthorInfoField = styled.div`
  text-align: left;
`

const ContentContainer = styled.div`
  width: 500px;
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B2);
`
const Body = styled.div<ColorProps>`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-H4);
  color: ${(props) =>
    props.color == 'main' ? COLORS.mainColor.primary : COLORS.grayscale.black};
`
