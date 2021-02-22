import "./Signup.css";
import $ from "jquery";
import { Link } from "react-router-dom";

function Signup({ setUser }) {
  const submit = (e) => {
    e.preventDefault();
    let [userName, nickName, email, pass] = $("input").serializeArray();
    fetch("/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName.value,
        nickName: nickName.value,
        email: email.value,
        pass: pass.value,
        join: new Date().valueOf(),
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (
          data === "Email already in use" ||
          data === "Username already in use"
        ) {
          $("#notify").html(data);
        } else {
          setUser(JSON.parse(data));
          sessionStorage.setItem("user", data);
        }
      });
  };

  return (
    <div className="signupCon">
      <div className="signCover">
        <img
          className="logo"
          src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image"
          alt="logo"
        />
      </div>
      <form className="formCon" id="signup" onSubmit={submit}>
        <div id="notify"></div>
        <input type="text" name="username" placeholder="Username" required />
        <input type="text" name="nickname" placeholder="Nickname" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="Password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="signunin">Sign up</button>
        <Link className="signToggle" to="/Signin">
          Sign in
        </Link>
      </form>
    </div>
  );
}
export default Signup;
