import "./Tweet.css";

function Tweet({ tweet }) {
  var profile = 0,
    userName = "rami",
    nickName = "rami",
    created = "Jan 13",
    content = "asdfg",
    media = "",
    replies = [{ id: 1872 }],
    hearts = 20,
    booked = true;
  var {
    profile,
    userName,
    nickName,
    created,
    content,
    media,
    replies,
    replyTo,
    hearts,
  } = tweet;

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
          <span className="name">{userName}</span>
          <span className="grey">@{nickName}</span>
          <span className="grey">{new Date(created).toLocaleDateString()}</span>
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
