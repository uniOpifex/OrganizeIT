import React from "react";
import styled from "styled-components";
const BodyWrap = styled.div`background-color: red;`;

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
`
const About = () => {
  return (
    <ListWrapper>
      <h1>OrganizeIt.io</h1>
      <h2>Instructions</h2>
      <h3>Step One</h3>
      <p>
        In order to use the app, create your storage items first, such as a tool bench, a supply closet, or toolbox.
      </p>
      <h3>Step Two</h3>
      <p>
        After creating in your storage item you can create items and place them in their storage location.
      </p>
      <p>From the Storage Item View you can look at your list of items</p>
      <img src="http://www.clipartlord.com/wp-content/uploads/2014/08/toolbox3.png" alt=""/>
    </ListWrapper>
  );
};

export default About;
