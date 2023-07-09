import { Container, SubContainer, TextContainer } from './HomeStyle'
import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import Image from 'next/image'

export default function Home4() {
  const isMobile = useResponsiveMobile()
  return (
    <>
      <Container>
        <SubContainer>
          {isMobile ? (
            <div>
              <TextContainer>
                <div>
                  <h1>지금 바로 로컬 홀리데이를 즐겨보세요!</h1>
                  <h3>모바일 환경에서도 로컬홀리데이를 즐겨보세요.</h3>
                </div>
              </TextContainer>
              <div style={{ display: 'flex' }}>
                <Image
                  src="../assets/img/home4.svg"
                  alt="home1"
                  width={600}
                  height={400}
                ></Image>
                <img
                  src="../assets/img/home4_2.svg"
                  alt="home4_2"
                  style={{ width: '100px' }}
                ></img>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <TextContainer>
                <div>
                  <h1>지금 바로 로컬 홀리데이를 즐겨보세요!</h1>
                  <h3>모바일 환경에서도 로컬홀리데이를 즐겨보세요.</h3>

                  <Image
                    src="../assets/img/home4_2.svg"
                    alt="home1"
                    width={150}
                    height={150}
                  ></Image>
                </div>
              </TextContainer>

              <Image
                src="../assets/img/home4.svg"
                alt="home1"
                width={600}
                height={500}
              ></Image>
            </div>
          )}
        </SubContainer>
      </Container>
    </>
  )
}
