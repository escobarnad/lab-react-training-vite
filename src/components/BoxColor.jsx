function BoxColor(props) {
  const color = `rgb(${props.r}, ${props.g}, ${props.b})`;

  return (
    <div
      style={{
        backgroundColor: color,
        height: 100,
        width: 500,
      }}
    >
      {`rgb (${props.r}, ${props.g}, ${props.b})`}
    </div>
  );
}

export default BoxColor;
