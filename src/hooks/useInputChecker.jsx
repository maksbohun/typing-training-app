import { useEffect, useState, Fragment } from "react";
import { breakText } from "../helpers/breakText.js";

export function useInputChecker({
  text,
  setReset,
  getMessage,
  setShowModal,
  setRunning,
  setStopwatchStarted,
  setPlaceholder,
  setShowLevels,
  setDisabledInput,
}) {
  const [inputText, setInputText] = useState("");
  const [inputFullText, setInputFullText] = useState("");
  const [keys, setKeys] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [time, setTime] = useState(0);

  const [counter, setCounter] = useState(0);

  const updatedText = breakText(text);
  {
    const getKeys = () => {
      setKeys(
        Array.prototype.slice.call(document.getElementsByClassName("key"))
      );
    };

    useEffect(() => {
      getKeys();
    }, []);

    useEffect(() => {
      const typingSpeed = Math.round((60 * text.length) / time);

      if (getMessage)
        getMessage({
          message: `Your result is ${typingSpeed} words per minute.`,
          mistakes: `${mistakes} mistakes`,
          time:
            "Time: " + document.getElementById("stopwatch-time").textContent,
        });
      else {
        setInputFullText(text);
      }
      if (setReset) setReset(true);
    }, [time]);

    useEffect(() => {
      if (inputText === updatedText[counter]) {
        setCounter(counter + 1);
        setInputFullText(inputFullText + inputText);
        setInputText("");
      }

      if (inputFullText.includes(text)) {
        if (getMessage) setShowModal(true);
        setTime(Math.round(performance.now() - time) / 1000);
        setInputText("");
        setInputFullText("");
        setCounter(0);
        if (setRunning) setRunning(false);
        if (setStopwatchStarted)
          setTimeout(() => {
            setStopwatchStarted(false);
            setMistakes(0);
          }, 800);
        if (setPlaceholder) {
          setPlaceholder("Please, choose the level");
          setShowLevels(true);
          setDisabledInput(true);
        }
      }
    }, [inputText]);
  }

  const changeInputHandler = (e) => {
    const enteredTextLength = e.target.value.length;
    if (setReset) setReset(false);

    if (updatedText[counter].slice(0, enteredTextLength) === e.target.value) {
      setInputText(e.target.value);
    } else {
      setMistakes(mistakes + 1);
    }
  };

  const keyPressHandler = (e) => {
    keys.forEach((key) => {
      key.classList.remove("active");
    });

    document.getElementById(e.code)?.classList.add("active");

    keys.forEach((key) => {
      setTimeout(() => {
        key.classList.remove("active");
      }, 1000);
    });
  };

  return {
    changeInputHandler,
    setTime,
    setInputText,
    inputText,
    setCounter,
    updatedText,
    counter,
    keyPressHandler,
  };
}
