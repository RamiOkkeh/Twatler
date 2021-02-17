import "./Signup.css";
import $ from "jquery";

function Signup() {
  const submit = (e) => {
    console.log(e);
    e.preventDefault();
    let [userName, nickName, email, pass] = $("input").serializeArray();
    fetch("http://localhost:8000/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName: userName.value,
        nickName: nickName.value,
        email: email.value,
        pass: pass.value,
        join: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // data = JSON.parse(data);
        console.log(data);
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
      <form className="formCon" id="signup">
        <div>
          <label name="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label name="nickname">Nickname</label>
          <input type="text" name="nickname" />
        </div>
        <div>
          <label name="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label name="password">Password</label>
          <input type="text" name="password" />
        </div>
        <button onClick={submit}>Signup</button>
      </form>
    </div>
  );
}
export default Signup;
