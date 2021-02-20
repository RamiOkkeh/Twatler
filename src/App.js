import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Logged from "./pages/Logged";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  let [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:8000/users", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: user.userName }),
      })
        .then((res) => res.json())
        .then((user) => {
          console.log(user);
          setUser(user);
          sessionStorage.setItem("user", JSON.stringify(user));
        });
    }, 60000);
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Logged user={user} setUser={setUser}></Logged>}
        />
        <Route
          path="/Signup"
          render={() => <Signup setUser={setUser}></Signup>}
        />
        <Route
          path="/Signin"
          render={() => <Signin setUser={setUser}></Signin>}
        />
      </Switch>
      {user ? <Redirect to="/" /> : <Redirect to="Signup" />}
    </Router>
  );
}

export default App;
