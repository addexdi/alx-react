import React, { Component } from "react";
import logo from '../assets/logo.jpg';
import { getFullYear, getFooterCopy } from "../utils/utils";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
        <body className="App-body">
          <p>Login to access the full dashboard</p>
          <label>
            Email: <input type="text" name="Email" />
          </label>
          <label>
            Password: <input type="password" name="Password" />
          </label>
          <button>OK</button>
        </body>
        <footer className="App-footer">
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
        </footer>
      </div>
    );
  }
}
