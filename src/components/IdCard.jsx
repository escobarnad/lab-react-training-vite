function IdCard(props) {
  return (
    <div>
      <p>
        <strong>First name: </strong>
        {props.firstName}
      </p>
      <p>
        <strong>Last name: </strong>
        {props.lastName}
      </p>
      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>
      <p>
        <strong>Height: </strong>
        {props.height}cm
      </p>
      <p>
        <strong>Birth: </strong>
        {props.birth}
      </p>
      <img src={props.picture} alt="profile picture" height="150 px" />
    </div>
  );
}

export default IdCard;
