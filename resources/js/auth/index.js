import AuthApi from "../apis/auth";
import store from "../store/store";
import {setLoginStatus} from "../store/actions/loginStatus";

export default class Auth {
    static saveToken(token){
        window.localStorage.setItem('token', token);
    }

    static removeToken() {
        window.localStorage.removeItem('token');
    }

    static async bootstrap(){
        if(window.token) {
            window.localStorage.setItem('token', window.token);
        }

        const validate = await this.validateToken();
        if(validate) {
            return store.dispatch(setLoginStatus(true))
        }
    }

    static async validateToken(){
        const token = window.localStorage.getItem('token');
        if(!token) {
            return false;
        }

        try {
            await AuthApi.validate({
                token
            });
            return true;
        }
        catch (e) {
            return await this.refreshToken();
        }
    }

    static async refreshToken(){
        this.removeToken();
        try {
            const refreshRes = await AuthApi.refresh();
            const newToken = refreshRes?.data?.data?.token;
            if(!newToken) {
                return false;
            }
            this.saveToken(newToken);
            return true;
        }
        catch (e) {
            console.error('Session expired');
        }
    }
}
