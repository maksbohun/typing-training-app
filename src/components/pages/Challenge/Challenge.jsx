import { useEffect, useState } from "react";
import { Input } from "../../UI/Input/Input";
import { Modal } from "../../UI/Modal/Modal";
import { Button } from "../../UI/Button/Button";
import Keyboard from "../../keyboards/KeyboardOrange";
import classes from "./Challenge.module.css";
import { OneMinChallenge } from "./OneMinChallenge";
import { Reaction } from "./Reaction";

export function Challenge() {
  const [placeholder, setPlaceholder] = useState(
    "Please, choose the challenge"
  );
  const [showButtons, setShowButtons] = useState(true);
  const [letter, setLetter] = useState("A");
  const [input, setInput] = useState("");
  const [disabledInput, setDisabledInput] = useState(true);
  const [keys, setKeys] = useState([]);
  const [showOneMinChallenge, setShowOneMinChallenge] = useState(false);
  const [showReactionChallenge, setShowReactionChallenge] = useState(false);
  const [correct, setCorrect] = useState(0);

  const reactionButtonHandler = () => {
    setDisabledInput(false);
    setShowButtons(false);
    setShowReactionChallenge(true);
  };

  const oneMinChallengeHandler = () => {
    setDisabledInput(false);
    setShowButtons(false);
    setShowOneMinChallenge(true);
  };

  const changeInputHandler = (e) => {
    setInput(e.target.value.toUpperCase());
    keys.forEach((key) => {
      key.classList.remove("active");
    });

    document
      .getElementById("Key" + e.target.value.toUpperCase().slice(-1))
      ?.classList.add("active");

    keys.forEach((key) => {
      setTimeout(() => {
        key.classList.remove("active");
      }, 1000);
    });
  };

  const goToChallengeMenu = () => {
    setShowButtons(true);
  };

  const showLetterBlockHandler = (value) => {
    setShowReactionChallenge(value);
  };

  return (
    <div className={classes.body}>
      <Input
        className={classes.input}
        id="one-min-input"
        text={placeholder}
        changeInputHandler={changeInputHandler}
        inputText={input}
        disabled={disabledInput}
      />
      {showButtons && (
        <div className={classes.menu}>
          <Button onClick={reactionButtonHandler}>Reaction</Button>
          <Button onClick={oneMinChallengeHandler}>1 min challenge</Button>
        </div>
      )}
      {/* {showLetterBlock && (
        <div className={classes["letter-box-wrapper"]}>
          <div
            className={`${valuesAreEqual && classes["letter-box-active"]}  ${
              classes["letter-box"]
            }`}
          >
            {letter}
          </div>
        </div>
      )} */}
      {showOneMinChallenge && (
        <OneMinChallenge
          setDisabledInput={setDisabledInput}
          setInput={setInput}
          setPlaceholder={setPlaceholder}
          input={input}
          goToChallengeMenu={goToChallengeMenu}
          setShowOneMinChallenge={setShowOneMinChallenge}
        />
      )}

      {showReactionChallenge && (
        <Reaction
          setDisabledInput={setDisabledInput}
          setShowButtons={setShowButtons}
          setLetter={setLetter}
          setPlaceholder={setPlaceholder}
          setInput={setInput}
          letter={letter}
          showLetterBlockHandler={showLetterBlockHandler}
          setKeys={setKeys}
          input={input}
        />
      )}

      <Keyboard className={classes.keyboard} />
    </div>
  );
}
