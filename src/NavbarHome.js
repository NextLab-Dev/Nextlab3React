import Navigation from "./Navigation";
import { useSelector } from 'react-redux';

const NavbarHome = () => {
  const juneoVideo = require("./img/juneoMovie.mp4");
  const language = useSelector((state) => state.language);
  return (
    <header className="imageContainer">
      <video src={juneoVideo} autoPlay loop playsInline muted></video>
      <div className="insideObjectFirst">
        <Navigation />
      </div>
      {(language === true)
        ? <marquee width="80%" direction="left" className="insideObjectSecond">
          <h2>Marketing and Support for</h2>
          <h2>a Multi Chain Economy</h2>
        </marquee>
        : <marquee width="80%" direction="left" className="insideObjectSecond">
          <h2>Marketing i Podrška za</h2>
          <h2>Multi Chain Ekonomiju</h2>
        </marquee>
      }
    </header>
  );
};

export default NavbarHome;
