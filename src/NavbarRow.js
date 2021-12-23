const NavbarRow = () => {
    const office = require("./img/darkOffice.jpg");
    return (
      <div className="imageContainer">
        <img src={office} autoPlay loop playsInline muted></img>
        <div className="insideObjectFirst">
          <nav className="navbar navbar-dark navbar-expand-sm">
            <h1 className="titleStyle">Nextlab 3</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link linkStyle" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link linkStyle" href="#">
                    Teams
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link linkStyle" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div> */}
          </nav>
        </div>
  
        <div className="insideObjectSecond">
          <p>Ideas Focused on</p>
          <p>Blockchain, Cryptocurrency and</p>
          <p>Wallets Development</p>
        </div>
      </div>
    );
  };
  
  export default NavbarRow;
  