import "./Profile.css";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Tweet from "../../components/Tweet";

var tweetNum = 0,
  username = "Username",
  image = null,
  join = new Date(),
  following = 1,
  followers = 0,
  followStatus = "self";

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

function Profile() {
  const loc = useLocation().pathname;
  return (
    <div className="homeCon">
      <div className="profileTitle">
        <Link to="">
          <div className="backCon">
            <button className="back"></button>
          </div>
        </Link>
        <span className="usernameTitle">{username}</span>
        <span className="tweetsTitle">{tweetNum} tweets</span>
      </div>
      <div className="profileCon">
        <div
          className="userBG"
          style={{
            backgroundImage: image ? `url('${image}')` : "",
          }}
        ></div>
        <div className="profileInfoCon">
          <div className="profilePicCon">
            <div className="profilePic"></div>
            <button className="follow">
              {followStatus === "self" ? "Set up profile" : followStatus}
            </button>
          </div>
          <div className="username">{username}</div>
          <div className="userAtName">@{username}</div>
          <div className="joined">Joined {join.toLocaleDateString()}</div>
          <div className="following">
            <Link to="home">{following} Following</Link>
            <Link to="">{followers} Followers</Link>
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
