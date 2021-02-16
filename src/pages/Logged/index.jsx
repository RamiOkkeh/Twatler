import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "../../components/Nav";
import Home from "../Home";
import Explore from "../Explore";
import Bookmarks from "../Bookmarks";
import Profile from "../Profile";
import Comments from "../Comments";
import Signup from "../Signup";
import Signin from "../Signin";

function Logged() {
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
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
      </Switch>
    </Router>
  );
}
export default Logged;
