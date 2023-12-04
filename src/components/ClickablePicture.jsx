import { useState } from "react";

function ClickablePicture(props) {
  const [clicked, setClicked] = useState(false);
  const { img, imgClicked } = props;

  const imgPath = `/images/${img}`;
  const imgClickedPath = `/images/${imgClicked}`;

  const toggleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div onClick={() => toggleClick()}>
      {clicked ? (
        <img src={imgClickedPath} style={{ height: "200px", margin: "1px" }} />
      ) : (
        <img src={imgPath} style={{ height: "200px", margin: "1px" }} />
      )}
    </div>
  );
}

export default ClickablePicture;
