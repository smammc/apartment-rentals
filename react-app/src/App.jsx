import { Routes, Route } from "react-router-dom";
import "./App.css";
import menuIcon from "./assets/menu-icon.png";
import GitIcon from "./assets/png-clipart-github-computer-icons-repository-github-angle-git.png";
import Dashboard from "./components/DashboardPage";
import Sidebar from "./components/Sidebar";
import AboutPage from "./components/AboutPage";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <nav
        className="navbar"
        style={{ width: document.body.offsetWidth, top: 0 }}
      >
        <img className="menu" src={menuIcon} alt="menu-icon" />
      </nav>

      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <footer className="footer">
        <p>Apartment Rentals</p>
        <img src={GitIcon} alt="github icon" className="footer-icon" />
      </footer>
    </div>
  );
}

export default App;
