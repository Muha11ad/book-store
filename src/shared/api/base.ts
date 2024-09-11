import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const API_URL = 'http://localhost:9000/book'
export const API_POST_URL = 'http://localhost:9000/user'

class ApiInstance {
    private axiosGet: AxiosInstance
    private axiosPost: AxiosInstance

    constructor() {
        ;(this.axiosGet = axios.create({
            baseURL: API_URL,
            timeout: 120000,
            headers: {
                'Content-Type': 'application/json',
            },
        })),
            (this.axiosPost = axios.create({
                baseURL: API_POST_URL,
                timeout: 120000,
                headers: {
                    'Content-Type': 'application/json',
                },
            }))
    }

    async get<T>(
        endpoint: string,
        options: AxiosRequestConfig = {
            withCredentials: true,
        }
    ): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosGet.get(
            endpoint,
            options
        )
        return response.data
    }
    async post<T>(
        endpoint: string,
        data: any,
        options: AxiosRequestConfig = {
            withCredentials: true,
        }
    ): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosPost.post(
            endpoint,
            data,
            options
        )
        return response.data
    }
}

export const apiInstance = new ApiInstance()
