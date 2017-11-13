import React from 'react'
import Item from "./Item"
import ItemForm from "./ItemForm"
import { Link } from 'react-router-dom';



const ItemsList = (props) => {

    const items = props.items.map((item) => {
        return (
            <Item {...item} deleteItem={props.deleteItem} key={item.id}/>
        )
    })
    return (
        <div>
            <h1>Items</h1>

            {props.items.length > 0 ? items : null}
            <hr/>
            <ItemForm createItem={props.createItem} />
        </div>
    )
}

export default ItemsList