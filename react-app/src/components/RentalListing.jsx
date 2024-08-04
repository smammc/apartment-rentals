import RentalCard from "./RentalCard";

export default function RentalListing({ rentals, setRentals, deleteItem }) {
  console.log(rentals);
  return (
    <div>
      <h2>List of Rentals</h2>

      {rentals.map((rental) =>
        rental.review_scores_rating !== null ? (
          <RentalCard
            key={rental.id}
            rental={rental}
            setRentals={setRentals}
            clickToDelete={deleteItem}
          />
        ) : null
      )}
    </div>
  );
}
