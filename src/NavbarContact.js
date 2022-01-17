import Navigation from "./Navigation";

const NavbarContact = () => {
  const contactImg = require("./img/Contact.jpg");
  return (
    <header className="imageContainer">
      <img src={contactImg} alt="Team" className="navImageStyle" />
      <div className="insideObjectFirst">
        <Navigation />
      </div>
    </header>
  );
};

export default NavbarContact;
