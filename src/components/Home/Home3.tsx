import { SubContainer, TextContainer, Button } from './HomeStyle'
import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { media } from '@/styles/media'
export default function Home3() {
  const router = useRouter()
  const isMobile = useResponsiveMobile()

  const onClick = () => {
    router.push('/recommend')
  }
  return (
    <>
      <Container>
        <SubContainer>
          {isMobile ? (
            <div>
              <TextContainer>
                <div style={{ display: 'flex' }}>
                  <div>
                    <h1>로컬홀리데이 추천</h1>
                    <h3 style={{ width: '15rem' }}>
                      로컬 홀리데이를 추천받고, 내 로컬 홀리데이도 기록할 수
                      있으며 다른 사람들의 로컬 홀리데이도 구경해 볼 수 있어요!
                    </h3>
                    <div className="pt-20"></div>
                  </div>
                  <div className="pt-10"></div>
                  <Button onClick={onClick}>자세히보기</Button>
                </div>
              </TextContainer>
              <Image
                src="../assets/img/home3.svg"
                alt="home1"
                width={500}
                height={500}
                priority
              ></Image>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <TextContainer>
                <div>
                  <h1>로컬홀리데이 추천</h1>
                  <h3>
                    로컬 홀리데이를 추천받고, 내 로컬 홀리데이도 기록할 수
                    있으며 다른 사람들의 로컬 홀리데이도 구경해 볼 수 있어요!
                  </h3>
                  <div className="pt-30"></div>
                  <Button onClick={onClick}>자세히보기</Button>
                </div>
              </TextContainer>
              <Image
                src="../assets/img/home3.svg"
                alt="home1"
                width={500}
                height={500}
                priority
              ></Image>
            </div>
          )}
        </SubContainer>
      </Container>
    </>
  )
}
export const Container = styled.div`
  height: auto;
  opacity: 1;
  transform: none;
  width: 100%;
  position: relative;
  background-image: linear-gradient(
    283.51deg,
    #c9fff8 0%,
    #d8effc 49.34%,
    #ebfaff 94.82%
  );
  min-height: 35rem;

  ${media.mobile} {
    min-height: 20rem;
  }
`
