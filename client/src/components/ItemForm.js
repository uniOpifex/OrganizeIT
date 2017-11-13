import React, { Component } from 'react';
import styled from 'styled-components'


class ItemForm extends Component {
  
      state = {
          title: '',
          content: ''
      }


      createItem = (event) => {
        event.preventDefault()
        this.props.createItem(
            this.state.title,
            this.state.content
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
                    <div>
                        <label htmlFor="Title">Title </label>
                        <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
                    </div>
                    <div>
                        <label htmlFor="content">Content: </label>
                        <input onChange={this.handleChange} type="content" name="content" value={this.state.content}/>
                    </div>
                    
                    <button onClick={this.createItem}>Submit</button>
                </form>
              </div>
          )
      }
  }
  
  export default ItemForm