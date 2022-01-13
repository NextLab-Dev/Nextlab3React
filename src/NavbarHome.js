import Navigation from "./Navigation";
import { useSelector } from 'react-redux';

const NavbarHome = () => {
  const juneoVideo = require("./img/juneoMovie.mp4");
  const language = useSelector((state) => state.language);
  return (
    <div className="imageContainer">
      <video src={juneoVideo} autoPlay loop playsInline muted></video>
      <div className="insideObjectFirst">
        <Navigation />
      </div>
      {(language === true)
        ? <div className="insideObjectSecond">
          <p>Ideas Focused on</p>
          <p>Blockchain, Cryptocurrency and</p>
          <p>Wallets Development</p>
        </div>
        : <div className="insideObjectSecond">
          <p>Ideje Fokusirane na</p>
          <p>Blockchain, Kriptovalute i</p>
          <p>Digitalne Novčanike</p>
        </div>
      }
    </div>
  );
};

export default NavbarHome;
