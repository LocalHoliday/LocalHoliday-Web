import styled from '@emotion/styled'
import { AreaButtonProps } from './AreaSearchButton'
import { COLORS } from '@/styles/colors'

export const AreaButton = styled.button<AreaButtonProps>`
  margin: 0 auto;
  width: 250px;
  height: 250px;
  object-fit: cover;
  background-image: url(${(props) => props.area});
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export const AreaText = styled.div`
  font-size: var(--font-H5);
  font-weight: var(--font-T);
  color: ${COLORS.grayscale.gray500};
`
