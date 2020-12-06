import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {fetchPost} from "../../store/actions/selectedPost.action";
import Post from "./Post";
    import {
    SELECTED_POST_FECHING,
    SELECTED_POST_FETCH_ERROR,
    SELECTED_POST_FETCH_SUCCESS
} from "../../store/constants/post.constant";

export default function PostPage(){
    const dispatch = useDispatch();
    const location = useLocation();

    const selectedPost = useSelector(state => state.selectedPost);
    const selectedPostFetchingStatus = useSelector(state => state.selectedPostFetchingStatus);

    useEffect(() => {
        const postId = location.pathname.split('/post/')[1];
        dispatch(fetchPost(parseInt(postId)));
    }, []);

    return (
        <div>
            {selectedPostFetchingStatus === SELECTED_POST_FECHING && <div>Loading...</div>}
            {selectedPostFetchingStatus === SELECTED_POST_FETCH_ERROR && <div>Error loading component</div>}
            {selectedPostFetchingStatus === SELECTED_POST_FETCH_SUCCESS && <Post post={selectedPost}/>}
        </div>
    )
}
