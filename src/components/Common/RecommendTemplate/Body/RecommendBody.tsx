import * as styles from './RecommendBody.style'
import { COLORS } from '@/styles/colors'

export type colorType = 'mainColor' | 'grayScale'

export interface RecommendBodyProps {
  label?: string
  colorType: colorType
}

export const RecommendBody = ({ label, colorType }: RecommendBodyProps) => (
  <styles.RecommendBody colorType={colorType}>{label}</styles.RecommendBody>
)

export default RecommendBody
