import React, { Component } from "react";

export class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      isLoggedIn: false,
      isLoading: true,
      auth: "",
      user: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    function getCookie(name) {
      var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      if (match) return match[2];
    }

    const authCookie = getCookie("auth");

    if (authCookie) {
      //   console.log("auth cookie is there");
      this.setState({ isLoggedIn: true, auth: authCookie });
    }

    fetch("http://localhost:3001/api/currentUser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => this.setState({ user: data, isLoading: false }))
      .catch(function(error) {
        // If there is any error you will catch them here
      });
  }

  render() {
    const user = this.state.user;

    return (
      <div>
        <h1>Account Page</h1>
        {/*console.log(this.state.user)*/}
        <h3>
          {user.first} {user.last}
        </h3>
        <h4>{this.state.user.email}</h4>
      </div>
    );
  }
}

export default AccountPage;
