import { combineReducers } from 'redux'
import postsReducer, { postsLoadingStatus } from './posts.reducer'
import loginStatus from './loginStatus.reducer'
import selectedPost, { selectedPostFetchingStatus } from './selectedPost.reducer'

const rootReducer = combineReducers({
    posts: postsReducer,
    loginStatus,
    postsLoadingStatus,
    selectedPost,
    selectedPostFetchingStatus
})

export default rootReducer
