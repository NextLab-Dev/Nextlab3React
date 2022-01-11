import Navigation from "./Navigation";

const NavbarTeams = () => {
  const teamImg = require("./img/Team.jpg");
  return (
    <div className="imageContainer">
      <img src={teamImg} alt="Office" className="navImageStyle" />
      <div className="insideObjectFirst">
        <Navigation />
      </div>
    </div>
  );
};

export default NavbarTeams;
