import {API} from "./client";

const ApiRoutes = {
    validate: 'auth/validate',
    refresh: 'auth/refresh'
}

export default class AuthApi {
    static async validate(params = {}) {
        return await API.get(ApiRoutes.validate, {
            params: params
        })
    }

    static async refresh(params = {}) {
        return await API.get(ApiRoutes.refresh, {
            params: params
        })
    }
}
