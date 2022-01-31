import NavbarTeams from "./NavbarTeams";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";
import MetaTags from "react-meta-tags";
import { useSelector } from 'react-redux';

const Teams = () => {
  const language = useSelector((state) => state.language);
  const teamsOne = [
    {
      name: "Luciano",
      surname: "Mendonça Païs",
      positionEn: "Founder / Dev Team",
      descriptionEn: "Financial Apps, Markets And Data Analytics",
      positionSr: "Osnivač / Dev Tim",
      descriptionSr: "Analiza finansijskih aplikacija, tržišta i podataka",
      img: require("./img/Luciano-Mendonca.webp"),
    },
    {
      name: "Yves",
      surname: "Bassens",
      positionEn: "Co-Founder / Bussiness Dev Team",
      descriptionEn: "Operational And Institutional Account",
      positionSr: "Suosnivač / Biznis Dev Tim",
      descriptionSr: "Operativni i institucionalni račun",
      img: require("./img/Yves_Bassens.webp"),
    },
    {
      name: "Bernard",
      surname: "Neyes",
      positionEn: "Co-Founder / Bussiness Dev Team",
      descriptionEn: "Projects Development With Creativity",
      positionSr: "Suosnivač / Biznis Dev Tim",
      descriptionSr: "Kreativni razvoj projekata",
      img: require("./img/Bernard_Neyns.webp"),
    },
    {
      name: "Tiago",
      surname: "Carruco",
      positionEn: "Operations",
      descriptionEn: "Operations Support",
      positionSr: "Office asistent",
      descriptionSr: "Asistent operative",
      img: require("./img/Tiago-Carruco.webp"),
    },
  ];
  const teamsTwo = [
    {
      name: "Branislav",
      surname: "Savić",
      positionEn: "Customer Support team",
      descriptionEn: "Product owner",
      positionSr: "Korisnička podrška",
      descriptionSr: "Menadžer proizvoda",
      img: require("./img/Branislav_Savic.webp"),
    },
    {
      name: "Aleksandra",
      surname: "Kitanović",
      positionEn: "Dev Team",
      descriptionEn: "Lead Designer",
      positionSr: "Dev Tim",
      descriptionSr: "Lead Dizajner",
      img: require("./img/Aleksandra_Kitanovic.webp"),
    },
    {
      name: "Jelena",
      surname: "Ilić",
      positionEn: "Dev Team",
      descriptionEn: "Front End Developer",
      positionSr: "Dev Tim",
      descriptionSr: "Front End Developer",
      img: require("./img/Jelena_Ilic.webp"),
    },
    {
      name: "Nevena",
      surname: "Janković",
      positionEn: "Operations",
      descriptionEn: "Operations Support",
      positionSr: "Office Asistent",
      descriptionSr: "Asistent operative",
      img: require("./img/Nevena_Jankovic.webp"),
    },
  ];

  return (
    <div>
      <NavbarTeams />
      <MetaTags>
        {(language === true)
          ?
          <title>Nextlab 3 - Our team</title>
          :
          <title>Nextlab 3 - Naš tim </title>
        }
      </MetaTags>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {teamsOne.map((team1, index) => (
            <div
              key={index}
              className="col-8 col-sm-4 col-xl-2 cardTeam py-3 my-1"
            >
              <div className="content">
                <div className="front">
                  <img
                    src={team1.img}
                    alt={team1.name + " " + team1.surname}
                    className="mb-3"
                  />
                  <h4 className="mb-0">{team1.name}</h4>
                  <h4 className="mb-0">{team1.surname}</h4>
                </div>
                <hr />
                {(language === true)
                  ?
                  <div className="text-center font-italic back">
                    <div className="positionContainer">
                      <h5 className="positionStyle">{team1.positionEn}</h5>
                    </div>
                    <p className="text-center">
                      <button className="btn btn-outline-success" type="button" data-toggle="collapse" data-target={"#collapseExample" + `${index}`} aria-expanded="false" aria-controls="collapseExample">
                        More <i className="bi bi-plus-circle-dotted"></i>
                      </button>
                    </p>
                    <div className="collapse" id={"collapseExample" + `${index}`}>
                      <div className="extraCard card-body">
                        {team1.descriptionEn}
                      </div>
                    </div>
                  </div>
                  :
                  <div className="text-center font-italic back">
                    <div className="positionContainer">
                      <h5 className="positionStyle">{team1.positionSr}</h5>
                    </div>
                    <p className="text-center">
                      <button className="btn btn-outline-success" type="button" data-toggle="collapse" data-target={"#collapseExample" + `${index}`} aria-expanded="false" aria-controls="collapseExample">
                        Opis <i className="bi bi-plus-circle-dotted"></i>
                      </button>
                    </p>
                    <div className="collapse" id={"collapseExample" + `${index}`}>
                      <div className="extraCard card-body">
                        {team1.descriptionSr}
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {teamsTwo.map((team2, index) => (
            <div
              key={index}
              className="col-8 col-sm-4 col-xl-2 cardTeam py-3 my-1"
            >
              <div className="content">
                <div className="front">
                  <img
                    src={team2.img}
                    alt={team2.name + " " + team2.surname}
                    className="mb-3"
                  />
                  <h4 className="mb-0">{team2.name}</h4>
                  <h4 className="mb-0">{team2.surname}</h4>
                </div>
                <hr />
                {(language === true)
                  ?
                  <div className="text-center font-italic back">
                    <div className="positionContainer">
                      <h5 className="positionStyle">{team2.positionEn}</h5>
                    </div>
                    <p className="text-center">
                      <button className="btn btn-outline-success" type="button" data-toggle="collapse" data-target={"#collapseExampleNew" + `${index}`} aria-expanded="false" aria-controls="collapseExample">
                        More <i className="bi bi-plus-circle-dotted"></i>
                      </button>
                    </p>
                    <div className="collapse" id={"collapseExampleNew" + `${index}`}>
                      <div className="extraCard card-body">
                        {team2.descriptionEn}
                      </div>
                    </div>
                  </div>
                  :
                  <div className="text-center font-italic back">
                    <div className="positionContainer">
                      <h5 className="positionStyle">{team2.positionSr}</h5>
                    </div>
                    <p className="text-center">
                      <button className="btn btn-outline-success" type="button" data-toggle="collapse" data-target={"#collapseExampleNew" + `${index}`} aria-expanded="false" aria-controls="collapseExample">
                        More <i className="bi bi-plus-circle-dotted"></i>
                      </button>
                    </p>
                    <div className="collapse" id={"collapseExampleNew" + `${index}`}>
                      <div className="extraCard card-body">
                        {team2.descriptionSr}
                      </div>
                    </div>
                  </div>
                }

              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomMenu />
      <Footer />
    </div>
  );
};

export default Teams;
