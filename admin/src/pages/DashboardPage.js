import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
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
        <div className="db-grid">
          <div className="db-grid__item">
            <Link to="/pages" className="block block--db">
              <h4 className="block__title block__title--db">Pages</h4>
            </Link>
          </div>
          <div className="db-grid__item">
            <div className="block block--db">
              <h4 className="block__title block__title--db">Item</h4>
            </div>
          </div>
          <div className="db-grid__item">
            <div className="block block--db">
              <h4 className="block__title block__title--db">Item</h4>
            </div>
          </div>
          <div className="db-grid__item">
            <div className="block block--db">
              <h4 className="block__title block__title--db">Item</h4>
            </div>
          </div>
          <div className="db-grid__item">
            <div className="block block--db">
              <h4 className="block__title block__title--db">Item</h4>
            </div>
          </div>
          <div className="db-grid__item">
            <div className="block block--db">
              <h4 className="block__title block__title--db">Item</h4>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
