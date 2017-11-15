import React, { Component } from "react";
import styled from "styled-components";
import Item from "./Item";
import ItemForm from "./ItemForm";
import {setAxiosDefaults, userIsLoggedIn} from '../util/SessionHeaderUtil'

// import { Link } from "react-router-dom";
import axios from "axios";
import ReactTable from 'react-table'
import 'react-table/react-table.css'


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
  width: 50vw;
`;

class ItemsList extends Component {
  state = {
    items: []
  };

  async componentWillMount() {
    try {
      let items = []
      setAxiosDefaults()
      items = await this.getItems()
      this.setState({items: items})
    } catch (error) {}
  }
  getItems = async () => {
    try {
      const response = await axios.get('/api/items')
      return response.data
    } catch (error) {
      console.log(error);
      alert("some error occurred" + error);      
      return [];
    }
  };
  createItem = async (title,description) => {
    try {
      const payload = {
        items: {
          title,
          description
        }
      };
      await axios.post(`/api/items`, payload);
    } catch (error) {
      console.log(error);
      alert("some error occurred");
    }
  };

  updateItem = async () => {
    try {
      const itemId = this.props.match.params.cityId;
      const response = await axios.get(`/api/item/${itemId}`);
      await this.setState({ item: response.data });
      const itemResponse = await axios.get(`/api/item`);
      await this.setState({ items: itemResponse.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const data = this.state.items

    const columns = [{
      Header: 'Item',
      accessor: 'title' // String-based value accessors!
    }, {
      Header: 'Description',
      accessor: 'description',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }]
    return (
      <ListWrapper>
        <List>
          <h1>Items: </h1>
          <ReactTable
            data={data}
            columns={columns}
          />
          <ItemForm createItem={this.createItem} />
        </List>
        
      </ListWrapper>
    );
  }
}

export default ItemsList;
