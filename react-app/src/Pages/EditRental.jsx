import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function EditRental({ rentals, setRentals }) {
  const { rentalId } = useParams();
  const rental = rentals.find((rental) => rental.id === rentalId);
  const navigate = useNavigate();

  const [name, setName] = useState(rental ? rental.name : "");
  const [host, setHost] = useState(rental ? rental.host : "");
  const [type, setType] = useState(rental ? rental.type : "Apartment");
  const [city, setCity] = useState(rental ? rental.city : "");
  const [country, setCountry] = useState(rental ? rental.country : "");
  const [cancellation, setCancellation] = useState(
    rental ? rental.cancellation : ""
  );
  const [persons, setPersons] = useState(rental ? rental.accommodates : 0);
  const [beds, setBeds] = useState(rental ? rental.beds : 0);
  const [bathrooms, setBathrooms] = useState(rental ? rental.bathrooms : 0);
  const [price, setPrice] = useState(rental ? rental.price : 0);
  const [review, setReview] = useState(rental ? rental.review : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*if (!name || !host || !type || !city || !country || !price || !review) {
      alert("Please fill in all fields");
      return;
    }*/
    const updatedRental = {
      id: rentalId,
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
    setRentals((prev) =>
      prev.map((rental) => (rental.id === rentalId ? updatedRental : rental))
    );
    navigate("/");
  };

  if (!rental) return <Navigate to="/" />;

  return (
    <div className="flex justify-center mt-24">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h4 className="text-xl font-semibold mb-4">Edit a Rental</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
