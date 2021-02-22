import { Link } from "react-router-dom";
import $ from "jquery";

function Signin({ setUser }) {
  const submit = (e) => {
    e.preventDefault();
    let [email, pass] = $("input").serializeArray();
    console.log(email, pass);
    fetch("/signin", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        pass: pass.value,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "Incorrect password" || data === "Email does not exist") {
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
      <form className="formCon" onSubmit={submit}>
        <div id="notify"></div>
        <input type="email" name="email" placeholder="E-mail" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="signunin">Sign in</button>
        <Link className="signToggle" to="/Signup">
          Sign up
        </Link>
      </form>
    </div>
  );
}
export default Signin;
