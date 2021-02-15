import "./Home.css";
import { useState } from "react";

function Home() {
  let visi =
      'url("https://cdn0.iconfinder.com/data/icons/octicons/1024/globe-512.png")',
    unVisi = 'url("https://image.flaticon.com/icons/png/512/51/51372.png")';
  let [vis, setVis] = useState(true);
  return (
    <div className="homeCon">
      <div className="homeTitle">
        <h3 style={{ marginLeft: "20px" }}>Home</h3>
      </div>
      <div className="textBox">
        <textarea
          name="tweetBox"
          className="tweetTextBox"
          autoFocus
          maxLength="280"
          placeholder="What's happening"
        ></textarea>
        <div className="tweetOptions">
          <button className="addPhoto"></button>
          <button
            className="visibility"
            onClick={() => setVis(!vis)}
            style={{ backgroundImage: vis ? visi : unVisi }}
          >
            {vis ? "Public" : "People I Follow"}
          </button>
          <button className="post">Tweet</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
