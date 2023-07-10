import styled from '@emotion/styled'
import { COLORS } from '@/styles/colors'

export const Hashtag = styled.div`
  border: 0.3px solid ${COLORS.mainColor.primary};
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.12));
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: inline-block;
  width: 130px;
  color: ${COLORS.mainColor.primary};
`
