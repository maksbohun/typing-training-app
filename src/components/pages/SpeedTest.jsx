import { useState } from "react";
import { Modal } from "../UI/Modal/Modal";
import { InputChecker } from "../../helpers/InputChecker";
import Keyboard from "./../keyboards/Keyboard";
import classes from "./SpeedTest.module.css";

// const DUMMY_SENTENCES = [
//   "That day started out like any other. I woke up, showered, ate breakfast, checked all my social media feeds, etc. Then I went down stairs to check the mail, and that's when it started to get interesting.",
//   "One day, about three months later, I knocked on the door to Phoebe's room. It wasn't so much a room in the same way we humans have rooms. It was only the size of a closet, but it was divided up into numerous smaller rooms.",
//   "At the mall, we strolled about at a leisurely pace. That is to say, I strolled about at a leisurely pace, and she rode on my shoulder. Occasionally she flew here or there, and sometimes had me go one direction or another.",
//   "Our teasing may seem mean, but as long as he was taking care of us, he didn't have to do anything else. Plus, whenever we did that, we'd swing by at the end of his shift and treat him to ice cream, a fancy pretzel, or some other mall-based treat.",
//   "Both fairies walked around to examine it better. At first, its wings seemed to be black and sky-blue striped, but the iridescent blue turned green, orange, and reddish pink at times, as the viewer looked at it at different angles.",
//   "Along the way, I come across this big, steel bridge over a river. Parked on the side by the bridge is a car. It's a dull, bluish four-door. No emergency blinkers or anything. It's just sitting there.",
//   "The talk goes on like that for a bit. I say something, she says nothing. I say something else, and she remains quiet, but understanding. Then I run out of things to say. Or rather, things to be said there and then.",
// ];

export function SpeedTest() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const text =
    "Both fairies walked around to examine it better. At first, its wings seemed to be black and sky-blue striped, but the iridescent blue turned green, orange, and reddish pink at times, as the viewer looked at it at different angles.".toLowerCase();
  // DUMMY_SENTENCES[(Math.random() * 100).toFixed(0) % 7].toLowerCase();

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const getMessageHandler = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div className={classes["test-section"]}>
      <InputChecker
        getMessage={getMessageHandler}
        setShowModal={setShowModal}
        showModal={showModal}
        text={text}
      />
      <Keyboard />
      {showModal && <Modal onClose={closeModalHandler} content={message} />}
    </div>
  );
}
