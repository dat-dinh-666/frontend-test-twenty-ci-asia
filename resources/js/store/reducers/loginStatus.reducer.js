import {
    SET_LOGIN_STATUS,
    STATUS_NOT_LOGGED_IN
} from "../constants/loggedIn.constant";

export default function loginStatus(state = STATUS_NOT_LOGGED_IN, action) {
    switch (action.type) {
        case SET_LOGIN_STATUS:
            return action.status;
    }

    return state;
}
