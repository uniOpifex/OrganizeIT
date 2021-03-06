import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavWrap = styled.div`
  color: black;
`;

const NavLength = styled.div `
background-color: green;
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10px;
  color: black;
  
`;

const Item = styled.div`
  display: flex;
  font-size: 2em;
  color: white;
  padding: 2px;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Topnav  =styled.div`
  overflow: hidden;
  background-color: white;
  width: 100%;
  a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  };
  a:hover {
    background-color: red;
    color: white;
  }
  @media screen and (max-width: 600px) {
  a:not(:first-child) {display: none;}
  a.icon {
    float: right;
    display: block;
  }
}
  @media screen and (max-width: 600px) {
  .responsive {position: relative;}
  .responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
`






const NavBar = (props) => {
  return (
    <NavWrap>
    <Topnav id="myTopnav">
      <NavLinks>
        <Item> <Link to="/signUp" >{props.signedIn ? "Sign Out" : "Sign In"}</Link></Item>
        <Item>
          <Link to="/">organizIt.io</Link>
        </Item>
        <Item>
          <Link to="/collections/">About</Link>
        </Item>
        <Item>
          <Link to="/storage-items/">Storage Items</Link>
        </Item>
        <Item>
          <Link to="/items/" >Items</Link>
        </Item>
        <Item>
          <Link to="/stores/" >Local Stores</Link>
        </Item>    
      </NavLinks>
    </Topnav>
    </NavWrap>
  );
};

export default NavBar;