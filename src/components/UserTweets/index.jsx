import Tweet from "../Tweet";

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
