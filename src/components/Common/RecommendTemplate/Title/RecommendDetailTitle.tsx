import * as styles from './RecommendTitle.style'

interface RecommendTitleProps {
  title: string
}

export const RecommendDetailTitle = ({ title }: RecommendTitleProps) => (
  <styles.RecommendDetailTitle>{title}</styles.RecommendDetailTitle>
)

export default RecommendDetailTitle
