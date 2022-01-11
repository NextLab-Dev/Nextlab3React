import Navigation from "./Navigation";

const NavbarHome = () => {
  const juneoVideo = require("./img/juneoMovie.mp4");
  return (
    <div className="imageContainer">
      <video src={juneoVideo} autoPlay loop playsInline muted></video>
      <div className="insideObjectFirst">
        <Navigation />
      </div>

      <div className="insideObjectSecond">
        <p>Ideas Focused on</p>
        <p>Blockchain, Cryptocurrency and</p>
        <p>Wallets Development</p>
      </div>
    </div>
  );
};

export default NavbarHome;
