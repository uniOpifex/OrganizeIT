import React, { Component } from "react";
import axios from 'axios'
import styled from 'styled-components'
import Item from "./Item";
import StorageItemForm from "./StorageItemForm";
import { setAxiosDefaults, userIsLoggedIn } from "../util/SessionHeaderUtil";





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


class StorageItemList extends Component {
    state = {
        storage_items: []
      };

      async componentWillMount() {
        try {
          let storage_items = [];
          setAxiosDefaults();
          storage_items = await this.getstorage_Items();
          this.setState({ storage_items: storage_items });
        } catch (error) {}
      }
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
      createStorageItem = async (title, description) => {
        try {
          const payload = {
            storage_items: {
              title,
              description
            }
          };
          await axios.post(`/api/storage_items`, payload);
        } catch (error) {
          console.log(error);
          alert("some error occurred");
        }
      };
      deleteStorageItem = async event => {
        try {
          let itemId = event.target.id;
          event.preventDefault();
          await axios.delete(`/api/storage_items/${itemId}`);
          var array = this.state.storage_items;
          var index = array.indexOf(itemId)
          array.splice(index, 1);
          this.setState({storage_items: array })
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
              <th>Edit</th>
              <th>Delete</th>
            </tbody>
            {this.state.storage_items
              ? this.state.storage_items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td id="firstCol">{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        {" "}
                        <a href="">Edit</a>
                      </td>
                      <td>
                        <button id={item.id} onClick={this.deleteStorageItem}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </table>
          <StorageItemForm createStorageItem={this.createStorageItem}/>
        </List>
      </ListWrapper>
    );
  }
}

export default StorageItemList;
