import NavbarTeams from "./NavbarTeams";
import FooterRow from "./FooterRow";
import BottomFooterRow from "./BottomFooterRow";
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
      img: require("./img/Luciano-Mendonca.png"),
    },
    {
      name: "Yves",
      surname: "Bassens",
      positionEn: "Co-Founder / Bussiness Dev Team",
      descriptionEn: "Operational And Institutional Account",
      positionSr: "Suosnivač / Biznis Dev Tim",
      descriptionSr: "Operativni i institucionalni račun",
      img: require("./img/Yves_Bassens.png"),
    },
    {
      name: "Bernard",
      surname: "Neyes",
      positionEn: "Co-Founder / Bussiness Dev Team",
      descriptionEn: "Projects Development With Creativity",
      positionSr: "Suosnivač / Biznis Dev Tim",
      descriptionSr: "Kreativni razvoj projekata",
      img: require("./img/Bernard_Neyns.png"),
    },
    {
      name: "Tiago",
      surname: "Carruco",
      positionEn: "Operations",
      descriptionEn: "Operations Support",
      positionSr: "Office asistent",
      descriptionSr: "Asistent operative",
      img: require("./img/Tiago-Carruco.png"),
    },
  ];
  const teamsTwo = [
    {
      name: "Nikola",
      surname: "Ilić",
      positionEn: "Dev Team",
      descriptionEn: "Security Analyst",
      positionSr: "Dev Tim",
      descriptionSr: "Bezbednost sistema",
      img: require("./img/Nikola_Ilic.jpg"),
    },
    {
      name: "Aleksandra",
      surname: "Kitanović",
      positionEn: "Dev Team",
      descriptionEn: "Lead Designer",
      positionSr: "Dev Tim",
      descriptionSr: "Lead Dizajner",
      img: require("./img/Aleksandra_Kitanovic.png"),
    },
    {
      name: "Jelena",
      surname: "Ilić",
      positionEn: "Dev Team",
      descriptionEn: "Front End Developer",
      positionSr: "Dev Tim",
      descriptionSr: "Front End Developer",
      img: require("./img/Jelena_Ilic.png"),
    },
    {
      name: "Nevena",
      surname: "Janković",
      positionEn: "Operations",
      descriptionEn: "Operations Support",
      positionSr: "Office Asistent",
      descriptionSr: "Asistent operative",
      img: require("./img/Nevena_Jankovic.png"),
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
      <div className="container-fluid g-0">
        <div className="row justify-content-center">
          {teamsOne.map((team1, index) => (
            <div
              key={index}
              className="col-8 col-sm-4 col-xl-2 cardNew py-3 my-1"
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
      <div className="container-fluid g-0">
        <div className="row justify-content-center">
          {teamsTwo.map((team2, index) => (
            <div
              key={index}
              className="col-8 col-sm-4 col-xl-2 cardNew py-3 my-1"
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
      <BottomFooterRow />
      <FooterRow />
    </div>
  );
};

export default Teams;
