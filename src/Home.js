import NavbarHome from "./NavbarHome";
import BottomFooterRow from "./BottomFooterRow";
import Cookie from "./Cookie";
import MetaTags from "react-meta-tags";
import { useSelector } from 'react-redux';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  AOS.init();
  const codeImg = require("./img/generator mockup.jpg");
  const projectVideo = require("./img/landingVideo.mp4");
  const language = useSelector((state) => state.language);
  const cards = [
    // dodaj source
    {
      image: require("./img/computer.png"),
      number: 4,
      firstTextEn: "Milion Serbs",
      secondTextEn: "use a computer",
      firstTextSr: "Miliona Srba",
      secondTextSr: "koristi kompjuter",
    },
    // {
    //   image: require("./img/dollar.png"),
    //   number: 7,
    //   firstTextEn: "Billion $ spending",
    //   secondTextEn: "on blockchain",
    //   firstTextSr: "Biliona $ uloženo",
    //   secondTextSr: "u blockchain",
    // },
    {
      image: require("./img/token.png"),
      number: 15,
      firstTextEn: "Thousand tokens",
      secondTextEn: "currently exist",
      firstTextSr: "Hiljada tokena",
      secondTextSr: "postoji u svetu",
    },
    {
      image: require("./img/dollar.png"),
      number: 70,
      firstTextEn: "Billion $ of crypto",
      secondTextEn: "assets are traded daily",
      firstTextSr: "Hiljada tokena",
      secondTextSr: "postoji u svetu",
    },
    {
      image: require("./img/wallet.png"),
      number: 81,
      firstTextEn: "Million people in the world",
      secondTextEn: "own a crypto wallet",
      firstTextSr: "Hiljada tokena",
      secondTextSr: "postoji u svetu",
    },
  ];
  return (
    <main>
      <NavbarHome />
      <MetaTags>
        {(language === true)
          ?
          <title>Nextlab 3 - Ideas focused on blockchain, cryptocurrency and wallets development</title>
          :
          <title>Nextlab 3 - Ideje Fokusirane na Blockchain, Kriptovalute i Digitalne Novčanike</title>
        }
      </MetaTags>
      <div className="container-fluid codeRowContainer">
        {(language === true)
          ?
          <div className="row justify-content-center">
            <div className="col-10 col-md-7 col-lg-7 col-xl-6 col-xxl-4 my-auto codeExplanation">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <p className="mb-3 codeExplanationHeader">Welcome to the future of technology!</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="codeExplanationFirst">
                      <p className="mb-0">As the Blockchain industry evolves, the number of services it enhances grows and the number of users explodes, thus becoming mainstream in a few years only.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="codeExplanationSecond">
                      <p className="mb-0"><i className="bi bi-mic"></i> We make sure we add our little grain of salt to this huge ocean of opportunities. A grain of salt with Serbian taste!</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-12 col-md-5 col-lg-5 col-xl-4 col-xxl-4 my-auto codeExplanation">
              <img src={codeImg} alt="Code" className="mockupStyle" />
            </div>
          </div>
          :
          <div className="row justify-content-center">
            <div className="col-9 col-md-5 col-lg-4 col-xl-3 my-auto codeExplanation">
              <h3 className="mb-3">Dobrodošli u budućnost tehnologije!</h3>
              <div className="codeExplanationFirst">
                <p className="mb-0">Kako se Blockchain tehnologija razvija, napredovale su</p>
                <p className="mb-0">usluge koje utiču na razvoj i privlačenje korisnika,</p>
                <p>te se smatra da će postati neizbežne za nekoliko godina.</p>
              </div>
              <div className="wrapper">
                <p className="codeExplanationSecond mb-0"><i className="bi bi-mic"></i> Uvereni smo da će rezultati našeg rada doprineti velikom okeanu informacija. </p>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-4 codeExplanation">
              <img src={codeImg} alt="Code" className="mockupStyle" />
            </div>
          </div>
        }
      </div>
      <div className="container-fluid g-0 statisticsRowContainer">
        <div className="row justify-content-center">
          {(language === true)
            ?
            <div className="col-12 col-xxl-2 statisticsTitle p-0">
              <h2 className="mb-3 mb-xxl-0">Statistics</h2>
            </div>
            :
            <div className="col-12 col-xxl-2 statisticsTitle p-0">
              <h2 className="mb-3 mb-xxl-0">Statistika</h2>
            </div>
          }
          {cards.map((card, index) => (
            <div
              key={index}
              className="col-8 col-sm-4 col-xxl-2 card text-white shadow-lg py-3 my-2"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <div className="wrapper">
                <img
                  src={card.image}
                  alt="Statistics"
                  className="imgContainer"
                />
                <div className="descriptionContainer">
                  <p className="descriptionNumber">{card.number}</p>
                  {(language === true)
                    ?
                    <div>
                      <p className="mb-0 descriptionText">{card.firstTextEn}</p>
                      <p className="mb-0 descriptionText">{card.secondTextEn}</p>
                    </div>
                    :
                    <div>
                      <p className="mb-0 descriptionText">{card.firstTextSr}</p>
                      <p className="mb-0 descriptionText">{card.secondTextSr}</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid g-0 codeRowContainer">
        <div className="row justify-content-center">
          {(language === true)
            ?
            <div className="col-9 col-sm-7 col-md-5 col-lg-4 mainProjectStyle">
              <h2 className="mb-3">Our Main Project:</h2>
              <p className="mb-2">
                <i className="bi bi-check2-circle"></i> A Platform-as-a-Service
                (PaaS)
              </p>
              <p className="mb-2">
                <i className="bi bi-check2-circle"></i> Code name "User Village"
              </p>
              <p className="mb-2">
                <i className="bi bi-check2-circle"></i> For incentivize the
                collective power
              </p>
              <p className="mb-2">
                <i className="bi bi-check2-circle"></i> It will offer tools to
                engage customers, employees and communities
              </p>
            </div>
            :
            <div className="col-9 col-sm-7 col-md-5 col-lg-4 mainProjectStyle">
              <h2 className="mb-3">Naš projekat:</h2>
              <p className="mb-2">
                <i className="bi bi-check2-circle"></i> Platforma kao usluga (PaaS)
              </p>
              <p className="mb-2">
                <i className="bi bi-check2-circle"></i> Šifra "Korisničko selo"
              </p>
              <p className="mb-2">
                <i className="bi bi-check2-circle"></i>Podsticanje kolektivne moći
              </p>
              <p className="mb-2">
                <i className="bi bi-check2-circle"></i> Nudi alate za angažovanje klijenata, zaposlenih i zajednica
              </p>
            </div>
          }
          <div className="col-9 col-sm-7 col-md-5 col-lg-4 col-xl-3 mainProjectImgContainer">
            <video src={projectVideo} autoPlay loop playsInline muted></video>
          </div>
        </div>
      </div>
      <BottomFooterRow />
      <Cookie />
    </main >
  );
};

export default Home;
