import { SubContainer, TextContainer } from './HomeStyle'
import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import Image from 'next/image'
import styled from '@emotion/styled'
import { media } from '@/styles/media'

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

export const Container = styled.div`
  height: auto;
  opacity: 1;
  transform: none;
  width: 100%;
  position: relative;
  background-image: radial-gradient(
    111.44% 424.44% at 105.62% 87.63%,
    #c8fff8 0%,
    #f0ffff 22.4%,
    #fcf7ff 54.79%,
    #eff5ff 78.65%,
    #e1ecff 100%
  );
  min-height: 35rem;

  ${media.mobile} {
    min-height: 20rem;
  }
`
