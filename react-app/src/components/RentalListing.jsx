import RentalCard from "./RentalCard";

export default function RentalListing(props) {
  const { rentals, deleteItem } = props;

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
        ) : null
      )}
    </div>
  );
}
