import "./DisplayUsers.css";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import User from "../../components/User";

function DisplayUsers() {
  let [users, setUsers] = useState(useLocation().state.users);
  console.log(users);
  useEffect(() => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: users,
      }),
    };
    fetch("/users", options)
      .then((res) => res.json())
      .then((userss) => {
        console.log(userss);
        setUsers(userss);
      });
  }, []);

  return (
    <div className="homeCon">
      <div className="profileTitle">
        <span className="usernameTitle">Users</span>
      </div>
      {typeof users[0] !== "string"
        ? users.map((user, i) => <User key={i} user={user} />)
        : ""}
    </div>
  );
}
export default DisplayUsers;
