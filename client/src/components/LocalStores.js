import React, { Component } from 'react';
import styled from 'styled-components'

const ListWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 50px 0 0 100px;
text-align: left;
background-color: blue;
padding: 30px;
border-radius: 20px;
width: 75vw;
height: 100%;

h1, h2, p{
  margin: 5px;
  color: white;
}
`;

class LocalStores extends Component {
  render() {
    return (
      <ListWrapper>
        <h2>Local hardware Store</h2>
        <iframe width="1000" height="500" frameborder="0" 
        src="https://www.google.com/maps/embed/v1/search?q=hardware%20store&key=AIzaSyAdY4PC36oHxCReD26U-jbiQxp-S6tGoiU" allowfullscreen></iframe>
      </ListWrapper>
    );
  }
}

export default LocalStores;

