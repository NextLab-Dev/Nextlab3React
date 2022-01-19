import Navigation from "./Navigation";

const NavbarContact = () => {
  const officeImg = require("./img/Office.jpg");
  return (
    <header className="imageContainer">
      <img src={officeImg} alt="Team" className="navImageStyle" />
      <div className="insideObjectFirst">
        <Navigation />
      </div>
    </header>
  );
};

export default NavbarContact;
