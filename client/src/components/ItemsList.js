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
  height: 100vh;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 0 100px;
  text-align: left;
  background-color: blue;
  padding: 30px;
  border-radius: 20px;
  width: 75vw;
  height: 100%;

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
    items: []
  };

  async componentWillMount() {
    try {
      let items = [];
      setAxiosDefaults();
      items = await this.getItems();
      this.setState({ items: items });
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
  createItem = async (title, description) => {
    try {
      const payload = {
        items: {
          title,
          description
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
                      <td>Stored</td>
                      <td> <a href="">Edit</a></td>
                      <td><button id={item.id} onClick={this.deleteItem}>
                        Delete
                      </button></td>
                    </tr>
                    
                    
                  );
                })
              : null}
          </table>
          <ItemForm createItem={this.createItem}/>
        </List>
      </ListWrapper>
    );  
  }
}

export default ItemsList;
