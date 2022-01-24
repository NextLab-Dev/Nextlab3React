import Navigation from "./Navigation";

const NavbarContact = () => {
  const officeImg = require("./img/Office.jpg");
  return (
    <header className="imageContainer">
      <img src={officeImg} alt="Office" className="navImageStyle" />
      <div className="insideObjectFirst">
        <Navigation />
      </div>
    </header>
  );
};

export default NavbarContact;
