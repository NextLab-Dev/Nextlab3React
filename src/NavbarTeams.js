import Navigation from "./Navigation";

const NavbarTeams = () => {
  const teamImg = require("./img/Team.jpg");
  return (
    <header className="imageContainer">
      <img src={teamImg} alt="Team" className="navImageStyle" />
      <div className="insideObjectFirst">
        <Navigation />
      </div>
    </header>
  );
};

export default NavbarTeams;
