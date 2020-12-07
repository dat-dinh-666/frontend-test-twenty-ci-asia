import { SET_LOGIN_STATUS } from '../constants/loggedIn.constant'

export const setLoginStatus = (status) => ({
    type: SET_LOGIN_STATUS,
    status
})
