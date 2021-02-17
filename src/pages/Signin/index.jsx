import { Link } from "react-router-dom";

function Signin() {
  const submit = (e) => {
    console.log(e);
    e.preventDefault();
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
        <input type="text" name="email" placeholder="E-mail" required />
        <input type="text" name="password" placeholder="Password" required />
        <button className="signunin">Sign in</button>
        <Link className="signToggle" to="/Signup">
          Sign up
        </Link>
      </form>
    </div>
  );
}
export default Signin;
