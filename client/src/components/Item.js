import React from 'react'

const Item = (props) => {
    return (
        <div>
            <div><h2>{props.title}</h2></div>
            <div>{props.description}</div>
            <button onClick={this.deleteItem}></button>
        </div>
    )
}

export default Item