import { Link } from "react-router-dom";

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

function RentalCard(props) {
  const { rental, clickToDelete } = props;
  const randomPicture = getRandomPicture();

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <div key={rental.id}>
        <Link to={`/rental/${rental.id}`}>
          <h3 className="text-lg font-semibold mb-2 truncate-text">
            {rental.name}
          </h3>
          <img
            src={randomPicture}
            alt={rental.name}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h4 className="text-md font-medium">{rental.property_type}</h4>
          <h5 className="text-sm text-gray-600">
            {rental.country}, {rental.city}
          </h5>
        </Link>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => clickToDelete(rental.id)}
          className="btn-delete bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
        <Link
          className="edit-button bg-blue-500 text-white px-3 py-1 rounded"
          to={`/rental/${rental.id}/edit-rental`}
        >
          ✎
        </Link>
      </div>
    </div>
  );
}

export default RentalCard;
