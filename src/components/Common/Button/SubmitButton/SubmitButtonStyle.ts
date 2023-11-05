import { COLORS } from '@/styles/colors'
import styled from '@emotion/styled'

interface SubmitButtonProps {
  height: string
  width: string
}

export const SubmitButton = styled.div<SubmitButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.mainColor.primary};
  border-radius: 20px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`
