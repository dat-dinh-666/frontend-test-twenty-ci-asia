import {
    SELECTED_POST_FECHING,
    SELECTED_POST_FETCH_ERROR, SELECTED_POST_FETCH_SUCCESS,
    SET_SELECTED_POST,
    SET_SELECTED_POST_FETCHING_STATUS
} from '../constants/post.constant'
import { getPostItem } from '../../apis/posts.api'

export const setSelectedPost = (post) => ({
    type: SET_SELECTED_POST,
    post
})

export const fetchPost = (id) => {
    return (dispatch, getState) => {
        dispatch(setSelectedPostFetchingStatus(SELECTED_POST_FECHING))
        getPostItem(id).then(response => {
            const { post } = response.data
            dispatch(setSelectedPost(post))
            dispatch(setSelectedPostFetchingStatus(SELECTED_POST_FETCH_SUCCESS))
        }).catch(err => {
            console.error(err?.response?.data?.message)
            dispatch(setSelectedPostFetchingStatus(SELECTED_POST_FETCH_ERROR))
        })
    }
}

export const setSelectedPostFetchingStatus = status => ({
    type: SET_SELECTED_POST_FETCHING_STATUS,
    status
})
