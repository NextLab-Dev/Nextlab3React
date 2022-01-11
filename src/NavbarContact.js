import Navigation from "./Navigation";

const NavbarContact = () => {
  const contactImg = require("./img/Contact.jpg");
  return (
    <div className="imageContainer">
      <img src={contactImg} alt="Team" className="navImageStyle" />
      <div className="insideObjectFirst">
        <Navigation />
      </div>
    </div>
  );
};

export default NavbarContact;
