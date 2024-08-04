import menuIcon from "../assets/menu-icon.png";
import AddRental from "./AddRental";

export default function Navbar() {
  return (
    <nav
      className="navbar"
      style={{ width: document.body.offsetWidth, top: 0 }}
    >
      <img className="menu" src={menuIcon} alt="menu-icon" />
      <AddRental />
    </nav>
  );
}
