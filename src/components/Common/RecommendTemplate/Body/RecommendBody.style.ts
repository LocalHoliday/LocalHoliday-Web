import styled from '@emotion/styled'
import { RecommendBodyProps } from './RecommendBody'
import { COLORS } from '@/styles/colors'
import { colorType } from './RecommendBody'

export const RecommendBody = styled.div<RecommendBodyProps>`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B1);

  color: ${(props) =>
    props.colorType === 'mainColor'
      ? COLORS.mainColor.primary
      : COLORS.grayscale.gray500};
`

export const RecommendDetailBody = styled.div<RecommendBodyProps>`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B1);

  color: ${(props) =>
    props.colorType === 'mainColor'
      ? COLORS.mainColor.primary
      : COLORS.grayscale.gray500};
`
