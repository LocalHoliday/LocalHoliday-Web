import { COLORS } from '@/styles/colors'
import styled from '@emotion/styled'
import Image from 'next/image'
import CoursePlayDetail from '../CourseDetail/CoursePlayDetail'
import { useState } from 'react'
import useGetPlayDetail from '@/hooks/search/useGetPlayDetail'
import { useEffect } from 'react'
import { GetPlayDetailRes, IPlayItem } from '@/types/play'
import { getPlayDetail } from '@/apis/getPlayDetail'
import { IJobDetail } from '@/types/job'
import { getJobDetail } from '@/apis/getJobDetail'
import CourseWorkDetail from '../CourseDetail/CourseWorkDetail'
import { useParams } from 'next/navigation'

interface RecommendBookDetailProps {
  title: string
  nickname: string
  profile: string
  content: string
  playIds: string[]
  jobIds: string[]
}

interface ColorProps {
  color: 'main' | 'gray'
}

export default function RecommendBookDetail({
  title,
  nickname,
  profile,
  content,
  playIds,
  jobIds,
}: RecommendBookDetailProps) {
  const params = useParams()
  console.log('params', params)
  const [playData, setPlayData] = useState<IPlayItem[]>([])
  const [jobData, setJobData] = useState<IJobDetail[]>([])

  useEffect(() => {
    playIds.map((item) => {
      const data = getPlayDetail(item)
      data.then((item) => {
        if (playData != undefined) {
          setPlayData([...playData, item.result])
        }
      })
    })
  }, [])

  useEffect(() => {
    jobIds.map((item) => {
      const data = getJobDetail(item)
      data.then((item) => {
        if (jobData != undefined) {
          setJobData([...jobData, item.job])
        }
      })
    })
  }, [])
  return (
    <>
      <Container>
        <SubContainer>
          <AuthorInfoField>
            <Title>{title}</Title>
            <Author>{nickname}</Author>
          </AuthorInfoField>
          <div className="pt-30"></div>
          <Image src={profile} width={500} height={500} alt="디테일" priority />
          <div className="pt-30"></div>
          <ContentContainer>{content}</ContentContainer>
          <div className="pt-100"></div>
          <div style={{ display: 'flex' }}>
            <Body color="main">{nickname}</Body>
            <Body color="gray"> 님의 로컬일자리</Body>
          </div>
          <div className="pt-50"></div>
          {jobData?.map((item) => (
            <CourseWorkDetail
              key={item.uuid}
              img={item.photo}
              title={item.name}
              location={item.addr}
              date={`${item.startTime.substring(
                0,
                10,
              )} ~ ${item.endTime.substring(0, 10)}`}
              pay={item.pay}
            />
          ))}
          <div className="pt-60"></div>
          <div style={{ display: 'flex' }}>
            <Body color="main">{nickname}</Body>
            <Body color="gray"> 님의 로컬놀거리</Body>
          </div>
          <div className="pt-50"></div>
          <div className="row col-lg-12">
            <div className="col-lg-12">
              {playData?.map((item) => (
                <CoursePlayDetail
                  key={item.uuid}
                  title={item.name}
                  location={item.addr}
                  img={item.photo}
                  phone={'010-1234-1234'}
                />
              ))}
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
