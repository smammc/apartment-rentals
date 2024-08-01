import { useState } from "react";
import rentalsList from "../assets/rentals.json";
import RentalCard from "./RentalCard";

export default function Dashboard() {
  const [rentals, setRentals] = useState(rentalsList.results);

  const deleteItem = (rentalId) => {
    const filteredRentals = rentals.filter((rental) => rental.id !== rentalId);
    setRentals(filteredRentals);
  };

  return (
    <div>
      <h2>List of Rentals</h2>

      {rentals.map((rental) =>
        rental.review_scores_rating !== null ? (
          <RentalCard
            key={rental.id}
            rental={rental}
            clickToDelete={deleteItem}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
}


