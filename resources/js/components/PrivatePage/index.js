import useLoginStatus from "../../hooks/useLoggedIn";
import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";
import { ROUTE_LOGIN } from "../../constants/routes";

export default function PrivatePage({ children, ...rest }) {
    const loggedIn = useLoginStatus();
    return (
        <Route {...rest}>
            {/* eslint-disable-next-line multiline-ternary */}
            {loggedIn ? children : <Redirect to={ROUTE_LOGIN} />}
        </Route>
    );
}

PrivatePage.propTypes = {
    children: PropTypes.node.isRequired
};
