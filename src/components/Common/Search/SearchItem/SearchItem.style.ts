import styled from '@emotion/styled'
import { COLORS } from '@/styles/colors'

export const Title = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-H5);
`

export const CategoryBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background: rgba(217, 227, 226, 0.5);
  border: 1px solid rgba(217, 227, 226, 0.5);
  color: ${COLORS.mainColor.primary};
  font-family: var(--font-primary);
  font-weight: var(--font-R);
  font-size: var(--font-B1);
`

export const Body = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-T);
  font-size: var(--font-B1);
`
export const Container = styled.div`
  padding: 50px;
`
