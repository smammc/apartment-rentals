import { useState } from "react";
import "./App.css";
import menuIcon from "./assets/menu-icon.png";

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
      <footer></footer>
    </div>
  );
}
export default App;
