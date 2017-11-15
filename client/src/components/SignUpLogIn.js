import React, { Component } from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  background-color: yellow;
  
`;
const LoginItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .flex-container {
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .row {
    width: auto;
    border: 1px solid blue;
  }

  .flex-item {
    background-color: tomato;
    padding: 5px;
    width: 20px;
    height: 20px;
    margin: 10px;
    line-height: 20px;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }
`;

class SignUpLogIn extends Component {
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
    return (
      <LoginWrapper>
        <div className="flex-container">
          <div className="row">
            <form>
              <div className="flex-item">
                <label htmlFor="email">
                  <i class="fa fa-envelope" aria-hidden="true" /> E-mail:{" "}
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
          </div>
        </div>
      </LoginWrapper>
    );
  }
}

export default SignUpLogIn;
