import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Home from "../Home";
import Explore from "../Explore";
import Bookmarks from "../Bookmarks";
import Profile from "../Profile";
import Comments from "../Comments";
// import Signup from "../Signup";
// import Signin from "../Signin";

function Logged({ user, setUser }) {
  let [tweets, setTweets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/tweet")
      .then((res) => res.json())
      .then((twets) => setTweets(twets));
  }, []);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Home
              user={user}
              setUser={setUser}
              tweets={tweets}
              setTweets={setTweets}
            />
          )}
        />
        <Route
          path="/Home"
          render={() => (
            <Home
              user={user}
              setUser={setUser}
              tweets={tweets}
              setTweets={setTweets}
            />
          )}
        />
        <Route
          path="/Explore"
          render={() => (
            <Explore user={user} setUser={setUser} tweets={tweets} />
          )}
        />
        <Route
          path="/Bookmarks"
          render={() => <Bookmarks user={user} setUser={setUser} />}
        />
        <Route path="/Profile" render={() => <Profile user={user} />} />
        <Route path="/Comments" component={Comments} />
        {/* <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} /> */}
      </Switch>
    </Router>
  );
}
export default Logged;
