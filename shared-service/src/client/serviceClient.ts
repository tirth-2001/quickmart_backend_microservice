import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export class ServiceClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get<T>(this.baseUrl + endpoint, config)
      return response.data
    } catch (error) {
      this.handleRequestError(error as AxiosError)
      throw error
    }
  }

  async post<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post<T>(this.baseUrl + endpoint, data, config)
      return response.data
    } catch (error) {
      this.handleRequestError(error as AxiosError)
      throw error
    }
  }

  async put<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put<T>(this.baseUrl + endpoint, data, config)
      return response.data
    } catch (error) {
      this.handleRequestError(error as AxiosError)
      throw error
    }
  }

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete<T>(this.baseUrl + endpoint, config)
      return response.data
    } catch (error) {
      this.handleRequestError(error as AxiosError)
      throw error
    }
  }

  private handleRequestError(error: AxiosError): void {
    if (error.response) {
      // The request was made, and the server responded with a status code
      console.error('Response Error:', error.response.status, error.response.data)
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No Response Received:', error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request Setup Error:', error.message)
    }
  }
}
