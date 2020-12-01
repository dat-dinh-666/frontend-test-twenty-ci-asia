import {useSelector} from "react-redux";
import {STATUS_LOGGED_IN} from "../store/constants/loggedIn";

export default function useLoggedIn() {
    return useSelector(state => state.loginStatus) === STATUS_LOGGED_IN;
}
