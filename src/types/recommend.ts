import { ResponseDto } from './common'

export interface ITourRecomData {
  uuid: string
  name: string
  addr: string
  lat: string
  lon: string
  photo: string
}

export interface IMainRecomData {
  uuid: string
  title: string
  location: string
  photo: string
  jodDto: IJobData
  tourList: ITourRecomData[]
}

export interface IJobData {
  uuid: string
  name: string
  addr: string
  startTime: string
  endTime: string
  pay: number
  photo: string
}

export type GetRecommendListRes = ResponseDto<IMainRecomData[]>
