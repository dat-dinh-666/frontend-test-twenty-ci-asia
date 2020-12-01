import {SET_LOGIN_STATUS} from "../constants/loggedIn";

export const setLoginStatus = (status) => ({
    tyoe: SET_LOGIN_STATUS,
    status
})
