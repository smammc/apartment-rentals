import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function EditRental({ rentals, setRentals }) {
  const { rentalId } = useParams();

  // find rental with id
  const rental = rentals.find((rental) => rental.id === rentalId);

  if (!rental) return <Navigate to="/" />;

  const [name, setName] = useState(rental.name);
  const [host, setHost] = useState(rental.host);
  const [type, setType] = useState(rental.type);
  const [city, setCity] = useState(rental.city);
  const [country, setCountry] = useState(rental.country);
  const [cancellation, setCancellation] = useState(rental.cancellation);
  const [persons, setPersons] = useState(rental.accommodates);
  const [beds, setBeds] = useState(rental.beds);
  const [bathrooms, setBathrooms] = useState(rental.bathrooms);
  const [price, setPrice] = useState(rental.price);
  const [review, setReview] = useState(rental.review);
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleHostChange = (e) => setHost(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleCancellationChange = (e) => setCancellation(e.target.value);
  const handlePersonsChange = (e) => setPersons(Number(e.target.value));
  const handleBedsChange = (e) => setBeds(Number(e.target.value));
  const handleBathroomsChange = (e) => setBathrooms(Number(e.target.value));
  const handlePriceChange = (e) => setPrice(Number(e.target.value));
  const handleReviewChange = (e) => setReview(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !host || !type || !city || !country || !price || !review) {
      alert("Please fill in all fields");
      return;
    }

    const updatedRental = {
      id: rentalId,
      name,
      host,
      type,
      city,
      country,
      cancellation,
      persons,
      beds,
      bathrooms,
      price,
      review,
    };
    console.log(updatedRental);
    EditRental(rental);

    navigate("/");
  };

  return (
    <div className="AddRental">
      <div>
        <h4>Edit a Rental</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Host:</label>
          <input
            type="text"
            name="Host"
            value={host}
            onChange={handleHostChange}
          />
        </div>

        <div className="input-wrapper">
          <label>Type:</label>
          <select name="type" value={type} onChange={handleTypeChange}>
            <option value="Apartment">Apartment</option>
            <option value="Loft">Loft</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-wrapper">
          <label>City:</label>
          <input
            type="text"
            name="City"
            value={host}
            onChange={handleCityChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Country:</label>
          <input
            type="text"
            name="Country"
            value={host}
            onChange={handleCountryChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Cancellation:</label>
          <input
            type="text"
            name="Cancellation"
            value={cancellation}
            onChange={handleCancellationChange}
          />
        </div>

        <div className="input-wrapper">
          <label>Persons:</label>
          <input
            type="number"
            name="Person"
            value={persons}
            onChange={handlePersonsChange}
          />
        </div>

        <div className="input-wrapper">
          <label>Beds:</label>
          <input
            type="number"
            name="Beds"
            value={beds}
            onChange={handleBedsChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Bathrooms:</label>
          <input
            type="number"
            name="Bathrooms"
            value={bathrooms}
            onChange={handleBathroomsChange}
          />
        </div>

        <div className="input-wrapper">
          <label>Price:</label>
          <input
            type="number"
            name="Price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>

        <div className="input-wrapper">
          <label>Review:</label>
          <input
            type="number"
            name="Review"
            value={review}
            onChange={handleReviewChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
