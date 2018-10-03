import React, { Component } from "react";

export class RegisterThanksPage extends Component {
  render() {
    return (
      <div>
        <h1>Thank you for signing up!</h1>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default RegisterThanksPage;
