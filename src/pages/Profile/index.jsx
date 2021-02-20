import "./Profile.css";
import { Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import UserTweets from "../../components/UserTweets";
import UserReplies from "../../components/UserReplies";
import UserMedia from "../../components/UserMedia";
import UserHearts from "../../components/UserHearts";

function Profile({ user1, setUser1 }) {
  let { state, pathname } = useLocation();
  let [user, setUser] = useState(user1);

  if (state && state.userName !== user.userName) {
    fetch("http://localhost:8000/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: state.userName }),
    })
      .then((res) => res.json())
      .then((userr) => setUser(userr[0]));
  }

  let {
    nickName,
    userName,
    cover,
    profile,
    tweets,
    join,
    following,
    followers,
    hearts,
  } = user;

  let session = JSON.parse(sessionStorage.getItem("user"));
  let followStatus =
    session["userName"] === userName
      ? "self"
      : session["following"].includes(userName)
      ? true
      : false;
  let [tweeets, setTweets] = useState([]);
  useEffect(() => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tweets: tweets,
      }),
    };
    fetch("http://localhost:8000/tweets", options)
      .then((res) => res.json())
      .then((res) => {
        setTweets(res);
      });
  });

  const setUpProfile = () => {};

  const follow = () => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myUserName: user1.userName,
        targetUserName: userName,
        followStatus: followStatus,
      }),
    };
    fetch("http://localhost:8000/follow", options)
      .then((res) => res.json())
      .then((userr) => {
        console.log(user);
        setUser(userr.user);
        setUser1(userr.user1);
        sessionStorage.setItem("user", JSON.stringify(userr.user1));
      });
  };

  return (
    <div className="homeCon">
      <div className="profileTitle">
        <Link to="">
          <div className="backCon">
            <button className="back"></button>
          </div>
        </Link>
        <span className="usernameTitle">{nickName}</span>
        <span className="tweetsTitle">{tweets.length} tweets</span>
      </div>
      <div className="profileCon">
        <div
          className="userBG"
          style={{
            backgroundImage: cover ? `url('${cover}')` : "",
          }}
        ></div>
        <div className="profileInfoCon">
          <div className="profilePicCon">
            <div
              className="profilePic"
              style={{
                backgroundImage: profile
                  ? `url('${profile}')`
                  : `url("https://static.thenounproject.com/png/630740-200.png")`,
              }}
            ></div>
            <button
              className="follow"
              onClick={followStatus === "self" ? setUpProfile : follow}
            >
              {followStatus === "self"
                ? "Set up profile"
                : followStatus
                ? "Unfollow"
                : "Follow"}
            </button>
          </div>
          <div className="username">{nickName}</div>
          <div className="userAtName">@{userName}</div>
          <div className="joined">
            Joined {new Date(join).toLocaleDateString()}
          </div>
          <div className="following">
            <Link
              to={{ pathname: "/DisplayUsers", state: { users: following } }}
            >
              {following.length} Following
            </Link>
            <Link
              to={{ pathname: "/DisplayUsers", state: { users: followers } }}
            >
              {followers.length} Followers
            </Link>
          </div>
        </div>
      </div>
      <div className="taps">
        <Link
          to="/Profile"
          className={pathname === "/Profile" ? "selected" : ""}
        >
          Tweets
        </Link>
        <Link
          to="/Profile/Replies"
          className={pathname === "/Profile/Replies" ? "selected" : ""}
        >
          Replies
        </Link>
        <Link
          to="/Profile/Media"
          className={pathname === "/Profile/Media" ? "selected" : ""}
        >
          Media
        </Link>
        <Link
          to="/Profile/Likes"
          className={pathname === "/Profile/Likes" ? "selected" : ""}
        >
          Likes
        </Link>
      </div>
      <div>
        <Switch>
          <Route
            path="/Profile"
            exact
            render={() => <UserTweets tweets={tweeets} />}
          />
          <Route
            path="/Profile/Replies"
            render={() => <UserReplies tweets={tweeets} />}
          />
          <Route
            path="/Profile/Media"
            render={() => <UserMedia tweets={tweeets} />}
          />
          <Route
            path="/Profile/Likes"
            render={() => <UserHearts hearts={hearts} />}
          />
        </Switch>
      </div>
    </div>
  );
}
export default Profile;
