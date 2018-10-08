import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
// Pages Components

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
        <div className="db-grid">
          <div className="db-grid__item">
            <Link to="/pages" className="block block--db">
              <div className="block__content">
                <h4 className="block__title block__title--db">Pages</h4>
              </div>
            </Link>
          </div>
          <div className="db-grid__item">
            <Link to="/pages" className="block block--db">
              <div className="block__content">
                <h4 className="block__title block__title--db">Other</h4>
              </div>
            </Link>
          </div>
          <div className="db-grid__item">
            <Link to="/pages" className="block block--db">
              <div className="block__content">
                <h4 className="block__title block__title--db">Other</h4>
              </div>
            </Link>
          </div>
          <div className="db-grid__item">
            <Link to="/pages" className="block block--db">
              <div className="block__content">
                <h4 className="block__title block__title--db">Other</h4>
              </div>
            </Link>
          </div>
          <div className="db-grid__item">
            <Link to="/forms" className="block block--db">
              <div className="block__content">
                <h4 className="block__title block__title--db">Forms</h4>
              </div>
            </Link>
          </div>
          <div className="db-grid__item">
            <Link to="/pages" className="block block--db">
              <div className="block__content">
                <h4 className="block__title block__title--db">Other</h4>
              </div>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
