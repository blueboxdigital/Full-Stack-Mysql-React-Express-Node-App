import React, { Component } from "react";

export class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      isLoggedIn: false,
      isLoading: true,
      auth: "",
      user: [],
      selectedCarMake: this.props.makes[0].value,
      selectedCarModel: "",
      models: []
    };

    this.handleCarMakeChange = this.handleCarMakeChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    function getCookie(name) {
      var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      if (match) return match[2];
    }

    const authCookie = getCookie("auth");

    if (authCookie) {
      //   console.log("auth cookie is there");
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

    this.props.cars.map(make => {
      if (make.value === this.state.selectedCarMake) {
        return this.setState({ models: make.models });
      }
    });
  }

  handleCarMakeChange(e) {
    e.preventDefault();
    this.setState({ selectedCarMake: e.target.value });
    this.props.cars.map(make => {
      if (make.value === this.state.selectedCarMake) {
        return this.setState({ models: make.models });
      }
    });
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <h1>Profile Page</h1>
        <h3>
          {user.first} {user.last}
        </h3>
        <a href="">
          <img src={user.thumbnail || "https://via.placeholder.com/200x200"} alt="" />
          <p>
            <small>Upload new image</small>
          </p>
        </a>

        <form action="">
          <ul>
            <li>
              <label htmlFor="first">First Name</label>
              <input type="text" name="first" />
            </li>
            <li>
              <label htmlFor="last">Last Name</label>
              <input type="text" name="last" />
            </li>
            <li>
              <label htmlFor="carMake">Car Make</label>
              <select
                name="carMake"
                value={this.state.selectedCarMake}
                onChange={this.handleCarMakeChange}
              >
                {this.props.makes.map(make => {
                  return (
                    <option key={make.value} value={make.value}>
                      {make.title}
                    </option>
                  );
                })}
              </select>
            </li>
            <li>
              <label htmlFor="carModel">Car Model</label>
              <select name="carModel" value={this.state.selectedCarModel}>
                {this.state.models.map(model => {
                  return (
                    <option key={model.value} value={model.value}>
                      {model.title}
                    </option>
                  );
                })}
              </select>
            </li>
            <li>
              <label htmlFor="carYear">Car Year</label>
              <input
                type="number"
                min="1880"
                max={`${new Date().getFullYear() + 1}`}
                name="carYear"
              />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default AccountPage;
