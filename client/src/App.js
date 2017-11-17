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
  userIsLoggedIn,
  clearAuthTokens
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
import StorageItemViewList from "./components/StorageItemViewList"
//END--OF--IMPORTED--COMPONENTS
const BodyWrap = styled.div`
  background-color: red;
  margin: 0 auto -20px;
  height: 100%;
`;

class App extends Component {
  state = {
    signedIn: false
  };

  async componentWillMount() {
    try {
        const signedIn = userIsLoggedIn()

        if (signedIn) {
            setAxiosDefaults()
        }

        this.setState({
            signedIn,
        })
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
        }
        const response = await axios.post('/auth', payload)
        saveAuthTokens(response.headers)

        this.setState({
            signedIn: true,
        })

    } catch (error) {
        console.log(error)
    }
}

signIn = async (email, password) => {
    try {
        const payload = {
            email,
            password
        }
        const response = await axios.post('/auth/sign_in', payload)
        saveAuthTokens(response.headers)

        this.setState({
            signedIn: true,
            
        })

    } catch (error) {
        console.log(error)
    }
}

signOut = async (event) => {
    try {
        event.preventDefault()

        await axios.delete('/auth/sign_out')

        clearAuthTokens();

        this.setState({signedIn: false})
    } catch (error) {
        console.log(error)
    }
}


  render() {
    const SignUpLogInComponent = () => (
      <SignUpLogIn 
       signUp={this.signUp}
        signIn={this.signIn}
        signOut={this.signOut}/> 
    );

    const ItemsComponent = () => (
      <ItemsList createItem={this.createItem} />
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
          <Navbar signedIn={this.state.signedIn} signOut={this.signOut}/>
          <Switch>
            <Route exact path="/" render={Home}/>
            <Route exact path="/signUp" render={SignUpLogInComponent} />
            <Route exact path="/items" render={ItemsComponent} />
            <Route exact path="/collections" render={ItemCollectionComponent}/>
            <Route exact path="/storage-items" render={ItemStorageComponent} />
            <Route path="/storage-items/:id/items" render={StorageItemViewList}/>
          </Switch>
        </BodyWrap>
      </Router>
    );
  }

}
export default App;
