import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import AccountPage from "./pages/AccountPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterThanksPage from "./pages/RegisterThanksPage";
import Cars from "./data/cars.json";
//import makeArray from "./data/cars";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makes: [
        {
          value: "ACURA",
          title: "Acura"
        },
        {
          value: "ALFA",
          title: "Alfa Romeo"
        },
        {
          value: "AMC",
          title: "AMC"
        },
        {
          value: "ASTON",
          title: "Aston Martin"
        },
        {
          value: "AUDI",
          title: "Audi"
        },
        {
          value: "AVANTI",
          title: "Avanti"
        },
        {
          value: "BENTL",
          title: "Bentley"
        },
        {
          value: "BMW",
          title: "BMW"
        },
        {
          value: "BUICK",
          title: "Buick"
        },
        {
          value: "CAD",
          title: "Cadillac"
        },
        {
          value: "CHEV",
          title: "Chevrolet"
        },
        {
          value: "CHRY",
          title: "Chrysler"
        },
        {
          value: "DAIHAT",
          title: "Daihatsu"
        },
        {
          value: "DATSUN",
          title: "Datsun"
        },
        {
          value: "DELOREAN",
          title: "DeLorean"
        },
        {
          value: "DODGE",
          title: "Dodge"
        },
        {
          value: "EAGLE",
          title: "Eagle"
        },
        {
          value: "FER",
          title: "Ferrari"
        },
        {
          value: "FIAT",
          title: "FIAT"
        },
        {
          value: "FISK",
          title: "Fisker"
        },
        {
          value: "FORD",
          title: "Ford"
        },
        {
          value: "FREIGHT",
          title: "Freightliner"
        },
        {
          value: "GEO",
          title: "Geo"
        },
        {
          value: "GMC",
          title: "GMC"
        },
        {
          value: "HONDA",
          title: "Honda"
        },
        {
          value: "AMGEN",
          title: "HUMMER"
        },
        {
          value: "HYUND",
          title: "Hyundai"
        },
        {
          value: "INFIN",
          title: "Infiniti"
        },
        {
          value: "ISU",
          title: "Isuzu"
        },
        {
          value: "JAG",
          title: "Jaguar"
        },
        {
          value: "JEEP",
          title: "Jeep"
        },
        {
          value: "KIA",
          title: "Kia"
        },
        {
          value: "LAM",
          title: "Lamborghini"
        },
        {
          value: "LAN",
          title: "Lancia"
        },
        {
          value: "ROV",
          title: "Land Rover"
        },
        {
          value: "LEXUS",
          title: "Lexus"
        },
        {
          value: "LINC",
          title: "Lincoln"
        },
        {
          value: "LOTUS",
          title: "Lotus"
        },
        {
          value: "MAS",
          title: "Maserati"
        },
        {
          value: "MAYBACH",
          title: "Maybach"
        },
        {
          value: "MAZDA",
          title: "Mazda"
        },
        {
          value: "MCLAREN",
          title: "McLaren"
        },
        {
          value: "MB",
          title: "Mercedes-Benz"
        },
        {
          value: "MERC",
          title: "Mercury"
        },
        {
          value: "MERKUR",
          title: "Merkur"
        },
        {
          value: "MINI",
          title: "MINI"
        },
        {
          value: "MIT",
          title: "Mitsubishi"
        },
        {
          value: "NISSAN",
          title: "Nissan"
        },
        {
          value: "OLDS",
          title: "Oldsmobile"
        },
        {
          value: "PEUG",
          title: "Peugeot"
        },
        {
          value: "PLYM",
          title: "Plymouth"
        },
        {
          value: "PONT",
          title: "Pontiac"
        },
        {
          value: "POR",
          title: "Porsche"
        },
        {
          value: "RAM",
          title: "RAM"
        },
        {
          value: "REN",
          title: "Renault"
        },
        {
          value: "RR",
          title: "Rolls-Royce"
        },
        {
          value: "SAAB",
          title: "Saab"
        },
        {
          value: "SATURN",
          title: "Saturn"
        },
        {
          value: "SCION",
          title: "Scion"
        },
        {
          value: "SMART",
          title: "smart"
        },
        {
          value: "SRT",
          title: "SRT"
        },
        {
          value: "STERL",
          title: "Sterling"
        },
        {
          value: "SUB",
          title: "Subaru"
        },
        {
          value: "SUZUKI",
          title: "Suzuki"
        },
        {
          value: "TESLA",
          title: "Tesla"
        },
        {
          value: "TOYOTA",
          title: "Toyota"
        },
        {
          value: "TRI",
          title: "Triumph"
        },
        {
          value: "VOLKS",
          title: "Volkswagen"
        },
        {
          value: "VOLVO",
          title: "Volvo"
        },
        {
          value: "YUGO",
          title: "Yugo"
        }
      ],
      models: [],
      cars: Cars
    };
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register-thank-you" component={RegisterThanksPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route
            path="/profile"
            render={() => (
              <ProfilePage
                makes={this.state.makes}
                models={this.state.models}
                cars={this.state.cars}
              />
            )}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
