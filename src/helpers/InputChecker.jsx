import { useState, Fragment } from "react";
import { Input } from "./../components/UI/Input/Input";
import Stopwatch from "./Stopwatch";
import { useInputChecker } from "../hooks/useInputChecker.jsx";

export function InputChecker(props) {
  const [running, setRunning] = useState(false);
  const [stopwatchStarted, setStopwatchStarted] = useState(false);
  const [reset, setReset] = useState(false);

  const {
    changeInputHandler,
    setTime,
    setInputText,
    inputText,
    setCounter,
    updatedText,
    counter,
    keyPressHandler,
  } = useInputChecker({
    text: props.text,
    setReset,
    getMessage: props.getMessage,
    setShowModal: props.setShowModal,
    setRunning,
    setStopwatchStarted,
  });

  const startTimer = () => {
    if (!stopwatchStarted) {
      setTime(performance.now());
      setStopwatchStarted(true);
      setRunning(true);
    }
  };

  const resetTimer = () => {
    setTime(0);
    setInputText("");
    setRunning(false);
    setReset(true);
    setStopwatchStarted(false);
    setCounter(0);
  };

  return (
    <Fragment>
      <Stopwatch running={running} reset={reset} resetTimer={resetTimer} />

      <Input
        keyPressHandler={keyPressHandler}
        changeInputHandler={changeInputHandler}
        inputText={inputText}
        text={updatedText[counter]}
        keyUpHandler={startTimer}
        disabled={props.showModal ? true : false}
        style={{ marginTop: "-1rem" }}
      />
    </Fragment>
  );
}
