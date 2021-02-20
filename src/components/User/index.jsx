import "./User.css";
import { Link } from "react-router-dom";

function User({ user }) {
  let { userName, nickName, profile, join, followers } = user;
  return (
    <div className="userCon alignCenter">
      <Link
        to={{
          pathname: "/Profile",
          state: { userName: userName },
        }}
      >
        <div
          className="userPic"
          style={{
            backgroundImage: profile
              ? `url("${profile}")`
              : "url('https://static.thenounproject.com/png/630740-200.png')",
          }}
        ></div>
      </Link>
      <Link
        to={{
          pathname: "/Profile",
          state: { userName: userName },
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <span className="name">{nickName}</span>
        <span className="grey">@{userName}</span>
      </Link>
      <div className="joined">joined {new Date(join).toLocaleDateString()}</div>
    </div>
  );
}
export default User;
