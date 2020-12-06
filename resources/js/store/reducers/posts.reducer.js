import {POSTS_LOAD_SUCCESS, SET_POSTS, SET_POSTS_LOADING_STATUS} from "../constants/posts.constant";

export default function postsReducer (state = [], action){
    switch (action.type) {
        case SET_POSTS: return action.posts;
    }

    return state;
}

export const postsLoadingStatus = (state = POSTS_LOAD_SUCCESS, action) => {
    switch (action.type) {
        case SET_POSTS_LOADING_STATUS:
            return action.status;
    }

    return state;
}
