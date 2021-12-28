import Navigation from "./Navigation";

const NavbarRow = () => {
  const darkOffice = require("./img/darkOffice.jpg");
//   const juneoVideo = require("./img/landingVideo.mp4");
  return (
    <div className="imageContainer">
      {/* <video src={juneoVideo} autoPlay loop playsInline muted></video> */}
      <img src={darkOffice} alt="Office" />
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

export default NavbarRow;
