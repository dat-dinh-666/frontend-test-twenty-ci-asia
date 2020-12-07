import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/actions/posts.action";
import {
    POSTS_FETCHING,
    POSTS_LOAD_ERROR,
    POSTS_LOAD_SUCCESS
} from "../../store/constants/posts.constant";
import PostItem from "./PostItem";
import CreatePost from "./CreatePost";

export default function PostsListPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const loading = useSelector(state => state.postsLoadingStatus);
    const posts = useSelector(state => state.posts);

    return (
        <>
            <h1 className="page-title">Post List</h1>
            {loading === POSTS_FETCHING && <div>Loading</div>}
            {loading === POSTS_LOAD_ERROR && <div>Loading Fail</div>}
            {loading === POSTS_LOAD_SUCCESS && (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <CreatePost />
                    {posts &&
                        posts.map(post => (
                            <PostItem post={post} key={post.id} />
                        ))}
                </div>
            )}
        </>
    );
}
