import React, { Component } from "react";

export class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const user = this.props.currentUser;
    return (
      <React.Fragment>
        <h1>Profile Page</h1>
        <h3>
          {user.first} {user.last}
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
