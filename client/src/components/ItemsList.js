import React, { Component } from "react";

import Item from "./Item";
import ItemForm from "./ItemForm";
import { Link } from "react-router-dom";
import axios from "axios";

// const ItemsList = (props) => {

//     const items = props.items.map((item) => {
//         return (
//             <Item {...item} deleteItem={props.deleteItem} key={item.id}/>
//         )
//     })
//     return (
//         <div>
//             >
//         </div>
//     )
// }

class ItemsList extends Component {
  state = {
    items: []
  };

  async componentWillMount() {
    try {
      let item = [];
      let items = await this.getItems;
    } catch (error) {}
  }
  getItems = async () => {
    try {
      const response = await axios.get("api/items");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  createItem = async (title, description) => {
    try {
      const payload = {
        title,
        description
      };
      await axios.post(`api/items/`, payload);
    } catch (error) {
      console.log(error);
      alert("some error occurred");
    }
  };

  updateItem = async () => {
    try {
      const itemId = this.props.match.params.cityId;
      const response = await axios.get(`/post/${itemId}`);
      await this.setState({ item: response.data });
      const itemResponse = await axios.get(`/post`);
      await this.setState({ items: itemResponse.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h1>Items</h1>
        {this.state.items.length > 0 ? this.state.items : null}
        <hr />
        <ItemForm createItem={this.createItem} />
      </div>
    );
  }
}

export default ItemsList;
