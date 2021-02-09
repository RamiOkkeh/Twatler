import "./Nav.css";
import NavItem from "../NavItem";

const items = [
  {
    name: "",
    icon:
      "https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image",
  },
  {
    name: "Home",
    icon:
      "https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/re-pict-house-base.png",
  },
  {
    name: "Explore",
    icon: "https://static.thenounproject.com/png/355412-200.png",
  },
  {
    name: "Bookmarks",
    icon: "https://static.thenounproject.com/png/50608-200.png",
  },
  {
    name: "Profile",
    icon: "https://static.thenounproject.com/png/630740-200.png",
  },
];

function Nav() {
  return (
    <div className="navCon">
      <div className="navItems">
        {items.map((data, i) => (
          <NavItem key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Nav;
