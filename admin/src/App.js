import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
// import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PagesPage from "./pages/PagesPage";
import CreatePagePage from "./pages/CreatePagePage";
import EditPagePage from "./pages/EditPagePage";
import FormsPage from "./pages/FormsPage";
import PlayersPage from "./pages/PlayersPage";
import ProductsPage from "./pages/ProductsPage";
// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      auth: "",
      user: []
    };

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    function getCookie(name) {
      var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      if (match) return match[2];
    }

    const authCookie = getCookie("auth");

    if (authCookie) {
      //   console.log(`auth cookie is there: ${this.state.auth}`);
      this.setState({ isLoggedIn: true, auth: authCookie });
    }

    fetch("http://localhost:3001/api/currentUser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => this.setState({ user: data, isLoading: false }))
      .catch(function(error) {
        // If there is any error you will catch them here
      });
  }

  onLogin() {
    function getCookie(name) {
      var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      if (match) return match[2];
    }

    const authCookie = getCookie("auth");

    this.setState({ isLoggedIn: true, auth: authCookie });
  }

  onLogout() {
    document.cookie = "auth=;";

    function getCookie(name) {
      var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      if (match) return match[2];
    }

    const authCookie = getCookie("auth");

    this.setState({ isLoggedIn: false, auth: authCookie });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header
            isLoggedIn={this.state.isLoggedIn}
            onLogout={this.onLogout}
            currentUser={this.state.user}
          />
          <Main>
            <Route exact path="/" render={() => <HomePage isLoggedIn={this.state.isLoggedIn} />} />

            <Route
              path="/register"
              render={() => (
                <RegisterPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} />
              )}
            />

            <Route
              path="/account"
              render={() => <AccountPage isLoggedIn={this.state.isLoggedIn} />}
            />

            <Route
              path="/login"
              render={() => <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} />}
            />

            <Route
              path="/profile"
              render={() => (
                <ProfilePage isLoggedIn={this.state.isLoggedIn} currentUser={this.state.user} />
              )}
            />

            <Route
              path="/dashboard"
              render={() => <DashboardPage isLoggedIn={this.state.isLoggedIn} />}
            />

            <Route
              path="/forgot-password"
              render={() => <PasswordResetPage isLoggedIn={this.state.isLoggedIn} />}
            />

            <Route path="/pages" render={() => <PagesPage isLoggedIn={this.state.isLoggedIn} />} />

            <Route
              path="/create-page"
              render={() => (
                <CreatePagePage isLoggedIn={this.state.isLoggedIn} currentUser={this.state.user} />
              )}
            />

            <Route
              path="/edit-page/:id"
              render={props => (
                <EditPagePage
                  isLoggedIn={this.state.isLoggedIn}
                  {...props}
                  currentUser={this.state.user}
                />
              )}
            />

            <Route
              path="/players"
              render={() => <PlayersPage isLoggedIn={this.state.isLoggedIn} />}
            />

            <Route path="/forms" render={() => <FormsPage isLoggedIn={this.state.isLoggedIn} />} />

            <Route
              path="/products"
              render={() => <ProductsPage isLoggedIn={this.state.isLoggedIn} />}
            />
          </Main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
