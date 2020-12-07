import store from "../store/store";
import { setLoginStatus } from "../store/actions/loginStatus.action";
import AuthApi from "../apis/auth.api";
import { STATUS_LOGGED_IN } from "../store/constants/loggedIn.constant";

export default class AuthService {
    static async login(params) {
        try {
            const response = await AuthApi.login(params);
            const token = response.data.data.token;
            this.saveToken(token);
            store.dispatch(setLoginStatus(STATUS_LOGGED_IN));
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    static logout() {
        this.removeToken();
    }

    static saveToken(token) {
        window.localStorage.setItem("token", token);
    }

    static removeToken() {
        window.localStorage.removeItem("token");
    }

    static async bootstrap() {
        const validate = await this.validateToken();
        if (validate) {
            return store.dispatch(setLoginStatus(STATUS_LOGGED_IN));
        }
    }

    static async validateToken() {
        const token = window.localStorage.getItem("token");
        if (!token) {
            return false;
        }

        try {
            await AuthApi.validate({
                token
            });
            return true;
        } catch (e) {
            return await this.refreshToken();
        }
    }

    static async refreshToken() {
        this.removeToken();
        try {
            const refreshRes = await AuthApi.refresh();
            const newToken = refreshRes?.data?.data?.token;
            if (!newToken) {
                return false;
            }
            this.saveToken(newToken);
            return true;
        } catch (e) {
            console.error("Session expired");
        }
    }
}
