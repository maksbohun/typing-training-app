import { useEffect, useState } from "react";
import star from "./../../../icons/star.svg";
import starFilled from "./../../../icons/star-filled.svg";

export function RateBar() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = [0, 0, 0, 0, 0];

  useEffect(() => {
    localStorage.setItem("rating", currentValue);
  }, [currentValue]);

  const rateHandler = (value) => {
    setCurrentValue(value);
    localStorage.setItem("hasRating", true);
  };

  const mouseEnterHandler = (value) => {
    setHoverValue(value);
  };

  const mouseLeaveHandler = () => {
    setHoverValue(undefined);
  };

  return (
    <>
      <p>Rate this site</p>
      <div>
        {stars.map((_, i) => (
          <img
            onMouseOver={() => mouseEnterHandler(i + 1)}
            onMouseLeave={mouseLeaveHandler}
            onClick={() => rateHandler(i + 1)}
            key={i}
            src={(currentValue || hoverValue) > i ? starFilled : star}
          />
        ))}
      </div>
    </>
  );
}
