import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
    ROUTE_CREATE_POST,
    ROUTE_HOME,
    ROUTE_LOGIN,
    ROUTE_POST,
    ROUTE_POSTS_LIST
} from "../../constants/routes";
import React from "react";
import PostsListPage from "../PostsListPage";
import PrivatePage from "../PrivatePage";
import LoginPage from "../LoginPage";
import PostPage from "../PostPage";
import Header from "../Header";
import CreatePostPage from "../CreatePostPage";

export default function Main(props) {
    return (
        <div className="container mx-auto px-4">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path={ROUTE_LOGIN} exact>
                        <LoginPage />
                    </Route>
                    <Route path={ROUTE_POSTS_LIST} exact>
                        <PrivatePage>
                            <PostsListPage />
                        </PrivatePage>
                    </Route>
                    <Route path={ROUTE_CREATE_POST} exact>
                        <PrivatePage>
                            <CreatePostPage />
                        </PrivatePage>
                    </Route>
                    <Route path={ROUTE_POST} exact>
                        <PrivatePage>
                            <PostPage />
                        </PrivatePage>
                    </Route>
                    <Route path={ROUTE_HOME} exact>
                        <Redirect to={ROUTE_POSTS_LIST} />
                    </Route>
                    <Route path="*">
                        <div>404</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
