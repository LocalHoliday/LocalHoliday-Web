import styled from '@emotion/styled'
import Image from 'next/image'
import { media } from '@/styles/media'
import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import { Container, SubContainer, TextContainer, Button } from './HomeStyle'
import { useRouter } from 'next/router'

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
