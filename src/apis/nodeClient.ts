import axios from 'axios'
import TokenService from '@/services/TokenService'

const nodeClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY_NODE,
})

nodeClient.interceptors.request.use((config) => {
  if (
    TokenService.getToken() !== undefined &&
    TokenService.getId() !== undefined
  ) {
    config.headers!.authorization = `Bearer ${TokenService.getToken()}`
  }
  return config
})

export default nodeClient
