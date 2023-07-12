import styled from '@emotion/styled'
import { COLORS } from '@/styles/colors'

export const ScheduleButton = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 0.5px solid ${COLORS.mainColor.primary};
  border-radius: 5px;
  width: 537px;
  height: 67px;
  color: ${COLORS.mainColor.primary};
  font-family: var(--font-primary);
  font-weight: var(--font-R);
  font-size: var(--font-H5);
`
