import { ResponseDto } from './common'

export interface IAreaPlayItem {
  uuid: string
  name: string
  addr: string
  lat: string
  lon: string
  photo: string
}

interface IAreaAllPlayData {
  foodDTOList: IAreaPlayItem[]
  houseDTOList: IAreaPlayItem[]
  tourDTOList: IAreaPlayItem[]
}

interface IAreaJobItem {
  uuid: string
  name: string
  addr: string
  startTime: string
  endTime: string
  pay: number
  photo: string
}

interface IAreaJobData {
  jobs: IAreaJobItem[]
}

export type JobDto<T> = {
  jobs: T
}

export type GetAreaPlayRes = ResponseDto<IAreaAllPlayData>
export type GetAreaJobRes = IAreaJobData
