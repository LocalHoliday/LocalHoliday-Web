export type BillDto<T> = {
  reviews: T
}

export interface IBillData {
  id: string
  bill_id: string
  content: string
  created: string
  profile: string
  title: string
  user_id: string
  photo: string
  nickname: string
}

export interface IBillDetailData {
  id: string
  bill_id: string
  content: string
  created: string
  profile: string
  title: string
  user_id: string
  photo: string
  nickname: string
  houses: IBillItemDetailData[]
  foods: IBillItemDetailData[]
  tourSpots: IBillItemDetailData[]
  jobs: IBillItemDetailData[]
}

export interface IBillItemDetailData {
  id: string
  bill_id: string
  content: string
  created: string
  end_date: string
  house_id: string
  photo: string
  start_date: string
  title: string
  user_id: string
}

export type GetBookListRes = BillDto<IBillData[]>
export type GetBookDetailRes = BillDto<IBillDetailData>
