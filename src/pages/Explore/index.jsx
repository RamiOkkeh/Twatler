import { useState } from "react";
import Tweet from "../../components/Tweet";

function Explore({ tweets }) {
  return (
    <div className="homeCon">
      {tweets
        .slice(0)
        .reverse()
        .map((tweet, i) => (
          <Tweet key={i} tweet={tweet}></Tweet>
        ))}
    </div>
  );
}

export default Explore;
