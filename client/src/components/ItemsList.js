import React from 'react'
import Item from "./Item"

const ItemsList = (props) => {

    const items = props.items.map((item) => {
        return (
            <Item {...item} deletePost={props.deleteItem} key={item.id}/>
        )
    })
    return (
        <div>
            <h1>Items</h1>

            {props.items.length > 0 ? items : null}
        </div>
    )
}

export default ItemsList