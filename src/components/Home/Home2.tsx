import Image from 'next/image'

import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import { SubContainer, TextContainer, Button } from './HomeStyle'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { media } from '@/styles/media'

export default function Home2() {
  const isMobile = useResponsiveMobile()
  const router = useRouter()
  const onClick = () => {
    router.push('/search')
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
                    <h1>지역별로 일거리들과 놀거리들을 한번에!</h1>
                    <h3>
                      지역에 특색에 맞는 일거리들과 놀거리들을 알려드려요.
                    </h3>
                    <div style={{ padding: '10px' }} />
                  </div>
                  <div style={{ padding: '20px' }} />
                  <Button onClick={onClick}>자세히보기</Button>
                </div>
              </TextContainer>
              <Image
                src="../assets/img/home2.svg"
                width={450}
                height={400}
                alt="nav"
              ></Image>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <Image
                src="../assets/img/home2.svg"
                width={450}
                height={400}
                alt="nav"
              ></Image>
              <TextContainer>
                <div>
                  <h1>지역별로 일거리들과 놀거리들을 한번에!</h1>
                  <h3>지역에 특색에 맞는 일거리들과 놀거리들을 알려드려요.</h3>
                  <div style={{ padding: '30px' }} />
                  <Button onClick={onClick}>자세히보기</Button>
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
  transform: none;
  width: 100%;
  position: relative;
  background-image: radial-gradient(
    76.81% 163.66% at 85.69% 28.49%,
    #eff4ff 0%,
    #e4fffc 100%
  );
  min-height: 35rem;

  ${media.mobile} {
    min-height: 20rem;
  }
`
