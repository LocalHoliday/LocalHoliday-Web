import * as styles from './RecommendBody.style'

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
