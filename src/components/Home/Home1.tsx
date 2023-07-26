import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import { SubContainer, TextContainer } from './HomeStyle'
import styled from '@emotion/styled'
import { media } from '@/styles/media'
import Image from 'next/image'
import { useRef } from 'react'
import useIntersectionObsever from '@/hooks/useIntersectionObserver'
export default function Home1() {
  const isMobile = useResponsiveMobile()
  const ref = useRef<HTMLDivElement>(null)
  const isInViewport = useIntersectionObsever(ref)

  return (
    <>
      <Container ref={ref} className={isInViewport ? 'animation' : ''}>
        <SubContainer>
          {isMobile ? (
            <div>
              <TextContainer>
                <div>
                  <h1>로컬 홀리데이를 떠나보세요!</h1>
                  <h3>
                    국내 여행지로 워킹 홀리데이를 즐기며 돈도 벌고 관광도 하는
                    일석이조의 즐거움을 느낄 수 있어요.
                  </h3>
                </div>
              </TextContainer>
              <Image
                src="../assets/img/home1.svg"
                alt="home1"
                width={400}
                height={400}
                priority
              ></Image>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <TextContainer>
                <div>
                  <h1>로컬 홀리데이를 떠나보세요!</h1>
                  <h3>
                    국내 여행지로 워킹 홀리데이를 즐기며 돈도 벌고 관광도 하는
                    일석이조의 즐거움을 느낄 수 있어요.
                  </h3>
                </div>
              </TextContainer>
              <Image
                src="../assets/img/home1.svg"
                alt="home1"
                width={400}
                height={400}
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
  overflow: hidden;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  background-image: linear-gradient(
    111.3deg,
    #f1f5ff 0.71%,
    #ccfff9 97.79%,
    #ccfff9 97.79%
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
