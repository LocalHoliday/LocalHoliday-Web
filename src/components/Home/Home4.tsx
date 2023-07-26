import { SubContainer, TextContainer } from './HomeStyle'
import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import Image from 'next/image'
import styled from '@emotion/styled'
import { media } from '@/styles/media'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import useIntersectionObsever from '@/hooks/useIntersectionObserver'

export default function Home4() {
  const router = useRouter()
  const isMobile = useResponsiveMobile()
  const ref = useRef<HTMLDivElement>(null)
  const isInViewport = useIntersectionObsever(ref)
  const onClick = () => {
    router.push(
      'https://apps.apple.com/kr/app/%EB%A1%9C%EC%BB%AC-%ED%99%80%EB%A6%AC%EB%8D%B0%EC%9D%B4/id6450975088',
    )
  }
  return (
    <>
      <Container ref={ref} className={isInViewport ? 'animation' : ''}>
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

                  <div onClick={onClick}>
                    <Image
                      src="../assets/img/home4_2.svg"
                      alt="home1"
                      width={150}
                      height={150}
                      priority
                    ></Image>
                  </div>
                </div>
              </TextContainer>
              <div>
                <Image
                  src="../assets/img/home4.svg"
                  alt="home1"
                  width={600}
                  height={500}
                  priority
                ></Image>
              </div>
            </div>
          )}
        </SubContainer>
      </Container>
    </>
  )
}

export const Container = styled.div`
  height: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
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
  min-height: 60rem;

  ${media.mobile} {
    min-height: 20rem;
  }
  &.animation {
    animation-name: opacity;
    animation-duration: 2s;

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @-webkit-keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`
