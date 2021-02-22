import Tweet from "../../components/Tweet";
import { useState, useEffect } from "react";

function Bookmarks({ user, setUser }) {
  let [tweets, setTweets] = useState([]);
  useEffect(() => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tweets: user["bookmarks"],
      }),
    };
    fetch("/bookmarks", options)
      .then((res) => res.json())
      .then((twets) => {
        setTweets(twets);
      });
  }, []);
  return (
    <div className="homeCon">
      {tweets.length > 0 ? (
        tweets.map((tweet, i) => (
          <Tweet key={i} tweet={tweet} setUser={setUser}></Tweet>
        ))
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
