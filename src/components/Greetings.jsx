function Greetings(props) {
  if (props.lang === "de") {
    return `Hallo ${props.children}`;
  } else if (props.lang === "en") {
    return `Hello ${props.children}`;
  } else if (props.lang === "es") {
    return `Hola ${props.children}`;
  } else if (props.lang === "fr") {
    return `Bonjour ${props.children}`;
  }
}

export default Greetings;
