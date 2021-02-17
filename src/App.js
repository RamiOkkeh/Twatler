import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import Logged from "./pages/Logged";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  let [user, setUser] = useState(null);
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Logged user={user}></Logged>} />
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
