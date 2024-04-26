import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TopNavigation.css";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

class TopNavigation extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="header-size">
        <nav>
          <img src={logo} alt="Logo" id="logo" />
          <div>
            <ul id="navbar" className={this.state.clicked ? "active" : ""}>
              <li>
                <Link to={"/"} className="nav-link">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link to={"/"} className="nav-link">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to={"/"} className="nav-link">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link to={"/"} className="nav-link">
                  CAREERS
                </Link>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <FontAwesomeIcon
              icon={this.state.clicked ? faTimes : faBars}
              id="bar"
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default TopNavigation;
