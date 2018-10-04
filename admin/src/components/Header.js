import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };

        this.handleLogout = this
            .handleLogout
            .bind(this);
    }

    componentDidMount() {
        function getCookie(name) {
            var match = document
                .cookie
                .match(new RegExp("(^| )" + name + "=([^;]+)"));
            if (match) 
                return match[2];
            }
        
        if (getCookie("auth")) {
            console.log("auth cookie is there");
            this.setState({isLoggedIn: true});
        }
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
                document.cookie = "auth=;";
                this.setState({redirect: true});
            }
        });
    };

    render() {
        let isLoggedIn;
        if (this.state.isLoggedIn) {
            isLoggedIn = (
                <a href="/" className="btn" onClick={this.handleLogout}>Logout</a>
            );
        } else {
            isLoggedIn = (
                <a href="/login" className="btn">Login</a>
            );
        }

        if (this.state.redirect) {
            return <Redirect to="/"/>;
        }
        return (
            <div className="header">
                <ul className="header__menu">
                    <li>
                        {isLoggedIn}
                    </li>
                </ul>
            </div>
        )

    }
}

export default Header