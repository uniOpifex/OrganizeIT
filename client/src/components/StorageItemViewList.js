import React, { Component } from 'react';
import styled from "styled-components";
import { setAxiosDefaults, userIsLoggedIn } from "../util/SessionHeaderUtil";
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
class StorageItemViewList extends Component {
  
  
  state = {
    items: []
  };

  async componentWillMount() {
    try {
      let items = [];
      setAxiosDefaults();
      items = await this.getItems();
      this.setState({ items: items});
    } catch (error) {}
  }

  
  getItems = async () => {
    try {
      const response = await axios.get("/api/storage_items/:storage_item_id/items/");
      return response.data;
    } catch (error) {
      console.log(error);
      alert("some error occurred" + error);
      return [];
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
                <th>Edit</th>
                <th>Delete</th>
              </tbody>
              {this.state.items
                ? this.state.items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td id="firstCol">{item.title}</td>
                        <td>{item.description}</td>
                        <td> <a href="">Edit</a></td>
                        <td><button id={item.id} onClick={this.deleteItem}>
                          Delete
                        </button></td>
                      </tr>
                    );
                  })
                : null}
            </table>
          </List>
        </ListWrapper>
      );  
    }
 
  }


export default StorageItemViewList;