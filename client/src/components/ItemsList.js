import React, { Component } from "react";
import styled from "styled-components";
import Item from "./Item";
import ItemForm from "./ItemForm";
import { setAxiosDefaults, userIsLoggedIn } from "../util/SessionHeaderUtil";

// import { Link } from "react-router-dom";
import axios from "axios";

const ListWrapper = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;
  border-radius: 10px;
  max-height: 90%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 150px 100px;
  text-align: left;
  background-color: blue;
  padding: 30px;
  border-radius: 20px;
  width: 75vw;

  table {
    tr {
=      padding: 20px;
    }
    tr td {
    border-bottom:1pt solid black;
    margin-bottom: 2px;
  }
    tr td#firstCol {
    width: 200px;
  
    }
  }
`;

class ItemsList extends Component {
  state = {
    items: [],
    storage_items: []
  };

  async componentWillMount() {
    try {
      let items = [];
      let storage_items = [];
      setAxiosDefaults();
      items = await this.getItems();
      storage_items = await this.getstorage_Items();
      this.setState({ items: items, storage_items: storage_items });
    } catch (error) {}
  }

  
  getItems = async () => {
    try {
      const response = await axios.get("/api/items");
      return response.data;
    } catch (error) {
      console.log(error);
      alert("some error occurred" + error);
      return [];
    }
  };
  getstorage_Items = async () => {
    try {
      const response = await axios.get("/api/storage_items");
      return response.data;
    } catch (error) {
      console.log(error);
      alert("some error occurred" + error);
      return [];
    }
  };
  createItem = async (title, description, storage_item_id) => {
    try {
      //let storage_item_id = parseInt(storage_item_id)
      const payload = {
        items: {
          title,
          description,
          storage_item_id
        }
      };
      
      await axios.post(`/api/items`, payload);
      this.forceUpdate()
    } catch (error) {
      console.log(error);
      alert("some error occurred");
    }
  };

  updateItem = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  deleteItem = async event => {
    try {
      let itemId = event.target.id;
      event.preventDefault();
      await axios.delete(`/api/items/${itemId}`);
      var array = this.state.items;
      var index = array.indexOf(itemId)
      array.splice(index, 1);
      this.setState({items: array })
      // await this.setState({ redirect: true }) //WHY does this break everything?!
    } catch (err) {
      console.log(err);
    }
  };



  render() {
    const findStorageName = (props) => {       
    };
    return (
      <ListWrapper>
        <List>
          <table>
            <tbody>
              <th>Title</th>
              <th>Description</th>
              <th>Storage Item</th>
              <th>Edit</th>
              <th>Delete</th>
            </tbody>
            {this.state.items
              ? this.state.items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td id="firstCol">{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.storage_item_id ? this.state.storage_items.map((n) =>{
                          if (n.id == item.storage_item_id) {
                            return (n.title);
                          } else {return ("")}
                      }): ("none")}</td>
                      <td> <a href="">Edit</a></td>
                      <td><button id={item.id} onClick={this.deleteItem}>
                        Delete
                      </button></td>
                    </tr>
                  );
                })
              : null}
          </table>
          {<ItemForm createItem={this.createItem} storage_items={this.state.storage_items}/>}
        </List>
      </ListWrapper>
    );  
  }
}

export default ItemsList;
