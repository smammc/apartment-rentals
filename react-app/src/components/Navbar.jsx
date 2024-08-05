import menuIcon from "../assets/menu-icon.png";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

export default function Navbar({ createRental }) {
  return (
    <nav
      className="navbar"
      style={{ width: document.body.offsetWidth, top: 0, height: 100 }}
    >
      <NavLink to="/add-rental/" className={`add-button`}>
        Add Rental
      </NavLink>
      <img className="menu" src={menuIcon} alt="menu-icon" height={"50px"} />
    </nav>
  );
}
