import menuIcon from "../assets/menu-icon.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ createRental }) {
  return (
    <nav className="bg-blue-500 text-white fixed w-full flex justify-between items-center p-4 z-10">
      <img className="menu w-8 h-8" src={menuIcon} alt="menu-icon" />
      <h1 className="text-2xl font-bold mb-4">AirDnD</h1>
      <NavLink
        to="/add-rental/"
        className="add-button bg-blue-700 px-4 py-2 rounded"
      >
        Add Rental
      </NavLink>
    </nav>
  );
}
