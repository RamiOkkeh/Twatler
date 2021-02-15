import Tweet from "../../components/Tweet";

function Bookmarks() {
  var tweets = [{}];
  return (
    <div className="homeCon">
      {tweets.length > 0 ? (
        tweets.map((tweet, i) => <Tweet key={i} data={tweet}></Tweet>)
      ) : (
        <div
          style={{
            fontSize: "20px",
            padding: "50px",
            textAlign: "center",
          }}
        >
          You have not Bookmarked any tweets yet
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
