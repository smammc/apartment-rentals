import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import rentalsList from "./assets/rentals.json";

// Pages
import AboutPage from "./Pages/AboutPage";
import ErrorPage from "./Pages/ErrorPage";
import ItemDetailsPage from "./Pages/ItemDetailsPage";

// Components
import Dashboard from "./Pages/DashboardPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [rentals, setRentals] = useState(rentalsList.results);

  const deleteItem = (rentalId) => {
    const filteredRentals = rentals.filter((rental) => rental.id !== rentalId);
    setRentals(filteredRentals);
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={<Dashboard rentals={rentals} deleteItem={deleteItem} />}
        />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route
          path="/rental/:rentalId"
          element={<ItemDetailsPage rentals={rentals} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
