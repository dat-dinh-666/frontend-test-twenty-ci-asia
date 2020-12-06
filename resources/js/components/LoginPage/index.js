import LoginForm from "./LoginForm";
import React from "react";
import useLoggedIn from "../../hooks/useLoggedIn";
import {Redirect} from "react-router";
import {ROUTE_POSTS_LIST} from "../../constants/routes";

export default function LoginPage(props){
    const loggedIn = useLoggedIn();

    return loggedIn ? (
        <Redirect to={ROUTE_POSTS_LIST}/>
    ) : (
        <main>
            <LoginForm/>
        </main>
    )
}
