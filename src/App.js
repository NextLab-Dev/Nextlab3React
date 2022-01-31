import { Home } from "./Home";
import { Teams } from "./Teams";
import { Contact } from "./Contact";
import { TermsConditions } from "./TermsConditions";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { PageNotFound } from "./PageNotFound";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App mainPage container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 p-0">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/teams" component={Teams} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/terms-conditions" component={TermsConditions} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/404" component={PageNotFound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
