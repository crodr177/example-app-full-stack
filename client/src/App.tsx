import { HashRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Info from "./pages/Info";
import Header from './components/Header';

import { 
  APP_TITLE, 
  PAGE_TITLE_ABOUT, 
  PAGE_TITLE_CONTACT, 
  PAGE_TITLE_INFO 
} from './utils/constants';

function App() {
  return (
    <Router basename="/">
      <title>{APP_TITLE}</title>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={(props) => <About title={PAGE_TITLE_ABOUT} {...props} />} />
        <Route path="/contact" render={(props) => <Contact title={PAGE_TITLE_CONTACT} {...props} />} />
        <Route path="/info" render={(props) => <Info title={PAGE_TITLE_INFO} {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
