import Tweet from "../Tweet";
import { useEffect, useState } from "react";

function UserTweets({ tweets }) {
  return (
    <div>
      {tweets.reverse().map((tweet, i) => (
        <Tweet key={i} tweet={tweet} />
      ))}
    </div>
  );
}

export default UserTweets;
