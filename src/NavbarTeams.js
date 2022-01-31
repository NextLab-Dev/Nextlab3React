import Navigation from "./Navigation";

const NavbarTeams = () => {
  const teamImg = require("./img/Team.webp");
  return (
    <header className="imageContainer">
      <img src={teamImg} alt="Team" className="navImage" />
      <div className="insideObjectFirst">
        <Navigation />
      </div>
    </header>
  );
};

export default NavbarTeams;
