import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Routes>
        <ul>
          <Route path="/" element={<li>Homepage</li>} />

          <Route path="/DashboardPage" element={<li>Apartments</li>} />

          <Route path="/AboutPage" element={<li>About Us</li>} />
        </ul>
      </Routes>
    </div>
  );
}
