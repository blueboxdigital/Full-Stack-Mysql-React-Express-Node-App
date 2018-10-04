import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import AccountPage from "./pages/AccountPage";
import ProfilePage from "./pages/ProfilePage";
// Components
import Header from "./components/Header";
import Main from "./components/Main";

import Footer from "./components/Footer";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header/>
          <Main>
            <Route exact path="/" component={HomePage}/>
            <Route path="/users" component={UsersPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/account" component={AccountPage}/>
            <Route path="/logout" component={LogoutPage}/>
            <Route
              path="/profile"
              render={() => (<ProfilePage
              makes={this.state.makes}
              models={this.state.models}
              cars={this.state.cars}/>)}/>
          </Main>
          <Footer/>

        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
