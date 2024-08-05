import { useState } from "react";
import "./AddRental.css";

export default function AddRental({ createRental }) {
  const [name, setName] = useState("");
  const [host, setHost] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [cancellation, setCancellation] = useState("");
  const [persons, setPersons] = useState(0);
  const [beds, setBeds] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState(0);
  const [review, setReview] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleHost = (e) => setHost(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleCancellation = (e) => setCancellation(e.target.value);
  const handlePersons = (e) => setPersons(Number(e.target.value));
  const handleBeds = (e) => setBeds(Number(e.target.value));
  const handleBathrooms = (e) => setBathrooms(Number(e.target.value));
  const handlePrice = (e) => setPrice(Number(e.target.value));
  const handleReview = (e) => setReview(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(1000000 + Math.random() * 9000000);
    const newId = randomNumber.toString();
    const newRental = {
      id: newId,
      name,
      host,
      type,
      city,
      country,
      cancellation,
      accommodates: persons,
      beds,
      bathrooms,
      price,
      review,
    };
    console.log(newRental);
    createRental(newRental);

    ///reset state
    setName("");
    setHost("");
    setType("");
    setCity("");
    setCountry("");
    setCancellation("");
    setPersons(0);
    setBeds(0);
    setBathrooms(0);
    setPrice(0);
    setReview(0);
  };

  return (
    <div className="AddRental">
      <h4>Add a Rental</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </div>
        <div className="input-wrapper">
          <label>Host:</label>
          <input type="text" name="Host" value={host} onChange={handleHost} />
        </div>

        <div className="input-wrapper">
          <label>Type:</label>
          <select name="type" value={type} onChange={handleType}>
            <option value="Apartment">Apartment</option>
            <option value="Loft">Loft</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-wrapper">
          <label>City:</label>
          <input type="text" name="City" value={host} onChange={handleCity} />
        </div>
        <div className="input-wrapper">
          <label>Country:</label>
          <input
            type="text"
            name="Country"
            value={host}
            onChange={handleCountry}
          />
        </div>
        <div className="input-wrapper">
          <label>Cancellation:</label>
          <input
            type="text"
            name="Cancellation"
            value={cancellation}
            onChange={handleCancellation}
          />
        </div>

        <div className="input-wrapper">
          <label>Persons:</label>
          <input
            type="number"
            name="Person"
            value={persons}
            onChange={handlePersons}
          />
        </div>

        <div className="input-wrapper">
          <label>Beds:</label>
          <input type="number" name="Beds" value={beds} onChange={handleBeds} />
        </div>
        <div className="input-wrapper">
          <label>Bathrooms:</label>
          <input
            type="number"
            name="Bathrooms"
            value={bathrooms}
            onChange={handleBathrooms}
          />
        </div>

        <div className="input-wrapper">
          <label>Price:</label>
          <input
            type="number"
            name="Price"
            value={price}
            onChange={handlePrice}
          />
        </div>

        <div className="input-wrapper">
          <label>Review:</label>
          <input
            type="number"
            name="Review"
            value={review}
            onChange={handleReview}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
