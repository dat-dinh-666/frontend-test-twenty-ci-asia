import useLoggedIn from "../../../hooks/useLoggedIn";
import {Link, useLocation} from "react-router-dom";
import AuthService from "../../../services/auth.service";
import {toast} from "react-toastify";
import {ROUTE_LOGIN} from "../../../constants/routes";
import React from "react";

export default function AuthActions(props){
    const loggedIn = useLoggedIn();

    function logOut(e){
        e.preventDefault();
        AuthService.logout();
        toast.success('Logout successfully');
        location.reload();
    }

    return (
        <div>
            {loggedIn ? <a className="btn-primary" href={'/logout'} onClick={logOut}>Log out</a> : <Link to={ROUTE_LOGIN}>Login</Link>}
        </div>

    )
}
