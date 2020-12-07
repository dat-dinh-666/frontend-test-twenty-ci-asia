import {
    SELECTED_POST_FETCH_SUCCESS,
    SET_SELECTED_POST,
    SET_SELECTED_POST_FETCHING_STATUS
} from '../constants/post.constant'

export default function selectedPosts (state = {}, action) {
    switch (action.type) {
    case SET_SELECTED_POST: return action.post
    }

    return state
}

export const selectedPostFetchingStatus = (state = SELECTED_POST_FETCH_SUCCESS, action) => {
    switch (action.type) {
    case SET_SELECTED_POST_FETCHING_STATUS: return action.status
    }

    return state
}
