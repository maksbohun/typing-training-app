import { useState } from "react";
import { useInputChecker } from "./../../hooks/useInputChecker";
import { Input } from "./../UI/Input/Input";
import { Button } from "./../UI/Button/Button";
import { Modal } from "./../UI/Modal/Modal";

import KeyboardMint from "../keyboards/KeyboardMint";
import classes from "./Training.module.css";

const DUMMY_LEVELS = [
  {
    id: "l1",
    title: "Level 1",
    task: "aa aas asas ads asad addadas afafa afasd dasafa agsfasasds gaafasads",
  },
  {
    id: "l2",
    title: "Level 2",
    task: "ad ag ads dash fa ask flag ash jags la hag glass lads sad ah lags half glad flash gas lad sag gad",
  },
  {
    id: "l3",
    title: "Level 3",
    task: "albs back calf dank hack labs calfs sack vang gnash balks chad flask snack gabs fangs dank chalks",
  },
  {
    id: "l4",
    title: "Level 4",
    task: "balms clangs fax shank zags mans jambs clash blacks ands chasm flax jams lamb scald smack nabs machs",
  },
  {
    id: "l5",
    title: "Level 5",
    task: "mails azlons limos mason salmon zonal limns axiom laxism inlaw oilman kilns swank amoxil",
  },
  {
    id: "l6",
    title: "Level 6",
    task: "kaoline beacon machine phased scaling comings wedlock avoids gablock lowhang delphi glazes lawmen pinhole",
  },
  {
    id: "l7",
    title: "Level 7",
    task: "blamers frankly uneasy shackle lased subvert maybug rumbas zebras clears trendy nursed abduce shader hacker",
  },
  {
    id: "l8",
    title: "Level 8",
    task: "rechain karstic hornet silent marbly cervoid ordinate sowable unworthy splicer buckthorn tribunal fibrose primula monicker psalmodic uparch",
  },
  {
    id: "l9",
    title: "Level 9",
    task: "upgrades peculation whackier jocularity zymoplastic thylacine duplicator switchyard expurgation suzerainty powerlifting dumbwaiter brumation showjumping sparkling keywords",
  },
  {
    id: "l10",
    title: "Level 10",
    task: "overflushing intellectualization sharptongued preadjusting venustraphobic interdenominational aberration electroencephalograph ginglymus heterogenous anachronistic punctilious redoubtable philanthropic surreptitious evanescent",
  },
];

export function Training(props) {
  const [showLevels, setShowLevels] = useState(true);
  const [placeholder, setPlaceholder] = useState("Please, choose the level");
  const [disabledInput, setDisabledInput] = useState(true);
  const [inputTouched, setInputTouched] = useState(false);

  const {
    changeInputHandler,
    inputText,
    updatedText,
    counter,
    keyPressHandler,
  } = useInputChecker({
    text: placeholder,
    setPlaceholder,
    setShowLevels,
    setDisabledInput,
  });

  const chooseLevelHandler = (e) => {
    setTimeout(() => {
      document.querySelector("#training-input").focus();
    }, 100);
    setShowLevels(false);
    setPlaceholder(
      DUMMY_LEVELS.filter((lvl) => lvl.id === e.target.id)[0].task
    );
    setDisabledInput(false);
    setInputTouched(true);
  };

  const closeModalHandler = () => {
    setPlaceholder("Please, choose the level");
    setShowLevels(true);
    setDisabledInput(true);
    setInputTouched(false);
  };

  return (
    <div className={classes.body}>
      {inputTouched && showLevels && (
        <Modal
          content={{ message: "Great! Try the next level!" }}
          onClose={closeModalHandler}
        />
      )}
      <Input
        id="training-input"
        keyPressHandler={keyPressHandler}
        changeInputHandler={changeInputHandler}
        inputText={inputText}
        text={updatedText[counter]}
        disabled={disabledInput}
      />
      <div>
        <ul className={classes.list}>
          {showLevels &&
            DUMMY_LEVELS.map((lvl) => (
              <li className={classes.level} key={lvl.id}>
                <Button id={lvl.id} onClick={chooseLevelHandler}>
                  {lvl.title}
                </Button>
              </li>
            ))}
        </ul>
        <div className={classes["button-wrapper"]}>
          {!showLevels && (
            <Button className={classes.back} onClick={closeModalHandler}>
              Back to levels
            </Button>
          )}
        </div>
      </div>
      <KeyboardMint />
    </div>
  );
}
