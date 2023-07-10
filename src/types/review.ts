export type ReviewDto<T> = {
  reviews: T
}

export interface IReviewData {
  id: string
  bill_id: string
  content: string
  created: string
  profile: string
  title: string
  user_id: string
}

export type GetBookListRes = ReviewDto<IReviewData[]>
