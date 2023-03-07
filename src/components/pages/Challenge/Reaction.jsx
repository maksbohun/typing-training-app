import { useEffect, useState } from "react";
import classes from "./Reaction.module.css";
import { Modal } from "../../UI/Modal/Modal";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function Reaction({
  setDisabledInput,
  setShowButtons,
  setLetter,
  setPlaceholder,
  setInput,
  showLetterBlockHandler,
  letter,
  setKeys,
  input,
}) {
  const [valuesAreEqual, setValuesAreEqual] = useState(false);
  const [showLetterBlock, setShowLetterBlock] = useState(false);
  const [start, setStart] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [showModal, setShowModal] = useState(false);

  let counter = 0;

  const getKeys = () => {
    setKeys(Array.prototype.slice.call(document.getElementsByClassName("key")));
  };

  useEffect(() => {
    getKeys();
    setDisabledInput(true);
  }, []);

  useEffect(() => {
    compareValues();
  }, [input]);

  const compareValues = () => {
    if (input === letter) {
      setValuesAreEqual(true);
      setCorrect(correct + 1);
    }
  };

  useEffect(() => {
    setCorrect(0);
    setDisabledInput(false);
    setShowButtons(false);
    setShowLetterBlock(true);
    setLetter(" 3");
    setPlaceholder("Get ready!");
    setTimeout(() => {
      document.querySelector("#one-min-input").focus();
      setLetter(" 2");
    }, 1000);
    setTimeout(() => {
      setLetter(" 1");
    }, 2000);
    setTimeout(() => {
      setLetter(" ");
      setPlaceholder("");
    }, 3000);
    setTimeout(() => {
      const lettersInterval = setInterval(() => {
        setInput("");

        setValuesAreEqual(false);
        setLetter(alphabet[(Math.random() * 100).toFixed(0) % 26]);
        counter++;
        if (counter > 20) {
          setDisabledInput(true);
          setShowModal(true);
          setLetter(":)");
          clearInterval(lettersInterval);
          setShowButtons(true);
          setShowLetterBlock(false);
          counter = 0;
        }
      }, 1300);
    }, 3500);
  }, [start]);

  return (
    <>
      {showLetterBlock && (
        <div className={classes["letter-box-wrapper"]}>
          <div
            className={`${valuesAreEqual && classes["letter-box-active"]}  ${
              classes["letter-box"]
            }`}
          >
            {letter}
          </div>
        </div>
      )}

      {showModal && (
        <Modal
          content={{ message: `Your result: ${correct}/20` }}
          onClose={() => {
            setShowModal(false);
            showLetterBlockHandler(false);
          }}
        />
      )}
    </>
  );
}
