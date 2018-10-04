import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// Pages

// Components

export class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // user is NOT logged in
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    // user is logged in
    return (
      <React.Fragment>
        <h1>Dashboard</h1>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
