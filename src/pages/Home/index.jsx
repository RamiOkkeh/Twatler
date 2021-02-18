import "./Home.css";
import { useState } from "react";
import $ from "jquery";

function Home({ user }) {
  let visi =
      'url("https://cdn0.iconfinder.com/data/icons/octicons/1024/globe-512.png")',
    unVisi = 'url("https://image.flaticon.com/icons/png/512/51/51372.png")';
  let [vis, setVis] = useState(true);
  let [media, setMedia] = useState("");
  const tweet = () => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: user.userName,
        content: $("#tweetBox").val(),
        created: new Date().valueOf(),
        media: media,
        replyTo: 0,
        visibility: vis,
      }),
    };
    fetch("http://localhost:8000/tweet", options)
      .then((res) => res.json())
      .then((tweet) => {
        console.log(tweet);
      });
  };

  $("#media").on("change", (event) => {
    const file = event.target.files[0];
    if (file.type && file.type.match("image.*")) {
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        setMedia(event.target.result);
      });
      reader.readAsDataURL(file);
    } else alert("Error loading media");
  });
  return (
    <div className="homeCon">
      <div className="homeTitle">
        <h3 style={{ marginLeft: "20px" }}>Home</h3>
      </div>
      <div className="textBox">
        <textarea
          id="tweetBox"
          name="tweetBox"
          className="tweetTextBox"
          autoFocus
          maxLength="280"
          placeholder="What's happening"
        ></textarea>
        <div
          onClick={() => setMedia("")}
          className={media ? "removeImg" : "hide"}
        >
          X
        </div>
        <img src={media} alt="" className="mediaCon" />
        <div className="tweetOptions">
          <button className="addPhoto">
            <input
              type="file"
              alt=""
              id="media"
              className="addPhotoInput"
            ></input>
          </button>
          <button
            className="visibility"
            onClick={() => setVis(!vis)}
            style={{ backgroundImage: vis ? visi : unVisi }}
          >
            {vis ? "Public" : "People I Follow"}
          </button>
          <button className="post" onClick={tweet}>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
