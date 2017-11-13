import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import {saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "./util/SessionHeaderUtil";

import SignUpLogIn from "./components/SignUpLogIn";
import ItemsList from "./components/ItemsList"
import axios from "axios";

class App extends Component {
  state = {
    signedIn: false,
    items: []
  };

  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()
      
      let items = [];
      if (this.state.signedIn) {
        setAxiosDefaults()
        
        items = await this.getItems();
      }

      this.setState({
        items,
        signedIn

      });
    } catch (error) {
      console.log(error);
    }
  }

  getItems = async () => {
    try {
      const response = await axios.get("/items");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      };
      const response = await axios.post("/auth", payload);
      saveAuthTokens(response.headers)
      
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
      saveAuthTokens(response.headers)
      const items = await this.getItems()
      
      this.setState({ signedIn: true, items });
    } catch (error) {
      console.log(error);
    }
  };

  createItem = async (title, content,userId) => {
    try {
      const payload = {
        title,
        content,
        userId
      };
      await axios.post("/items/${postId}", payload);
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const SignUpLogInComponent = () => (
      <SignUpLogIn signUp={this.signUp} signIn={this.signIn} />
    );

    const ItemsComponent = () => (
      <ItemsList
          posts={this.state.items}/>
  )

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/signUp" render={SignUpLogInComponent} />
            <Route exact path="/items" render={ItemsComponent}/>

          </Switch>

          {this.state.signedIn ? <Redirect to="/posts"/> : <Redirect to="/signUp" />}
        </div>
      </Router>
    );
  }
}

export default App;
