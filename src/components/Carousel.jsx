import { useState } from "react";

function Carousel({ images }) {
  const [image, setImage] = useState(images[0]);
  const [count, setCount] = useState(0);

  console.log(count);

  const handleClickLeft = () => {
    const newIndex = (count - 1 + images.length) % images.length;
    setCount(newIndex);
    setImage(images[newIndex]);
  };

  const handleClickRight = () => {
    const newIndex = (count + 1) % images.length;
    setCount(newIndex);
    setImage(images[newIndex]);
  };

  return (
    <div>
      <button onClick={handleClickLeft}>Left</button>
      <img src={image} alt="carousel-img" />
      <button onClick={handleClickRight}>Right</button>
    </div>
  );
}

export default Carousel;
