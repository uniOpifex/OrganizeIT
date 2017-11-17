import React, { Component } from "react";
import styled from "styled-components";

import Login from "./Login";
import SignUp from "./SignUp";
import SignUpLogInPlaceholder from "./SignUpLogInPlaceholder";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  border-radius: 10px;
  align-items: center;
  height: 100vh;
`;

const LoginItem = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: blue;
  padding: 30px;
  border-radius: 20px;
  flex-direct: column;

  form {
    flex-direction: row;
    text-align: left;
  }
`;

class SignUpLogIn extends Component {
  state = {
    showLogin: true
  };

  toggleLogin = () => {
    this.setState({ showLogin: !this.state.showLogin });
  };
  state = {
    email: "",
    password: "",
    password_confirmation: ""
  };

  signUp = event => {
    event.preventDefault();
    this.props.signUp(
      this.state.email,
      this.state.password,
      this.state.password_confirmation
    );
  };

  signIn = event => {
    event.preventDefault();
    this.props.signIn(this.state.email, this.state.password);
  };

  handleChange = event => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  render() {
    const SignOut = props => {
      if (props.signedIn === true) {
        return alert("you are logged in");
      } else {
        return null;
      }
    };

    const placeholder = (<SignUpLogInPlaceholder showLogin={this.state.showLogin} toggleLogin={this.toggleLogin}/>)
    

    return (
      <LoginWrapper>
        <div className="flex-container">
          <SignOut />
          <LoginItem>
            <form>
              <div className="flex-item">
                <label htmlFor="email">
                  <i className="fa fa-envelope" aria-hidden="true" /> E-mail:{" "}
                </label>
                <input
                  className="form-field"
                  onChange={this.handleChange}
                  type="text"
                  name="email"
                  value={this.state.email}
                />
              </div>
              <div className="flex-item">
                <label htmlFor="password">
                  <i class="fa fa-lock" aria-hidden="true" /> Password:{" "}
                </label>
                <input
                  className="form-field"
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                />
              </div>
              <div className="flex-item">
                <label htmlFor="password_confirmation">
                  Confirm Password:{" "}
                </label>
                <input
                  className="form-field"
                  onChange={this.handleChange}
                  type="password"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                />
              </div>

              <button onClick={this.signUp}>Sign Up</button>
              <button onClick={this.signIn}>Log In</button>
            </form>
          </LoginItem>
        </div>
      </LoginWrapper>
    );
  }
}

export default SignUpLogIn;
