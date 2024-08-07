import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRental({ createRental }) {
  const [name, setName] = useState("");
  const [host, setHost] = useState("");
  const [type, setType] = useState("Apartment");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [cancellation, setCancellation] = useState("");
  const [persons, setPersons] = useState(0);
  const [beds, setBeds] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState(0);
  const [review, setReview] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRental = {
      id: (Math.random() * 1000000).toString(),
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
    createRental(newRental);

    setName("");
    setHost("");
    setType("Apartment");
    setCity("");
    setCountry("");
    setCancellation("");
    setPersons(0);
    setBeds(0);
    setBathrooms(0);
    setPrice(0);
    setReview(0);
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-24">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h4 className="text-xl font-semibold mb-4">Add a Rental</h4>
        <form className="space-y-4">
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Host:
            </label>
            <input
              type="text"
              value={host}
              onChange={(e) => setHost(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Type:
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="Apartment">Apartment</option>
              <option value="Loft">Loft</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              City:
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Country:
            </label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Cancellation:
            </label>
            <input
              type="text"
              value={cancellation}
              onChange={(e) => setCancellation(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Persons:
            </label>
            <input
              type="number"
              value={persons}
              onChange={(e) => setPersons(Number(e.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Beds:
            </label>
            <input
              type="number"
              value={beds}
              onChange={(e) => setBeds(Number(e.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Bathrooms:
            </label>
            <input
              type="number"
              value={bathrooms}
              onChange={(e) => setBathrooms(Number(e.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Price:
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="input-wrapper">
            <label className="block text-sm font-medium text-gray-700">
              Review:
            </label>
            <input
              type="number"
              value={review}
              onChange={(e) => setReview(Number(e.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
