import * as styles from './ScheduleButton.style'

export default function ScheduleButton() {
  const onClick = () => {
    console.log('클릭')
  }
  return (
    <styles.ScheduleButton onClick={onClick}>일정에 담기</styles.ScheduleButton>
  )
}
