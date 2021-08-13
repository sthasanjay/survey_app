import React from "react";
import logo from "../img/Logo.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="container-fluid homePage">
      <img src={logo} alt="" />

      <button className="btn">
        <Link className="active" to="/question">
          Start your Survey
        </Link>
      </button>
    </div>
  );
};

export default HomePage;
