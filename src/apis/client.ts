import axios from 'axios'
import TokenService from '@/services/TokenService'

// axios 인스턴스 생성
const apiClient = axios.create({
  timeout: 5000, // 요청 타임아웃 설정 (필요에 따라 조정)
})

apiClient.interceptors.request.use((config) => {
  if (
    TokenService.getToken() !== undefined &&
    TokenService.getId() !== undefined
  ) {
    config.headers!.authorization = `Bearer ${TokenService.getToken()}`
  }
  return config
})

export default apiClient
