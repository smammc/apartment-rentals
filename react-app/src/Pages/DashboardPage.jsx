import RentalListing from "../components/RentalListing";

export default function Dashboard({ rentals, setRentals, deleteItem }) {
  return (
    <div>
      <RentalListing
        rentals={rentals}
        setRentals={setRentals}
        deleteItem={deleteItem}
      />
    </div>
  );
}
