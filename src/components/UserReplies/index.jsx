import Tweet from "../Tweet";

function UserReplies({ tweets }) {
  tweets = [].concat.apply(
    [],
    tweets.map((tweet) => tweet.replies)
  );
  console.log(tweets);
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

export default UserReplies;
