import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="bg-blue-500 text-white fixed h-full top-0 pt-24 w-64">
      <ul className="space-y-4 p-4">
        <li>
          <NavLink to="/" className="hover:bg-blue-700 p-2 rounded block">
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-page"
            className="hover:bg-blue-700 p-2 rounded block"
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
