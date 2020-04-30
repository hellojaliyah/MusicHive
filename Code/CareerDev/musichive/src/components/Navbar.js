import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';

const Navbar = (props) => {
  return (
    <div className="header">
      {/* <header className="App-header"> */}
    <img className="App-logo" src={logo} alt="the logo"/>
      {/* </header> */}
      <h1 className="title">
        <Link to="/">Welcome to MusicHive!</Link>
      </h1>
      <div className="navigation">
        <Link to="/addResource">Add Resource</Link>
      </div>
    </div>
  );
};




export default Navbar;