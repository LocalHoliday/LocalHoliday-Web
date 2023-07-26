import Image from 'next/image'

import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import { SubContainer, TextContainer, Button } from './HomeStyle'

import styled from '@emotion/styled'
import { media } from '@/styles/media'

import { useRef } from 'react'
import useIntersectionObsever from '@/hooks/useIntersectionObserver'

export default function Home2() {
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
                <div style={{ display: 'flex' }}>
                  <div>
                    <h1>지역별로 일거리들과 놀거리들을 한번에!</h1>
                    <h3>
                      지역에 특색에 맞는 일거리들과 놀거리들을 알려드려요.
                    </h3>
                    <div style={{ padding: '10px' }} />
                  </div>
                  <div style={{ padding: '20px' }} />
                </div>
              </TextContainer>
              <Image
                src="../assets/img/home2.svg"
                width={450}
                height={400}
                alt="nav"
                priority
              ></Image>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <Image
                src="../assets/img/home2.svg"
                width={450}
                height={400}
                alt="nav"
                priority
              ></Image>
              <TextContainer>
                <div>
                  <h1>지역별로 일거리들과 놀거리들을 한번에!</h1>
                  <h3>지역에 특색에 맞는 일거리들과 놀거리들을 알려드려요.</h3>
                  <div className="pt-30"></div>
                </div>
              </TextContainer>
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
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  background-image: radial-gradient(
    76.81% 163.66% at 85.69% 28.49%,
    #eff4ff 0%,
    #e4fffc 100%
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
