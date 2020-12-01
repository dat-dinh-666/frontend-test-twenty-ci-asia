import {SET_POSTS} from "../constants/posts";

export default function posts (state = [], action){
    switch (action.type) {
        case SET_POSTS: return action.posts;
    }
}
