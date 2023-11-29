function CreditCard(props) {
  const bgColor = props.bgColor;
  const color = props.color;

  const lastFourDigits = "**** **** **** " + props.number.slice(-4);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "200px",
        width: "500px",
        color: color,
        borderRadius: "15px",
      }}
    >
      <h3>{props.type === "Visa" ? "VISA" : "MasterCard"}</h3>
      <h1>{lastFourDigits}</h1>
      <span>
        Expires: {props.expirationMonth}/{props.expirationYear}
      </span>
      <span> {props.bank}</span>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
