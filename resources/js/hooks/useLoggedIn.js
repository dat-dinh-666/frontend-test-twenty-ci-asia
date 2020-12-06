import {useSelector} from "react-redux";
import {STATUS_LOGGED_IN} from "../store/constants/loggedIn.constant";

export default function useLoggedIn() {
    return useSelector(state => state.loginStatus) === STATUS_LOGGED_IN;
}
