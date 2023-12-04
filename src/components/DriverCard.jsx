import Rating from "./Rating";

function DriverCard(props) {
  const { name, rating, img, car } = props;
  return (
    <>
      <div className="driver">
        <img
          src={img}
          alt="Driver's photo"
          height="150 px"
          style={{ borderRadius: "50%" }}
        />
        <div className="driver-details">
          <h3>{name}</h3>
          <Rating>{rating}</Rating>
          <p>{`${car.model} - ${car.licensePlate}`}</p>
        </div>
      </div>
    </>
  );
}

export default DriverCard;
