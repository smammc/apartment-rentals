import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/DashboardPage">Apartments</NavLink>
        </li>
        <li>
          <NavLink to="/AboutPage">About Us</NavLink>
        </li>
      </ul>
    </div>
  );
}
