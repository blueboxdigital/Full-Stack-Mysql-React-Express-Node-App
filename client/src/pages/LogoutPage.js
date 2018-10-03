import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class LogoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      isLoggedIn: false,
      auth: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    function getCookie(name) {
      var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      if (match) return match[2];
    }

    const authCookie = getCookie("auth");

    if (authCookie) {
      console.log("auth cookie is there");
      this.setState({ isLoggedIn: true, auth: authCookie });
    }
  }

  //

  handleClick = e => {
    e.preventDefault();
    fetch("http://localhost:3001/api/logout", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then(res => {
      if (res.ok) {
        document.cookie = "auth=;";
        this.setState({ redirect: true });
      }
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    );
  }
}

export default LogoutPage;
