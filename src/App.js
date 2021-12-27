import NavbarRow from "./NavbarRow";
import CodeRow from "./CodeRow";
import StatisticsRow from "./StatisticsRow";
import MainProjectRow from "./MainProjectRow";
import FooterRow from "./FooterRow";
import BottomFooterRow from "./BottomFooterRow";

function App() {
  return (
    <div className="App mainPage container-fluid g-0">
      <div className="row justify-content-center">
        <div className="col-12">
          <NavbarRow /> 
          <CodeRow />
          <StatisticsRow />
          <MainProjectRow />
          <BottomFooterRow />
          <FooterRow />
        </div>
      </div>
    </div>
  );
}

export default App;