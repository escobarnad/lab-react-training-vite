import { FaStar } from "react-icons/fa";

function Rating(props) {
  const { children } = props;
  const rating = Math.round(children);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <span key={index}>
            {currentRating <= rating ? (
              <FaStar className="star" size={30} color="#ffc107" />
            ) : (
              <FaStar className="star" size={30} color="#e4e5e9" />
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
