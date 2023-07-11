import { COLORS } from '@/styles/colors'
import styled from '@emotion/styled'
import Image from 'next/image'
import CoursePlayDetail from '../CourseDetail/CoursePlayDetail'
import { useState } from 'react'

interface RecommendBookDetailProps {
  title: string
  author: string
  img: string
  content: string
  houseId: string
  foodId: string
  tourId: string
  jobId: string
}

interface ColorProps {
  color: 'main' | 'gray'
}

export default function RecommendBookDetail({
  title,
  author,
  img,
  content,
  houseId,
  tourId,
  jobId,
}: RecommendBookDetailProps) {
  const [playData, setPlayData] = useState('')
  const [jodData, setJobData] = useState('')
  return (
    <>
      <Container>
        <SubContainer>
          <AuthorInfoField>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </AuthorInfoField>
          <div className="pt-30"></div>
          <Image src={img} width={500} height={500} alt="디테일" priority />
          <div className="pt-30"></div>
          <ContentContainer>{content}</ContentContainer>
          <div className="pt-100"></div>
          <div style={{ display: 'flex' }}>
            <Body color="main">{author}</Body>
            <Body color="gray"> 님의 로컬일자리</Body>
          </div>
          <div className="pt-50"></div>
          {}
          <div className="pt-60"></div>
          <div style={{ display: 'flex' }}>
            <Body color="main">{author}</Body>
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
