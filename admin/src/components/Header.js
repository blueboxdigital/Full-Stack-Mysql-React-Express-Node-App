import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = e => {
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
        return this.props.onLogout();
      }
    });
  };

  render() {
    let isLoggedIn;
    if (this.props.isLoggedIn) {
      isLoggedIn = (
        <Link to="/" className="btn" onClick={this.handleLogout}>
          Logout
        </Link>
      );
    } else {
      isLoggedIn = (
        <ul className="utility-menu">
          <li className="utility-menu__item">
            <Link to="/login" className="utility-menu__link">
              Login
            </Link>
          </li>
          <span className="utility-menu__divider">|</span>
          <li className="utility-menu__item">
            <Link to="/register" className="utility-menu__link">
              Signup
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <header className="header">
        <div className="header__container">
          <h1>Mysql Node Express React App</h1>
          {isLoggedIn}
        </div>
      </header>
    );
  }
}

export default Header;
