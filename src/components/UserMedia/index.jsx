import Tweet from "../Tweet";

function UserMedia({ tweets }) {
  tweets = tweets.filter((tweet) => tweet.media);
  return (
    <div>
      {tweets.reverse().map((tweet, i) => (
        <Tweet key={i} tweet={tweet} />
      ))}
    </div>
  );
}

export default UserMedia;
