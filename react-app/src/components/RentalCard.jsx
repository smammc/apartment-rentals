import { Link } from "react-router-dom";

function RentalCard(props) {
  const { rental, clickToDelete } = props;

  //<div key={recipe.id}>
  //<Link to={`/item/${recipe.id}`}>
  return (
    <div className="RentalCard">
      <div key={rental.id}>
        <Link to={`/rental/${rental.id}`} />
        <h3>{rental.name}</h3>
        {/* <img src={rental.picture_url.url} /> */}
        <h4>{rental.property_type}</h4>
        <h5>
          {rental.country}, {rental.city}
        </h5>
        <Link />
      </div>
      <button onClick={() => clickToDelete(rental.id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default RentalCard;

/*import { Link } from "react-router-dom";
export default function Card({ item, deleteFunc }) {
  return (
    <li className="card">
      <Link to={`/students/${item.id}?showAge=hide&showBootcamp=hide`}>
        {item.name}
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={`/students/${item.id}/edit`}>✏️</Link>
        <button onClick={() => deleteFunc(item.id)}>🗑️</button>
      </div>
    </li>
  );
}*/
