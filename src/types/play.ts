import { ResponseDto } from './common'

interface IPlayItem {
  uuid: string
  name: string
  addr: string
  lat: string
  lon: string
  info: string
  photo: string
}

export type GetPlayDetailRes = ResponseDto<IPlayItem>
