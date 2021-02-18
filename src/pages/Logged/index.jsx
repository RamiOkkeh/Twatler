import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import Nav from "../../components/Nav";
import Home from "../Home";
import Explore from "../Explore";
import Bookmarks from "../Bookmarks";
import Profile from "../Profile";
import Comments from "../Comments";
// import Signup from "../Signup";
// import Signin from "../Signin";

function Logged({ user }) {
  let [tweets, setTweets] = useState([]);
  fetch("http://localhost:8000/tweet")
    .then((res) => res.json())
    .then((twets) => setTweets(twets));
  return (
    <Router>
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Home user={user} tweets={tweets} />}
        />
        <Route
          path="/Home"
          render={() => <Home user={user} tweets={tweets} />}
        />
        <Route path="/Explore" render={() => <Explore tweets={tweets} />} />
        <Route path="/Bookmarks" component={Bookmarks} />
        <Route path="/Profile" render={() => <Profile user={user} />} />
        <Route path="/Comments" component={Comments} />
        {/* <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} /> */}
      </Switch>
    </Router>
  );
}
export default Logged;
