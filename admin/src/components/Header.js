import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from '../assets/images/logo.svg'

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };

    this.handleLogout = this
      .handleLogout
      .bind(this);
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
        return this
          .props
          .onLogout();
      }
    });
  };

  render() {
    let isLoggedIn;
    if (this.props.isLoggedIn) {
      isLoggedIn = (
        <ul className="utility-menu">
          <li className="utility-menu__item">
            <Link to="/" className="utility-menu__link" onClick={this.handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
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
          <h1 className="header__title">
            <Link to="/"><img src={logo} alt="" className="header__logo"/></Link>
          </h1>
          {isLoggedIn}
        </div>
      </header>
    );
  }
}

export default Header;
