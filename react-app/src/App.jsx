import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import rentalsList from "./assets/rentals.json";
import "./tailwind.css";

// Pages
import AboutPage from "./Pages/AboutPage";
import ErrorPage from "./Pages/ErrorPage";
import ItemDetailsPage from "./Pages/ItemDetailsPage";
import AddRental from "./Pages/AddRental";

// Components
import Dashboard from "./Pages/DashboardPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditRental from "./Pages/EditRental";

function App() {
  const [rentals, setRentals] = useState(rentalsList.results);

  const deleteItem = (rentalId) => {
    const filteredRentals = rentals.filter((rental) => rental.id !== rentalId);
    setRentals(filteredRentals);
  };

  const createRental = (newRental) => {
    const updatedRentals = [...rentals, newRental];
    setRentals(updatedRentals);
  };

  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 ml-64 mt-24 mb-16">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  rentals={rentals}
                  setRentals={setRentals}
                  deleteItem={deleteItem}
                />
              }
            />
            <Route
              path="/add-rental"
              element={<AddRental createRental={createRental} />}
            />
            <Route path="/about-page" element={<AboutPage />} />
            <Route
              path="/rental/:rentalId"
              element={<ItemDetailsPage rentals={rentals} />}
            />
            <Route
              path="/rental/:rentalId/edit-rental"
              element={<EditRental rentals={rentals} setRentals={setRentals} />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
