import NavbarRow from "./NavbarRow";
import Home from './Home';
import FooterRow from "./FooterRow";
import BottomFooterRow from "./BottomFooterRow";
import Teams from "./Teams";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App mainPage container-fluid g-0">
        <div className="row justify-content-center">
          <div className="col-12">
            <NavbarRow />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/teams' component={Teams} />
          </Switch>
            <BottomFooterRow />
            <FooterRow />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
