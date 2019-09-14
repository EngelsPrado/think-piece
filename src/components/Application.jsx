import React, { Component } from "react";
import Posts from "./Posts";
import Authentication from "./Authentication";
//import { TestTheme } from "./TestTheme";

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication></Authentication>
        <Posts />
      </main>
    );
  }
}

export default Application;
