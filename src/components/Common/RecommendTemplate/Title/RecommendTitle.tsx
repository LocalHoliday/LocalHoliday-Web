import * as styles from './RecommendTitle.style'

interface RecommendTitleProps {
  title: string
}

export const RecommendTitle = ({ title }: RecommendTitleProps) => (
  <styles.RecommendTitle>{title}</styles.RecommendTitle>
)

export default RecommendTitle
