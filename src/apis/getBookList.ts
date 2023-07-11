import { GetBookListRes } from '@/types/review'

import apiClient from './client'

export const getBookList = async (): Promise<GetBookListRes> => {
  try {
    const res = await apiClient.get('/api/node/review')
    return res.data
  } catch (error) {
    throw error
  }
}
