import React, { Component } from 'react';
import styled from 'styled-components'


class StorageItemForm extends Component {
  
      state = {
          title: '',
          description: ''
          
      }


      createStorageItem = (event) => {
        event.preventDefault()
        this.props.createStorageItem(
            this.state.title,
            this.state.description
        )
    } 
  
    handleChange = (event) => {
        const newState = {...this.state}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

  
      render() {
          return (
              <div>
                 <form>
                     <h2>Create a new Item</h2>
                    <div>
                        <label htmlFor="Title">Title </label>
                        <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
                    </div>
                    <div>
                        <label htmlFor="content">Description: </label>
                        <input onChange={this.handleChange} type="textarea" name="description" value={this.state.description}/>
                    </div>
                    
                    <button onClick={this.createStorageItem}>Submit</button>
                </form>
              </div>
          )
      }
  }
  
  export default StorageItemForm