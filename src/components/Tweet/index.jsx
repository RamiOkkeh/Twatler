import "./Tweet.css";

function Tweet() {
  var userpic = 0,
    username = "rami",
    userAt = "rami",
    date = "Jan 13",
    tweetMsg = "asdfg",
    media =
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",
    replies = [{ id: 1872 }],
    hearts = 20,
    booked = true;

  return (
    <div className="tweetCon">
      <div
        className="userPic"
        style={{
          backgroundImage: userpic
            ? `url("${userpic}")`
            : "url('https://static.thenounproject.com/png/630740-200.png')",
        }}
      ></div>
      <div className="contentCon">
        <div className="usernameCon">
          <span className="name">{username}</span>
          <span className="grey">@{userAt}</span>
          <span className="grey">{date}</span>
        </div>
        <div className="contentDiv">
          <div className="tweet">{tweetMsg}</div>
          {media ? (
            <div
              className="mediaCon"
              style={{ backgroundImage: `url("${media}")` }}
            ></div>
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
