import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const companyLogo = require("./img/Signature-02.png");
  const serbiaFlag = require("./img/serbia.png");
  const englishFlag = require("./img/england.png");
  // const [home, setHome] = useState('Home');
  const [language, setLanguage] = useState(true);

  const handleEnLanguage = () => {
    setLanguage(true);
    // setEnLanguage(true);
    // setHome("Home");
  }
  const handleSrLanguage = () => {
    setLanguage(false);
    // setEnLanguage(false);
    // setHome("O nama");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark mx-5">
      <img src={companyLogo} className="logoStyle" alt="Nextlab 3 logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link navLinksStyle" to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link navLinksStyle" to="/teams" activeClassName="active">
                Teams
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link navLinksStyle" to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="btn dropdown-toggle p-0 btnStyle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          { 
            (language === true)
              ? <img src={englishFlag} className="flagStyle" alt="United Kingdom Flag" />
              : <img src={serbiaFlag} className="flagStyle" alt="Serbian Flag" />
          }
            Language
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button" onClick={handleEnLanguage}>English</button></li>
            <li><button className="dropdown-item" type="button" onClick={handleSrLanguage}>Srpski</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
