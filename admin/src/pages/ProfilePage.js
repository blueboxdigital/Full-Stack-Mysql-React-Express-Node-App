import React, { Component } from "react";

export class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      user: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

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
      <React.Fragment>
        <h1>Profile Page</h1>
        <h3>
          {user.first}
          {user.last}
        </h3>
        <span>
          <img src={user.thumbnail || "https://via.placeholder.com/200x200"} alt="" />
          <p>
            <small>Upload new image</small>
          </p>
        </span>
      </React.Fragment>
    );
  }
}

export default AccountPage;
