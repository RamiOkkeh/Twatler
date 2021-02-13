import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Explore" component={Home} />
        <Route path="/Bookmarks" component={Home} />
        <Route path="/Profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
