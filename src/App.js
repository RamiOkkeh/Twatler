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
  var [user, setUser] = useState(null);
  return (
    <Router>
      <Switch>
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
      </Switch>
      {user ? <Logged></Logged> : <Redirect to="Signup"></Redirect>}
    </Router>
  );
}

export default App;
