import { useParams, Navigate } from "react-router-dom";
import "./ItemDetailsPage.css";

import Pic1 from "../assets/Pic1.png";
import Pic2 from "../assets/Pic2.png";
import Pic3 from "../assets/Pic3.png";
import Pic4 from "../assets/Pic4.png";
import Pic5 from "../assets/Pic5.png";
import Pic6 from "../assets/Pic6.png";
import Pic7 from "../assets/Pic7.png";
import Pic8 from "../assets/Pic8.png";
import Pic9 from "../assets/Pic9.png";
import Pic10 from "../assets/Pic10.png";
import Pic11 from "../assets/Pic11.png";
import Pic12 from "../assets/Pic12.png";
import Pic13 from "../assets/Pic13.png";
import Pic14 from "../assets/Pic14.png";
import Pic15 from "../assets/Pic15.png";
import Pic16 from "../assets/Pic16.png";
import Pic17 from "../assets/Pic17.png";
import Pic18 from "../assets/Pic18.png";
import Pic19 from "../assets/Pic19.png";
import Pic20 from "../assets/Pic20.png";
import Pic21 from "../assets/Pic21.png";

const apartmentPictures = [
  Pic1,
  Pic2,
  Pic3,
  Pic4,
  Pic5,
  Pic5,
  Pic6,
  Pic7,
  Pic8,
  Pic9,
  Pic10,
  Pic11,
  Pic12,
  Pic13,
  Pic14,
  Pic15,
  Pic16,
  Pic17,
  Pic18,
  Pic19,
  Pic20,
  Pic21,
];

function getRandomPicture() {
  const randomIndex = Math.floor(Math.random() * apartmentPictures.length);
  return apartmentPictures[randomIndex];
}

export default function ItemDetailsPage({ rentals }) {
  const { rentalId } = useParams();
  const selectedRental = rentals.filter((rental) => rental.id === rentalId)[0];
  const randomPicture = getRandomPicture();

  if (!selectedRental) return <Navigate to="/not-found" />;

  return (
    <div className="item-wrapper">
      <div className="item-details">
        <img src={randomPicture} alt="random picture" className="item-image" />
        <div className="item-info">
          <h3 className="item-title">{selectedRental.name}</h3>
          <p>
            <strong>Host:</strong> {selectedRental.host_name}
          </p>
          <p>
            <strong>Type:</strong> {selectedRental.property_type}
          </p>
          <p>
            <strong>Cancellation:</strong> {selectedRental.cancellation_policy}
          </p>
          <p>
            <strong>People:</strong> {selectedRental.accommodates}
          </p>
          <p>
            <strong>Bedrooms:</strong> {selectedRental.bedrooms}
          </p>
          <p>
            <strong>Beds:</strong> {selectedRental.beds}
          </p>
          <p>
            <strong>Bathrooms:</strong> {selectedRental.bathrooms}
          </p>
          <p>
            <strong>Price:</strong> {selectedRental.price}
          </p>
          <p>
            <strong>Review:</strong> {selectedRental.review_scores_rating}
          </p>
          <p>{selectedRental.description}</p>
        </div>
      </div>
    </div>
  );
}
