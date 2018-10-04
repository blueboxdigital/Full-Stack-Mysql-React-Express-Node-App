import React, { Component } from "react";

export class UsersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:3001/api/users")
      .then(res => res.json())
      .then(res => this.setState({ users: res, isLoading: false }))
      .catch(function(error) {
        // If there is any error you will catch them here
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>Users Page</h1>
          <p>Loading ...</p>
        </div>
      );
    }
    return (
      <div>
        <h1>Users Page</h1>
        <ul>
          {this.state.users.map(user => {
            return (
              <li key={user.id}>
                <a>
                  {user.first} {user.last}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UsersPage;
