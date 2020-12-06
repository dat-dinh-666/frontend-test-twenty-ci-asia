import React, {useState} from "react";
import {deletePost, patchPost} from "../../../apis/posts.api";
import {useHistory} from "react-router";
import {ROUTE_POSTS_LIST} from "../../../constants/routes";
import {toast} from 'react-toastify';

export default function Post(props) {
    const {post} = props;
    const {id, image, title, content} = post;
    const history = useHistory();

    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

    function onTitleChange(e){
        setNewTitle(e.target.textContent)
    }

    function onContentChange(e){
        setNewContent(e.target.textContent)
    }

    function save(){
        patchPost(id, {
            title: newTitle,
            content: newContent
        }).then(r => {
            setEdit(false);
        }).catch(err => {
            toast.error('Cannot save post');
        })
    }

    function deleteAction(){
        deletePost(id).then(res => {
            history.push(ROUTE_POSTS_LIST);
        }).catch(res => {
            toast.error('Cannot delete this post');
        })
    }

    return (
        <div className="grid gap-4" style={window.innerWidth > 768 ? {gridTemplateColumns: "300px 1fr"}: {}}>
            <div className="flex justify-center">
                <img src={image} alt={title} title={title}/>
            </div>
            <div className="flex flex-col items-start">
                <div className={`text-2xl mb-2 block w-full ${edit ? 'bg-gray-100 p-1 rounded-lg' : ''}`}
                     onInput={onTitleChange}
                     contentEditable={edit}>
                    {title}
                </div>
                <div className={`flex-grow block w-full ${edit ? 'bg-gray-100 p-1 rounded-lg' : ''}`}
                     onInput={onContentChange}
                     contentEditable={edit}>
                    {content}
                </div>
                {!edit && (
                    <div className="flex items-center mt-2">
                        <button className="btn-primary" onClick={setEdit.bind(null, true)}>Edit</button>
                        <button className="btn-danger ml-2" onClick={deleteAction}>Delete</button>
                    </div>
                )}
                {edit && <button className="btn-primary mt-2" onClick={save}>Save</button>}
            </div>
        </div>
    )
}
