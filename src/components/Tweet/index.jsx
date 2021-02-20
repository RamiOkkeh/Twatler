import { Link } from "react-router-dom";
import { useState } from "react";
import "./Tweet.css";

function Tweet({ tweet, setUser, update }) {
  update = update ? update : () => {};
  let [tweeet, setTweet] = useState(tweet);
  let { user, created, content, media, replies, replyTo, hearts } = tweeet;
  let { userName, nickName, profile } = user;
  let session = JSON.parse(sessionStorage.getItem("user")),
    hearted = hearts.some((el) => el === session["userName"]),
    booked = session.bookmarks.some((el) => el === tweeet._id.$oid);

  const heart = () => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        _id: tweeet._id.$oid,
        hearted: hearted,
      }),
    };
    fetch("http://localhost:8000/tweet/heart", options)
      .then((res) => res.json())
      .then((twet) => {
        setTweet(twet);
        setUser((userr) => {
          let index = userr.hearts.indexOf(twet._id);
          index === -1
            ? userr.hearts.push(twet._id)
            : userr.hearts.splice(index, 1);
          return userr;
        });
      });
  };

  const book = () => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        _id: tweeet._id.$oid,
        booked: booked,
      }),
    };
    fetch("http://localhost:8000/tweet/book", options)
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      });
  };

  return (
    <div className="tweetCon">
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
      <div className="contentCon">
        <div className="usernameCon">
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
          <span className="grey">{new Date(created).toLocaleDateString()}</span>
          <Link
            to={{
              pathname: "/Profile",
              state: { userName: replyTo["userName"] },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className={replyTo ? "repling" : "hide"}>
              {replyTo ? `replying to @${replyTo["userName"]}` : ""}
            </span>
          </Link>
        </div>
        <div className="contentDiv">
          <div className="tweet">{content}</div>
          {media ? (
            <img className="mediaCon" src={media} alt="media not found"></img>
          ) : (
            ""
          )}
          <div className="reactionsCon">
            <div className="flex">
              <Link
                to={{
                  pathname: "/Comments",
                  state: { tweet: tweeet },
                }}
                onClick={() => update(tweeet, setUser)}
              >
                <div className="reply"></div>
              </Link>
              <div>{replies.length}</div>
            </div>
            <div className="flex">
              <div
                className={hearted ? "hearted" : "heart"}
                onClick={heart}
              ></div>
              <div>{hearts.length}</div>
            </div>
            <div className="flex">
              <div
                className={booked ? "unbookmark" : "bookmark"}
                onClick={book}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
