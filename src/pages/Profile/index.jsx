import "./Profile.css";
import { Link, useLocation } from "react-router-dom";

var tweetNum = 0,
  username = "Username",
  image = null,
  join = new Date(),
  following = 1,
  followers = 0,
  followStatus = "self";

function Profile() {
  const loc = useLocation().pathname;
  return (
    <div className="homeCon">
      <div className="profileTitle">
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
    </div>
  );
}
export default Profile;
