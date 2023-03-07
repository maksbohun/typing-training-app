import React, { useState, useEffect } from "react";

export function DownTimer({
  initialSeconds,
  setShowModal,
  className,
  setStartButtonShown,
}) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }
    }, 1000);

    if (secondsLeft === 0) {
      setShowModal(true);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [secondsLeft]);

  return (
    <div className={className}>
      {" "}
      {secondsLeft > 59
        ? `01:${
            secondsLeft % 60 >= 10 ? secondsLeft % 60 : (secondsLeft % 60) + "0"
          }`
        : `00:${secondsLeft >= 10 ? secondsLeft : "0" + secondsLeft}`}
    </div>
  );
}
