import React, { Component } from "react";
import styled from "styled-components";

class ItemForm extends Component {
  state = {
    title: "",
    description: "",
    storage_item_id: 0
  };

  createItem = event => {
    event.preventDefault();
    this.props.createItem(this.state.title, this.state.description, this.state.storage_item_id);
  };

  handleChange = event => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <form>
          <h2>Create a new Item</h2>
          <div>
            <label htmlFor="Title">Title </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="content">Description: </label>
            <input
              onChange={this.handleChange}
              type="textarea"
              name="description"
              value={this.state.description}
            />
          </div>
          <div>
            <select onChange={this.handleChange} name="storage_item_id" value={this.state.storage_item_id}>
            <option value="None">None</option>
            {this.props.storage_items
                ? this.props.storage_items.map((item, index) => {
                    return (
                        <option  onChange={this.handleChange} key ={index} value={item.id}>{item.title}</option>
                    );
                  })
                : null}
            </select>
          </div>

          <button onClick={this.createItem}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
