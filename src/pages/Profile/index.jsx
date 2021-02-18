import "./Profile.css";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Tweet from "../../components/Tweet";

function Test() {
  return <div>main</div>;
}
function Test1() {
  return <div>askld</div>;
}
function Test2() {
  return <div>dsvfrevf</div>;
}
function Test3() {
  return <div>serfdr</div>;
}

function Profile({ user }) {
  const loc = useLocation().pathname;
  let {
    id,
    nickName,
    userName,
    cover,
    profile,
    tweets,
    join,
    following,
    followers,
  } = user;
  let session = JSON.parse(sessionStorage.getItem("user")),
    followStatus =
      session["userName"] === userName
        ? "self"
        : session["following"].includes(id["$oid"])
        ? true
        : false;
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
            <button className="follow">
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
            <Link to="home">{following.length} Following</Link>
            <Link to="">{followers.length} Followers</Link>
          </div>
        </div>
      </div>
      <div className="taps">
        <Link to="/Profile" className={loc === "/Profile" ? "selected" : ""}>
          Tweets
        </Link>
        <Link
          to="/Profile/Replies"
          className={loc === "/Profile/Replies" ? "selected" : ""}
        >
          Replies
        </Link>
        <Link
          to="/Profile/Media"
          className={loc === "/Profile/Media" ? "selected" : ""}
        >
          Media
        </Link>
        <Link
          to="/Profile/Likes"
          className={loc === "/Profile/Likes" ? "selected" : ""}
        >
          Likes
        </Link>
      </div>
      <div>
        <Switch>
          <Route path="/Profile" exact component={Test} />
          <Route path="/Profile/Replies" component={Test1} />
          <Route path="/Profile/Media" component={Test2} />
          <Route path="/Profile/Likes" component={Test3} />
        </Switch>
      </div>
    </div>
  );
}
export default Profile;
