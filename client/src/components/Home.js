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
`;
const Home = () => {
  return (
    <ListWrapper>
      <h1>OrganizeIt.io</h1>
      <h2>About</h2>
      <p>
        "OrganizeIt.io" is a hardware and Inventory organization tracking app that
        allows you to create lists and collection of the tools you may have in
        your home hobby shop.
      </p>
      <img src="http://www.clipartlord.com/wp-content/uploads/2014/08/toolbox3.png" alt=""/>
    </ListWrapper>
  );
};

export default Home;
