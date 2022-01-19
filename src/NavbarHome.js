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
        ? <div className="insideObjectSecond">
          <h2>Marketing and Support for a Multi Chain Economy</h2>
        </div>
        : <div className="insideObjectSecond">
          <h2>Marketing i Podrška za Multi Chain Ekonomiju</h2>
        </div>
      }
    </header>
  );
};

export default NavbarHome;
