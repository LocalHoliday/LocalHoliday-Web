import * as styles from './RecommendTitle.style'

interface RecommendTitleProps {
  title: string
}

export const RecommendDetailTitle = ({ title }: RecommendTitleProps) => (
  <styles.RecommendDetialTitle>{title}</styles.RecommendDetialTitle>
)

export default RecommendDetailTitle
