import axios from 'axios'
import TokenService from '@/services/TokenService'

const baseURL = 'http://15.165.241.113:8080'
// axios 인스턴스 생성
const springClient = axios.create({
  baseURL,
  timeout: 5000, // 요청 타임아웃 설정 (필요에 따라 조정)
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
