import React from "react";
import PropTypes from 'prop-types';

export default function PostItem(props) {
    const {post} = props;
    const {title, content, image} = post;

    return (
        <div>
            <div>
                <img src={image} alt={title} title={title}/>
            </div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}
