import RentalListing from "../components/RentalListing";

export default function Dashboard(props) {
  const { rentals, deleteItem } = props;

  return (
    <div>
      <RentalListing rentals={rentals} deleteItem={deleteItem} />
    </div>
  );
}
