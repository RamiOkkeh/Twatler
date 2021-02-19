import "./Tweet.css";

function Tweet({ tweet }) {
  var booked = true;
  let { user, created, content, media, replies, replyTo, hearts } = tweet;
  let { userName, nickName, profile } = user;
  return (
    <div className="tweetCon">
      <div
        className="userPic"
        style={{
          backgroundImage: profile
            ? `url("${profile}")`
            : "url('https://static.thenounproject.com/png/630740-200.png')",
        }}
      ></div>
      <div className="contentCon">
        <div className="usernameCon">
          <span className="name">{nickName}</span>
          <span className="grey">@{userName}</span>
          <span className="grey">{new Date(created).toLocaleDateString()}</span>
          <span className={replyTo ? "repling" : "hide"}>
            {replyTo ? `replying to @${replyTo["user"]["userName"]}` : ""}
          </span>
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
              <div className="reply"></div>
              <div>{replies.length}</div>
            </div>
            <div className="flex">
              <div className="heart"></div>
              <div>{hearts}</div>
            </div>
            <div className="flex">
              <div className={booked ? "unbookmark" : "bookmark"}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
