import { useState, useEffect } from "react";
import { Button } from "../components/UI/Button/Button";
import classes from "./Stopwatch.module.css";

const Stopwatch = (props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (props.reset) {
      setTime(0);
    }
  }, [props.reset]);

  useEffect(() => {
    let interval;
    if (props.running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!props.running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.running]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.stopwatch}>
        <div className={classes.time} id="stopwatch-time">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons"></div>
      </div>
      <Button className={classes.button} onClick={props.resetTimer}>
        Try again
      </Button>
    </div>
  );
};

export default Stopwatch;
