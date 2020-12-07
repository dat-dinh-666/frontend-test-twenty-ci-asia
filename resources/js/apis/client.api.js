import axios from 'axios'
import Auth from './auth.api'

const baseUrl = window.baseUrl + '/api'

function getAuthToken () {
    return window.localStorage.getItem('token') ?? ''
}

const API = axios.create({
    baseURL: `${baseUrl}/`
})

API.interceptors.request.use((config) => {
    config.headers = {
        Authorization: `Bearer ${getAuthToken()}`
    }
    return { ...config }
})

API.interceptors.response.use(response => response, error => {
    const status = error.response ? error.response.status : null
    if (status === 401) {
        return Auth.refresh().then(res => {
            error.config.headers.Authorization = 'Bearer ' + getAuthToken()
            return axios.request(error.config)
        })
    }
    return Promise.reject(error)
})

export { API }
