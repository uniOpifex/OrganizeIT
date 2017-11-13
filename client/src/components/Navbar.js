import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: flex-end;
  font-size: 1em;
  color: black;
  width: 80%;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const NavLength = styled.div `
background-color: #d2691e;
display: flex;
justify-content: center;
padding-top: 30px;
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 10px;
  color: black;
  
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2em;
  color: white;
  padding: 2px;
  a {
    text-decoration: none;
    color: white;
  }
`;

const NavBar = () => {
  return (
    <NavLength>
    <NavWrap>
      <NavLinks>
        <Item> <Link to="/user/sign_out"><bold>Sign Out</bold></Link></Item>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/user/profile">About</Link>
        </Item>
        <Item>
          <Link to="/cities/">Collections</Link>
        </Item>
        <Item>
          <Link to="/cities/">Storage Items</Link>
        </Item>
      </NavLinks>
    </NavWrap>
    </NavLength>
  );
};

export default NavBar;