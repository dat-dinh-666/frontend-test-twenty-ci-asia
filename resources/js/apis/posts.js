import {API} from "./client";

export const getPosts = () => {
    return API.get('v1/posts');
}
