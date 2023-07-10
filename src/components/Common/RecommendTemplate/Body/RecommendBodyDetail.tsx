import * as styles from './RecommendBody.style'
import { COLORS } from '@/styles/colors'

export type colorType = 'mainColor' | 'grayScale'

export interface RecommendBodyDetailProps {
  label?: string
  colorType: colorType
}

export const RecommendBodyDetail = ({
  label,
  colorType,
}: RecommendBodyDetailProps) => (
  <styles.RecommendDetailBody colorType={colorType}>
    {label}
  </styles.RecommendDetailBody>
)

export default RecommendBodyDetail
