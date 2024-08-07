import RentalListing from "../components/RentalListing";

export default function Dashboard({ rentals, setRentals, deleteItem }) {
  return (
    <div className="container mx-auto p-4">
      <RentalListing
        rentals={rentals}
        setRentals={setRentals}
        deleteItem={deleteItem}
      />
    </div>
  );
}
