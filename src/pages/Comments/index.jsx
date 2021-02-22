import "./Comments.css";
import { Component } from "react";
import Tweet from "../../components/Tweet";
import $ from "jquery";
import { useState } from "react";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      tweet: null,
      setUser: () => {},
    };
  }
  update = (tweet, setUser) => {
    this.setState({ tweet: tweet, setUser: setUser });
  };
  reply = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
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
        media: "",
        replyTo: {
          tweet: this.props.location.state.tweet._id.$oid,
          userName: this.props.location.state.tweet.user.userName,
        },
        visibility: true,
      }),
    };
    fetch("/tweet", options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.props.location.state.tweet.replies.push(res);
        $("#tweetBox").val("");
      });
  };
  render() {
    return (
      <div className="homeCon">
        <Tweet tweet={this.state.tweet || this.props.location.state.tweet} />
        {/* <div className="replyCon">
        <textarea
          className="tweetTextBox"
          autoFocus
          maxLength="280"
          placeholder="Tweet your reply"
        />
      </div> */}
        <div className="textBox">
          <textarea
            id="tweetBox"
            name="tweetBox"
            className="tweetTextBox"
            autoFocus
            maxLength="280"
            placeholder="Tweet your reply"
          ></textarea>
          <div className="tweetOptions">
            <button className="post" onClick={this.reply}>
              Tweet
            </button>
          </div>
        </div>
        {this.props.location.state.tweet.replies
          .slice(0)
          .reverse()
          .map((tweet, i) => (
            <Tweet
              key={i}
              tweet={tweet}
              setUser={this.state.setUser}
              update={this.update}
            ></Tweet>
          ))}
      </div>
    );
  }
}

export default Comments;
