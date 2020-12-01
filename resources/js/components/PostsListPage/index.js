import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/actions/posts";
import {POSTS_FETCHING, POSTS_LOAD_ERROR, POSTS_LOAD_SUCCESS} from "../../store/constants/posts";
import PostItem from "./PostItem";

export default function PostsListPage(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    const loading = useSelector(state => state.postsLoadingStatus);
    const posts = useSelector(state => state.posts);

    return (
        <>
            {loading === POSTS_FETCHING && <div>Loading</div>}
            {loading === POSTS_LOAD_ERROR && <div>Loading Fail</div>}
            {loading === POSTS_LOAD_SUCCESS && (
                <div>
                    {posts && posts.map(post => (
                        <PostItem post={post}/>
                    ))}
                </div>
            )}
        </>
    )
}
