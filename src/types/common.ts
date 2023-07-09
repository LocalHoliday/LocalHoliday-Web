export type ResponseDto<T> = {
  code: number
  message: string
  result: T
}
