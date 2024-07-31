import { useState } from "react";
import "./App.css";
import menuIcon from "./assets/menu-icon.png";
import GitIcon from "./assets/png-clipart-github-computer-icons-repository-github-angle-git.png";
import RentalsList from "./components/RentalsList";

function App() {
  return (
    <div className="App">
      <nav
        className="navbar"
        style={{ width: document.body.offsetWidth, top: 0 }}
      >
        <img className="menu" src={menuIcon} alt="menu-icon" />
      </nav>

      <div className="sidebar">
        <ul>
          <li>Homepage</li>
          <li>Apartments</li>
          <li>About Us</li>
        </ul>
      </div>
      <RentalsList />
      <footer className="footer">
        <p>Appartment Rentals</p>
        <img src={GitIcon} alt="github icon" className="footer-icon" />
      </footer>
    </div>
  );
}
export default App;
