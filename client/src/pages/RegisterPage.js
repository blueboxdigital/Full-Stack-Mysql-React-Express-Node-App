import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
      last: "",
      email: "",
      password: "",
      redirect: false
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange = e => {
    this.setState({ first: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ last: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3001/api/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        password: this.state.password
      })
    }).then(res => {
      if (res.ok) {
        this.setState({ redirect: true });
      }
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/register-thank-you" />;
    }
    return (
      <div>
        <h1>Signup Page</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
            </li>
            <li>
              <label htmlFor="">Last Name</label>
              <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
            </li>
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
      </div>
    );
  }
}

export default RegisterPage;
