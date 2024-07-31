function RentalCard(props) {
  const { rental, clickToDelete } = props;

  return (
    <div className="RentalCard">
      <h3>{rental.name}</h3>
      <h4>{rental.property_type}</h4>
      <h5>
        {rental.country},{rental.city}
      </h5>

      <button
        onClick={() => clickToDelete(rental.id)}
        className="btn-delete"
      ></button>
    </div>
  );
}

export default RentalCard;
