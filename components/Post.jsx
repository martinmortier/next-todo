import React from 'react'

const Post = ({name, author, done}) => {
    const isChecked = done ? true : null
    return (
        <div>
            <input type="checkbox" checked={isChecked} readOnly/> {' '}
            {name}
            <p>Author: {author}</p>
        </div>
    )
}

export default Post
