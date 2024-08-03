import { useParams, Navigate } from "react-router-dom";

export default function ItemDetailsPage({ rentals }) {
  const { itemId } = useParams();
  const selectedRental = rentals.filter((rental) => rental.id === itemId)[0];
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
          Type: {rentals.property_type}
          Room type: {rentals.room_type}
          Cancellation: {rentals.cancellation_policy}
        </div>
        <div>
          Persons: {rentals.accommodates}
          Bedrooms: {rentals.bedrooms}
          Beds: {rentals.beds}
          Bathrooms: {rentals.bathrooms}
        </div>
        <div>
          Price: {rentals.price}
          Review: {rentals.review_scores_rating}
        </div>
        <div>{rentals.description}</div>
      </div>
    </div>
  );
}
