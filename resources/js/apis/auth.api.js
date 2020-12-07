import { API } from './client.api'

const VALIDATE_ROUTE = 'auth/validate'
const REFRESH_ROUTE = 'auth/refresh'
const LOGIN_ROUTE = 'auth/login'

export default class AuthApi {
    static async validate (params = {}) {
        return await API.get(VALIDATE_ROUTE, {
            params: params
        })
    }

    static async refresh (params = {}) {
        return await API.get(REFRESH_ROUTE, {
            params: params
        })
    }

    static async login (params) {
        return await API.post(LOGIN_ROUTE, params)
    }
}
