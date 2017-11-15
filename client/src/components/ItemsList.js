import React, { Component } from "react";
import styled from "styled-components";
import Item from "./Item";
import ItemForm from "./ItemForm";
import { Link } from "react-router-dom";
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
  justify-content: start;
  margin: 50px 0 0 100px;
  text-align: left;
  background-color: blue;
  padding: 30px;
  border-radius: 20px;
  flex-direct: start;
`;

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
      <ListWrapper>
        <List>
          <h1>Items</h1>
          {this.state.items.length > 0 ? this.state.items : null}

          <ItemForm createItem={this.createItem} />
        </List>
      </ListWrapper>
    );
  }
}

export default ItemsList;
