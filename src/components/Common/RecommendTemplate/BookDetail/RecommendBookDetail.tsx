import styled from '@emotion/styled'

interface BookDetailProps {
  title: string
  userId: string
  img: string
}
export default function RecommendBookDetail() {
  return <></>
}

const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-SB);
  font-size: var(--font-H2);
`
