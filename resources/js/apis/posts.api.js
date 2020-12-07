import { API } from './client.api'

export const getPosts = () => {
    return API.get('v1/posts')
}

export const getPostItem = id => {
    return API.get(`v1/posts/${id}`)
}

export const addPosts = params => {
    return API.post('v1/posts', params)
}

export const patchPost = (id, params) => {
    return API.patch(`v1/posts/${id}`, params)
}

export const deletePost = id => {
    return API.delete(`v1/posts/${id}`)
}
