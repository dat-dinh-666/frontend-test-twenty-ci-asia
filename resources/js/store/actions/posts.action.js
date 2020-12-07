import { getPosts } from '../../apis/posts.api'
import {
    POSTS_FETCHING,
    POSTS_LOAD_ERROR,
    POSTS_LOAD_SUCCESS,
    SET_POSTS,
    SET_POSTS_LOADING_STATUS
} from '../constants/posts.constant'

export const fetchPosts = () => {
    return (dispatch, getState) => {
        dispatch(setPostsLoadingStatus(POSTS_FETCHING))
        getPosts().then(response => {
            const { posts } = response.data
            dispatch(setPosts(posts))
            dispatch(setPostsLoadingStatus(POSTS_LOAD_SUCCESS))
        }).catch(err => {
            console.error(err?.response?.data?.message)
            dispatch(setPostsLoadingStatus(POSTS_LOAD_ERROR))
        })
    }
}

export const setPosts = posts => ({
    type: SET_POSTS,
    posts
})

export const setPostsLoadingStatus = (status) => ({
    type: SET_POSTS_LOADING_STATUS,
    status
})
