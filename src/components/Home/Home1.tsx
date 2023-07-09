import useResponsiveMobile from '@/hooks/responsive/useResponsiveMobile'
import { Container, SubContainer, TextContainer } from './HomeStyle'

import Image from 'next/image'

export default function Home1() {
  const isMobile = useResponsiveMobile()

  return (
    <>
      <Container>
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
              ></Image>
            </div>
          )}
        </SubContainer>
      </Container>
    </>
  )
}
