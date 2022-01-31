import NavbarHome from "./NavbarHome";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";
import Cookie from "./Cookie";
import MetaTags from "react-meta-tags";
import { useSelector } from 'react-redux';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  AOS.init();
  const codeImg = require("./img/generator mockup.webp");
  const projectVideo = require("./img/landingVideo.mp4");
  const language = useSelector((state) => state.language);
  const cards = [
    {
      number: 22,
      firstTextEn: "Tutorials made",
      secondTextEn: "until today",
      firstTextSr: "Tutorijala napravljena",
      secondTextSr: "do danas"
    },
    {
      number: 5,
      firstTextEn: "Employees",
      secondTextEn: "wear glasses",
      firstTextSr: "Zaposlenih",
      secondTextSr: "nosi naočare"
    },
    {
      number: 16,
      firstTextEn: "Pljeskavica ordered",
      secondTextEn: "per month",
      firstTextSr: "Pljeskavica poručenih",
      secondTextSr: "tokom meseca"
    },
    {
      number: 19,
      firstTextEn: "Coffees drunk",
      secondTextEn: "per day",
      firstTextSr: "Kafa popijenih",
      secondTextSr: "za jedan dan"
    },
  ];
  return (
    <main>
      <NavbarHome />
      <MetaTags>
        {(language === true)
          ?
          <title>Nextlab 3 - Marketing and Support for a Multi Chain Economy</title>
          :
          <title>Nextlab 3 - Marketing i Podrška za Multi Chain Ekonomiju</title>
        }
      </MetaTags>
      <div className="container-fluid codeRowContainer">
        {(language === true)
          ?
          <div className="row justify-content-center">
            <div className="col-10 col-md-6 col-lg-5 col-xxl-4 my-auto codeExplanation">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <p className="mb-3 explanationHeader">Welcome to the future of technology!</p>
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

            <div className="col-12 col-md-6 col-xl-5 col-xxl-4 my-auto codeExplanation">
              <img src={codeImg} alt="Code" className="mockupStyle" />
            </div>
          </div>
          :
          <div className="row justify-content-center">
            <div className="col-10 col-md-6 col-lg-5 col-xxl-4 my-auto codeExplanation">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <p className="mb-3 explanationHeader">Dobrodošli u budućnost tehnologije!</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="codeExplanationFirst">
                      <p className="mb-0">Kako se Blockchain tehnologija razvija, napredovale su usluge koje utiču na razvoj i privlačenje korisnika, te se smatra da će postati neizbežne za nekoliko godina.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="codeExplanationSecond">
                      <p className="mb-0"><i className="bi bi-mic"></i> Uvereni smo da će rezultati našeg rada doprineti velikom okeanu informacija.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-12 col-md-6 col-xl-5 col-xxl-4 my-auto codeExplanation">
              <img src={codeImg} alt="Code" className="mockupStyle" />
            </div>
          </div>
        }
      </div>

      <div className="container-fluid statisticsRowContainer">
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
              className="col-8 col-sm-4 col-xxl-2 cardStatistics text-white py-3 my-2"
              data-aos="flip-left"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <div className="descriptionContainer">
                <p className="descriptionNumber">{card.number}</p>
                {(language === true)
                  ?
                  <div>
                    <p className="mb-0 descriptionText">{card.firstTextEn}</p>
                    <p className="descriptionText">{card.secondTextEn}</p>
                  </div>
                  :
                  <div>
                    <p className="mb-0 descriptionText">{card.firstTextSr}</p>
                    <p className="descriptionText">{card.secondTextSr}</p>
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid codeRowContainer">
        <div className="row justify-content-center">
          {(language === true)
            ?
            <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 my-auto mainProjectStyle">
              <div className="mainProjectTitle">
                <p className="mb-3 explanationHeader">Nextlab 3 actively contributes to shape the Blockchain and Cryptocurrency industry:</p>
              </div>
              <p className="mb-2 codeExplanationFirst">
                &#35;Marketing
              </p>
              <p className="mb-2 codeExplanationFirst">
                &#35;Design
              </p>
              <p className="mb-2 codeExplanationFirst">
                &#35;CustomerSupport
              </p>
              <p className="mb-2 codeExplanationFirst">
                &#35;ITSuport
              </p>
            </div>
            :
            <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 my-auto mainProjectStyle">
              <div className="mainProjectTitle">
                <p className="mb-3 explanationHeader">Nextlab 3 aktivno doprinosi oblikovanju Blockchain-a i industrije Kriptovalute:</p>
              </div>
              <p className="mb-2 codeExplanationFirst">
                <i className="bi bi-hash"></i>Marketing
              </p>
              <p className="mb-2 codeExplanationFirst">
                <i className="bi bi-hash"></i>Dizajn
              </p>
              <p className="mb-2 codeExplanationFirst">
                <i className="bi bi-hash"></i>KorisničkaPodrška
              </p>
              <p className="mb-2 codeExplanationFirst">
                <i className="bi bi-hash"></i>ITPodrška
              </p>
            </div>
          }
          <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 my-auto mainProjectVideoContainer">
            <video src={projectVideo} autoPlay loop playsInline muted></video>
          </div>
        </div>
      </div>

      <BottomMenu />
      <Footer />
      <Cookie />
    </main >
  );
};

export default Home;
