import "./NavItem.css";

function NavItem({ data }) {
  let { name, icon } = data;
  return (
    <div className="itemsCon">
      <div
        className="icons"
        style={{ backgroundImage: `url('${icon}')` }}
      ></div>
      <div className="itemsText">{name}</div>
    </div>
  );
}

export default NavItem;
