const NavbarRow = () => {
  const office = require("./img/darkOffice.jpg");
//   const juneoVideo = require("./img/landingVideo.mp4");
  return (
    <div className="imageContainer">
      {/* <video src={juneoVideo} autoPlay loop playsInline muted></video> */}
      <img src={office} alt="Office" />
      <div className="insideObjectFirst">
        <nav className="navbar navbar-expand-sm navbar-dark">
          <h1 className="companyName">
            Nextlab 3
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navHeaderCollapse"
            aria-controls="navHeaderCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navHeaderCollapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> */}
            </ul>
          </div>
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
