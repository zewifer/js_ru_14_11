import React from 'react'

function Comment(props) {
    const {id, user, text} = props.comment
    return(
       <li>
            <p><em>{user}</em>: {text}</p>
        </li>
    )
}

export default Comment