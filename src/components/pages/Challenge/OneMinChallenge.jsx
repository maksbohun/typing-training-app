import { useEffect, useState } from "react";
import { Modal } from "../../UI/Modal/Modal";
import { Button } from "../../UI/Button/Button";
import { DownTimer } from "./DownTimer";
import classes from "./OneMinChallenge.module.css";

const DUMMY_WORDS_ARRAY = [
  "oven",
  "denim",
  "latch",
  "public",
  "flower",
  "shop",
  "towel",
  "head",
  "citrus",
  "minus",
  "talon",
  "wealth",
  "about",
  "copier",
  "orange",
  "zone",
  "mixer",
  "salmon",
  "hacker",
  "photo",
  "gold",
  "whisky",
  "jacket",
  "noise",
  "crawl",
  "launch",
  "evil",
  "paint",
  "master",
  "rabbit",
  "today",
  "wonder",
  "truck",
  "python",
  "dinner",
  "cookie",
  "recon",
  "single",
  "unity",
  "spark",
  "sound",
  "flex",
  "phone",
  "shave",
  "tunnel",
  "turkey",
  "apple",
  "baton",
  "chat",
  "dust",
];

export function OneMinChallenge({
  setDisabledInput,
  setInput,
  setPlaceholder,
  input,
  goToChallengeMenu,
  setShowOneMinChallenge,
}) {
  const [start, setStart] = useState(false);
  const [word, setWord] = useState(" 3");
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [answersAmount, setAnswersAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [startButtonShown, setStartButtonShown] = useState(false);

  useEffect(() => {
    setStartButtonShown(true);

    if (!start) {
      setPlaceholder("Click start button");
      setDisabledInput(true);
    }

    if (start) {
      setDisabledInput(false);
      setPlaceholder("Get ready!");
      setWord(" 3");
      setTimeout(() => {
        setWord(" 2");
      }, 1000);
      setTimeout(() => {
        setWord(" 1");
      }, 2000);

      setTimeout(() => {
        setWord("Start");
        setCorrect(true);
        setPlaceholder("");
        setChallengeStarted(true);
      }, 3000);
      // setTimeout(() => {
      // }, 3900);
    }
  }, [start]);

  useEffect(() => {
    if (!challengeStarted) {
      setStart(false);
      setAnswersAmount(0);
    }
  }, [challengeStarted]);

  useEffect(() => {
    setTimeout(() => {
      if (answersAmount > 50) {
        setShowModal(true);
        setChallengeStarted(false);
      }
      if (correct) {
        setCorrect(false);
        setWord(
          DUMMY_WORDS_ARRAY[(Math.random() * 100).toFixed(0) % 40].toUpperCase()
        );
        setInput("");
        setAnswersAmount(answersAmount + 1);
      }
    }, 400);
  }, [correct]);

  useEffect(() => {
    if (input === word) setCorrect(true);
    else setCorrect(false);
  }, [input]);

  const startChallengeHandler = () => {
    setStart(true);
    const inp = document.querySelector("#one-min-input");
    setTimeout(() => {
      inp.focus();
    }, 500);
  };

  return (
    <div className={classes.section}>
      {!start && startButtonShown && (
        <Button onClick={startChallengeHandler} className={classes.button}>
          Start
        </Button>
      )}
      {start && (
        <>
          {challengeStarted && (
            <DownTimer
              initialSeconds={60}
              setShowModal={setShowModal}
              className={classes.timer}
            />
          )}
          <div className={classes.wrapper}>
            {answersAmount > 0 && (
              <div className={classes["correct-answers"]}>
                {answersAmount}/40
              </div>
            )}
            <div
              className={`${correct && classes["word-correct"]}  ${
                classes.word
              }`}
            >
              {word}
            </div>
          </div>
          {showModal && (
            <Modal
              content={{ message: `Your result is ${answersAmount - 1}/40.` }}
              onClose={() => {
                setShowModal(false);
                goToChallengeMenu();
                setStartButtonShown(false);
                setStart(false);
                setShowOneMinChallenge(false);
              }}
            />
          )}
        </>
      )}
    </div>
  );
}
