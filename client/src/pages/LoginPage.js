import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
      loginError: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(res => {
      if (res.ok) {
        this.setState({ redirect: true });
      }
      return this.setState({ loginError: true });
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    var loginError;
    if (this.state.loginError) {
      loginError = (
        <div className="error">
          <p>Invalid email or password</p>
        </div>
      );
    }

    return (
      <div>
        <h1>Login Page</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="">Email</label>
              <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
            </li>
            <li>
              <label htmlFor="">Password</label>
              <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
            </li>
            <li>
              <button type="submit">Submit</button>
            </li>
          </ul>
        </form>
        {loginError}
      </div>
    );
  }
}

export default LoginPage;
