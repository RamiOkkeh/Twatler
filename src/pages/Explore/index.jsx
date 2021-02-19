import { useState } from "react";
import Tweet from "../../components/Tweet";

function Explore({ tweets, setUser }) {
  return (
    <div className="homeCon">
      {tweets
        .slice(0)
        .reverse()
        .map((tweet, i) => (
          <Tweet key={i} tweet={tweet} setUser={setUser}></Tweet>
        ))}
    </div>
  );
}

export default Explore;
