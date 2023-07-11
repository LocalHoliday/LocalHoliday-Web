import * as styles from './AreaSearchButton.style'
import { AREA } from '../../../../styles/areaImage'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

export interface AreaButtonProps {
  id?: number
  area?: string
  text?: string
}

export default function AreaSearchButton({ area, text }: AreaButtonProps) {
  return (
    <>
      <Container>
        <styles.AreaButton area={area}></styles.AreaButton>
        <styles.AreaText>{text}</styles.AreaText>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
