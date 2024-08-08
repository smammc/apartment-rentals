import RentalCard from "./RentalCard";

export default function RentalListing({ rentals, setRentals, deleteItem }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">List of Rentals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
}
