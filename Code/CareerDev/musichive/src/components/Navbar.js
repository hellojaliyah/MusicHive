import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';

const Navbar = (props) => {
  return (
    <div className="header">
    <img className="App-logo" src={logo} alt="the logo"/>
      <h1 className="title">
        <Link to="/">Welcome to MusicHive!</Link>
      </h1>
      <div className="navigation">
        <Link to="/addResource">Upload your own</Link>
      </div>
    </div>
  );
};




export default Navbar;