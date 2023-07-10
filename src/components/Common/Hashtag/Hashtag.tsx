import * as styles from './Hashtag.style'
import { COLORS } from '@/styles/colors'

export type colorType = 'mainColor' | 'grayScale'

export interface HashtagProps {
  label?: string
}

export const Hashtag = ({ label }: HashtagProps) => (
  <div>
    <styles.Hashtag>{label}</styles.Hashtag>
  </div>
)

export default Hashtag
