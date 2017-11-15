import React, { Component } from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import {
  saveAuthTokens,
  setAxiosDefaults,
  userIsLoggedIn
} from "./util/SessionHeaderUtil";

import styled from "styled-components";
import axios from "axios";

//START--
import Home from "./components/Home";
import SignUpLogIn from "./components/SignUpLogIn";
import ItemsList from "./components/ItemsList";
import Navbar from "./components/Navbar";
import ItemCollectionList from "./components/ItemCollectionList"
import StorageItemList from "./components/StorageItemsList"
//END--OF--IMPORTED--COMPONENTS
const BodyWrap = styled.div`
  background-color: red;
  min-height: 100vh;

  height: auto !important;
  height: 100%;
  margin: 0 auto -20px;
`;

class App extends Component {
  state = {
    signedIn: false
  };

  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn();
    } catch (error) {
      console.log(error);
    }
  }

  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      };
      const response = await axios.post("/auth", payload);
      saveAuthTokens(response.headers);

      this.setState({ signedIn: true });
    } catch (error) {
      console.log(error);
    }
  };

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      };
      const response = await axios.post("/auth/sign_in", payload);
      saveAuthTokens(response.headers);
      const items = await this.getItems();

      this.setState({ signedIn: true});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const SignUpLogInComponent = () => (
      <SignUpLogIn signUp={this.signUp} signIn={this.signIn} />
    );

    const ItemsComponent = () => (
      <ItemsList items={this.state.items} createItem={this.createItem} />
    );
    const HomeComponent = () => (<Home />)

    const ItemCollectionComponent = () => (
            <ItemCollectionList />
    )
    const ItemStorageComponent = () => (
      <StorageItemList/>
    )

    return (
      <Router>
        <BodyWrap>
          <Navbar />
          <Switch>
            <Route exact path="/signUp" render={SignUpLogInComponent} />
            <Route exact path="/items" render={ItemsComponent} />
            <Route exact path="/collections" render={ItemCollectionComponent}/>
            <Route exact path="/storage-items" render={ItemStorageComponent} />
            <Route path="/" render={Home}/>
          </Switch>
        </BodyWrap>
      </Router>
    );
  }
}

export default App;
