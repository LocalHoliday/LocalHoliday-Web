import axios from 'axios'
import TokenService from '@/services/TokenService'

const springClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY_SPRING,
})

springClient.interceptors.request.use((config) => {
  if (
    TokenService.getToken() !== undefined &&
    TokenService.getId() !== undefined
  ) {
    config.headers!.authorization = `Bearer ${TokenService.getToken()}`
  }
  return config
})

export default springClient
