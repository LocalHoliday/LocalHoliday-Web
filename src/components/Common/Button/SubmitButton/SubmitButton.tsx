import * as styles from './SubmitButtonStyle'

export default function SubmitButton(
  height: string,
  width: string,
  label: string,
) {
  ;<>
    <styles.SubmitButton height={height} width={width}>
      {label}
    </styles.SubmitButton>
  </>
}
