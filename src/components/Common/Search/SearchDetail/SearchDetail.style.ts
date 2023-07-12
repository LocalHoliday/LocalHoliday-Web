import styled from '@emotion/styled'
import { COLORS } from '@/styles/colors'

export const Title = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-H2);
`

export const CategoryTitle = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B1);
  color: ${COLORS.grayscale.gray500};
  white-space: nowrap;
`
export const Body = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B1);
  color: ${COLORS.grayscale.gray500};
`
