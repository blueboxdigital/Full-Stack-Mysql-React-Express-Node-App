import React, { Component } from "react";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    function getCookie(name) {
      var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      if (match) return match[2];
    }

    if (getCookie("auth")) {
      console.log("auth cookie is there");
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Home Page</h1>
          <p>
            <strong>You Are Signed In</strong>
          </p>
          <ul>
            <li>
              <a href="/logout">Logout</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div>
        <h1>Home Page</h1>
        <p>
          <strong>You Are Not Signed In</strong>
        </p>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Sign up</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
