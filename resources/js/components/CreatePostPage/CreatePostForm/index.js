import React, { useState } from 'react'
import { addPosts } from '../../../apis/posts.api'
import { useHistory } from 'react-router'
import { ROUTE_POSTS_LIST } from '../../../constants/routes'
import { toast } from 'react-toastify'

export default function CreatePostForm (props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()

    function onTitleChange (e) {
        setTitle(e.target.value)
    }

    function onContentChange (e) {
        setContent(e.target.value)
    }

    function save () {
        addPosts({
            title,
            content,
            image: 'http://via.placeholder.com/300x300'
        }).then(r => {
            history.push(ROUTE_POSTS_LIST)
        }).catch(() => {
            toast.error('Cannot create post')
        })
    }

    return (
        <div className="grid gap-4" style={{ gridTemplateColumns: '300px 1fr' }}>
            <div>
                <img src='http://via.placeholder.com/300x300' alt=""/>
                <div>Upload image is not supported</div>
            </div>
            <div className="flex flex-col items-start">
                <input className={'text-2xl mb-2 block w-full bg-gray-100 p-1 rounded-lg'}
                    onChange={onTitleChange} placeholder={'Post title'}/>
                <textarea className={'flex-grow block w-full bg-gray-100 p-1 rounded-lg resize-none'}
                    onChange={onContentChange} placeholder={'Post content'}
                    rows={6}
                />
                <button className="btn-primary mt-2" onClick={save}>Save</button>
            </div>
        </div>
    )
}
