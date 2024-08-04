import { useState } from "react";

export default function AddRental({ createRental }) {
  const [name, setName] = useState("");
  const [host, setHost] = useState("");
  const [type, setType] = useState("");
  const [cancellation, setCancellation] = useState("");
  const [persons, setPersons] = useState(0);
  const [beds, setBeds] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState(0);
  const [review, setReview] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleHost = (e) => setHost(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleCancellation = (e) => setCancellation(e.target.value);
  const handlePersons = (e) => setPersons(Number(e.target.value));
  const handleBeds = (e) => setBeds(Number(e.target.value));
  const handleBathrooms = (e) => setBathrooms(Number(e.target.value));
  const handlePrice = (e) => setPrice(Number(e.target.value));
  const handleReview = (e) => setReview(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRental = {
      name,
      host,
      type,
      cancellation,
      persons,
      beds,
      bathrooms,
      price,
      review,
    };

    createRental(newRental);

    ///reset state
    setName("");
    setHost("");
    setType("");
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
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Host:</label>
        <input type="text" name="Host" value={host} onChange={handleHost} />

        <label>Type:</label>
        <select name="type" value={type} onChange={handleType}>
          <option value="Apartment">Apartment</option>
          <option value="Loft">Loft</option>
          <option value="Other">Other</option>
        </select>

        <label>Cancellation:</label>
        <input
          type="text"
          name="Cancellation"
          value={cancellation}
          onChange={handleCancellation}
        />

        <label>Persons:</label>
        <input
          type="number"
          name="Person"
          value={persons}
          onChange={handlePersons}
        />

        <label>Beds:</label>
        <input type="number" name="Beds" value={beds} onChange={handleBeds} />

        <label>Bathrooms:</label>
        <input
          type="number"
          name="Bathrooms"
          value={bathrooms}
          onChange={handleBathrooms}
        />

        <label>Price:</label>
        <input
          type="number"
          name="Price"
          value={price}
          onChange={handlePrice}
        />

        <label>Review:</label>
        <input
          type="number"
          name="Review"
          value={review}
          onChange={handleReview}
        />

        <button type="submit">Add Rental</button>
      </form>
    </div>
  );
}
