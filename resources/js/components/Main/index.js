import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ROUTE_LOGIN, ROUTE_POST, ROUTE_POSTS_LIST} from "../../constants/routes";
import React from "react";
import PostsListPage from "../PostsListPage";
import PrivatePage from "../PrivatePage";

export default function Main(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ROUTE_LOGIN} exact>
                    <div>Login</div>
                </Route>
                <Route path={ROUTE_POSTS_LIST} exact>
                    <PrivatePage>
                        <PostsListPage/>
                    </PrivatePage>
                </Route>
                <Route path={ROUTE_POST} exact>
                    <div>Login</div>
                </Route>
                <Route path={'/'} exact>
                    <Redirect to={ROUTE_POSTS_LIST}/>
                </Route>
                <Route path="*">
                    <div>404</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
