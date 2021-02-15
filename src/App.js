import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";
import Comments from "./pages/Comments";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Explore" component={Explore} />
        <Route path="/Bookmarks" component={Bookmarks} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Comments" component={Comments} />
      </Switch>
    </Router>
  );
}

export default App;
