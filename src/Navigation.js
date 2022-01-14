import { NavLink } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';

const Navigation = () => {
  const companyLogo = require("./img/Signature-02.png");
  const serbiaFlag = require("./img/serbia.png");
  const englishFlag = require("./img/england.png");

  const language = useSelector((state) => state.language);
  const home = useSelector((state) => state.navHome);
  const teams = useSelector((state) => state.navTeams);
  const contact = useSelector((state) => state.navContact);
  const chooseLang = useSelector((state) => state.navLang);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
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
                {home}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link navLinksStyle" to="/teams" activeClassName="active">
              {teams}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link navLinksStyle" to="/contact" activeClassName="active">
                {contact}
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
            {chooseLang}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button" onClick={(() => dispatch({type:'TOGGLE_EN_LANGUAGE'}))}>English</button></li>
            <li><button className="dropdown-item" type="button" onClick={(() => dispatch({type:'TOGGLE_SR_LANGUAGE'}))}>Srpski</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default (Navigation);
