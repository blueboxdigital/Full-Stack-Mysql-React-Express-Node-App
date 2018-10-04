import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // user is logged in
    if (this.props.isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }
    // user is NOT logged in
    return (
      <React.Fragment>
        <h2>Welcome</h2>
        <p>
          <strong>
            Please <Link to="/login">Login</Link> or <Link to="/register">Signup</Link>
          </strong>
        </p>
      </React.Fragment>
    );
  }
}

export default HomePage;
