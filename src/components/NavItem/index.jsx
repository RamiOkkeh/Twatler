import "./NavItem.css";
import { Link } from "react-router-dom";

function NavItem({ data }) {
  let { name, icon } = data;
  return (
    <Link to={name} style={{ textDecoration: "none" }}>
      <div className="itemsCon">
        <div
          className="icons"
          style={{ backgroundImage: `url('${icon}')` }}
        ></div>
        <div className="itemsText">{name}</div>
      </div>
    </Link>
  );
}

export default NavItem;
