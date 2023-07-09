import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import styled from '@emotion/styled'

export default function Home() {
  return (
    <>
      <Home1 />
      <Spacing />
      <Home2 />
      <Spacing />
      <Home3 />
      <Spacing />
      <Home4 />
    </>
  )
}

const Spacing = styled.div`
  margin: 50px;
`
