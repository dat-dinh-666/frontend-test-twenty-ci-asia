import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ROUTE_POST } from '../../../constants/routes'

export default function PostItem (props) {
    const { post } = props
    const { title, content, image, id } = post

    return (
        <Link to={ROUTE_POST.replace(':id', id)} className="shadow-lg rounded-lg overflow-hidden transform-gpu hover:-translate-y-1 transition">
            <div className="w-full relative h-0 overflow-hidden" style={{ paddingBottom: '80%' }}>
                <img className="w-full h-full object-cover absolute top-0 left-0" src={image} alt={title} title={title}/>
            </div>
            <div className="p-4">
                <div className="text-lg mb-2">{title}</div>
                <div className="text-sm">{content.slice(0, 100)}</div>
            </div>
        </Link>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}
