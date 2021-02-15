import Tweet from "../../components/Tweet";

function Explore() {
  var tweets = [{}];
  return (
    <div className="homeCon">
      {tweets.map((tweet, i) => (
        <Tweet key={i} data={tweet}></Tweet>
      ))}
    </div>
  );
}

export default Explore;
