export type BillSDto<T> = {
  reviews: T
}
export type BillDto<T> = {
  review: T
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
  playIds: string[]
  jobIds: string[]
}

export type GetBookListRes = BillSDto<IBillData[]>
export type GetBookDetailRes = BillDto<IBillDetailData>
