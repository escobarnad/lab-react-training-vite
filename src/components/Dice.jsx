import { useState } from "react";

function Dice() {
  const [clicked, setClicked] = useState(false);
  const [diceImage, setDiceImage] = useState("src/assets/images/dice3.png");

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
      changePicture();
    }, 1000);
  };

  const changePicture = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const imagePath = `src/assets/images/dice${randomNumber}.png`;
    setDiceImage(imagePath);
  };

  return (
    <div onClick={handleClick}>
      <img
        src={clicked ? "src/assets/images/dice-empty.png" : diceImage}
        style={{ height: "200px", margin: "1px" }}
        alt="Dice"
      />
    </div>
  );
}

export default Dice;
