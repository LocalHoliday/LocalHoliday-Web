import { Container, SubContainer, TextContainer, Button } from './HomeStyle'
import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import Image from 'next/image'
import { useRouter } from 'next/router'

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
                <div>
                  <h1>로컬홀리데이 추천</h1>
                  <h3>
                    로컬 홀리데이를 추천받고, 내 로컬 홀리데이도 기록할 수
                    있으며 다른 사람들의 로컬 홀리데이도 구경해 볼 수 있어요!
                  </h3>
                  <div style={{ padding: '30px' }} />
                  <Button onClick={onClick}>자세히보기</Button>
                </div>
              </TextContainer>
              <Image
                src="../assets/img/home3.svg"
                alt="home1"
                width={500}
                height={500}
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
                  <div style={{ padding: '30px' }} />
                  <Button onClick={onClick}>자세히보기</Button>
                </div>
              </TextContainer>
              <Image
                src="../assets/img/home3.svg"
                alt="home1"
                width={500}
                height={500}
              ></Image>
            </div>
          )}
        </SubContainer>
      </Container>
    </>
  )
}
