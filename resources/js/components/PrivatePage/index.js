import useLoginStatus from "../../hooks/useLoggedIn";
import React from "react";
import {Redirect, Route} from "react-router";
import {ROUTE_LOGIN} from "../../constants/routes";

export default function PrivatePage({children, ...rest}) {
    const loggedIn = useLoginStatus();
    return (
        <Route {...rest}>
            {loggedIn ? (
                children
            ) : (
                <Redirect to={ROUTE_LOGIN}/>
            )}
        </Route>
    )
}
