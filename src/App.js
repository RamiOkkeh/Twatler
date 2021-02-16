import "./App.css";
import { useState } from "react";
import Logged from "./pages/Logged";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  var [user, setUser] = useState(null);
  return <div>{user ? <Logged></Logged> : <Signup></Signup>}</div>;
}

export default App;
