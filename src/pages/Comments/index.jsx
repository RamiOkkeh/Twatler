import "./Comments.css";
import Tweet from "../../components/Tweet";

function Explore() {
  var mainTweet = {},
    replies = [{}];
  return (
    <div className="homeCon">
      <Tweet data={mainTweet} />
      {/* <div className="replyCon">
        <textarea
          className="tweetTextBox"
          autoFocus
          maxLength="280"
          placeholder="Tweet your reply"
        />
      </div> */}
      <div className="textBox">
        <textarea
          name="tweetBox"
          className="tweetTextBox"
          autoFocus
          maxLength="280"
          placeholder="Tweet your reply"
        ></textarea>
        <div className="tweetOptions">
          <button className="addPhoto"></button>
          <button className="post">Tweet</button>
        </div>
      </div>
      {replies.map((tweet, i) => (
        <Tweet key={i} data={tweet}></Tweet>
      ))}
    </div>
  );
}

export default Explore;
