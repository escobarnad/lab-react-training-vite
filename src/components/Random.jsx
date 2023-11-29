function Random(props) {
  return `Random value between ${props.min} and ${props.max} => ${Math.round(
    Math.random() * (props.max - props.min) + props.min
  )}`;
}

export default Random;
