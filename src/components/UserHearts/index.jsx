import Tweet from "../Tweet";
import { useState, useEffect } from "react";

function UserHearts({ hearts }) {
  let [tweets, setTweets] = useState([]);
  useEffect(() => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tweets: hearts,
      }),
    };
    console.log(tweets);
    fetch("http://localhost:8000/tweets", options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTweets(res);
      });
  }, []);
  return (
    <div>
      {tweets
        .slice(0)
        .reverse()
        .map((tweet, i) => (
          <Tweet key={i} tweet={tweet} />
        ))}
    </div>
  );
}

export default UserHearts;