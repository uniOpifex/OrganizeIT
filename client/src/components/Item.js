import React from 'react'

const Item = (props) => {
    return (
        <div>
            <div><h2>{props.title}</h2></div>
            <div>{props.content}</div>
        </div>
    )
}

export default Item