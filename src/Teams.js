import Navigation from "./Navigation";
import BottomFooterRow from "./BottomFooterRow";
import FooteRow from "./FooterRow"

const Teams = () => {
  const darkOffice = require("./img/darkOffice.jpg");
  const teamsOne = [
    {
      name: "Luciano",
      surname: "Mendonça Païs",
      position: "Founder / Dev Team",
      description: "Financial Apps, Markets And Data Analytics",
      img: require("./img/Luciano-Mendonca.png"),
    },
    {
      name: "Yves",
      surname: "Bassens",
      position: "Co-Founder / Bussiness Dev Team",
      description: "Operational And Institutional Account",
      img: require("./img/Yves_Bassens.png"),
    },
    {
      name: "Bernard",
      surname: "Neyes",
      position: "Co-Founder / Bussiness Dev Team",
      description: "Projects Development With Creativity",
      img: require("./img/Bernard_Neyns.png"),
    },
    {
      name: "Tiago",
      surname: "Carruco",
      position: "Operations",
      description: "Operations Support",
      img: require("./img/Tiago-Carruco.png"),
    },
  ];
  const teamsTwo = [
    {
      name: "Nikola",
      surname: "Ilić",
      position: "Dev Team",
      description: "Security Analyst",
      img: require("./img/Nikola_Ilic.jpg"),
    },
    {
      name: "Aleksandra",
      surname: "Kitanović",
      position: "Dev Team",
      description: "Lead Designer",
      img: require("./img/Aleksandra_Kitanovic.png"),
    },
    {
      name: "Jelena",
      surname: "Ilić",
      position: "Dev Team",
      description: "Front End Developer",
      img: require("./img/Jelena_Ilic.png"),
    },
    {
      name: "Nevena",
      surname: "Janković",
      position: "Operations",
      description: "Operations Support",
      img: require("./img/Nevena_Jankovic.png"),
    },
  ];

  return (
    <div>
      <div className="container-fluid g-0">
        <div className="row justify-content-center">
            {teamsOne.map((team1, index) => (
              <div
                key={index}
                className="col-8 col-sm-4 col-xl-2 cardNew py-3 my-1"
              >
                <div className="teamImg">
                    <img src={team1.img} alt={team1.name + ' ' +  team1.surname} className="mb-3" />
                    <h4 className="mb-0">{team1.name}</h4>
                    <h4 className="mb-0">{team1.surname}</h4>
                </div>
                <hr />
                <div className="text-center font-italic">
                    <h5>{team1.position}</h5>
                    <p>{team1.description}</p>
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
                    <div className="teamImg">
                        <img src={team2.img} alt={team2.name + ' ' + team2.surname} className="mb-3" />
                        <h4 className="mb-0">{team2.name}</h4>
                        <h4 className="mb-0">{team2.surname}</h4>
                    </div>
                    <hr />
                    <div className="text-center font-italic">
                        <h5>{team2.position}</h5>
                        <p>{team2.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Teams;
