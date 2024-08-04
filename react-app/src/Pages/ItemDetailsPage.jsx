import { useParams, Navigate } from "react-router-dom";

export default function ItemDetailsPage({ rentals }) {
  const { rentalId } = useParams();
  const selectedRental = rentals.filter((rental) => rental.id === rentalId)[0];

  if (!selectedRental) return <Navigate to="/not-found" />;

  return (
    <div className="item-wrapper">
      <div className="item-details">
        {/* TODO -- Imagem */}
        <div className="name">
          <h3>{selectedRental.name}</h3>
          host: {selectedRental.host_name}
        </div>
        <div>
          Type: {selectedRental.property_type}
          Room type: {selectedRental.room_type}
          Cancellation: {selectedRental.cancellation_policy}
        </div>
        <div>
          Persons: {selectedRental.accommodates}
          Bedrooms: {selectedRental.bedrooms}
          Beds: {selectedRental.beds}
          Bathrooms: {selectedRental.bathrooms}
        </div>
        <div>
          Price: {selectedRental.price}
          Review: {selectedRental.review_scores_rating}
        </div>
        <div>{selectedRental.description}</div>
      </div>
    </div>
  );
}
