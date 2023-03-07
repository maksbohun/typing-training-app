import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./../../UI/Button/Button";
import classes from "./Home.module.css";
import fastTyping from "../../../images/cat-typing.gif";
import typingChallenges from "../../../images/jim-carrey-typing.gif";
import typingTraining from "../../../images/typing-training.gif";
import { RateBar } from "./RateBar";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <h1>Typing trainer</h1>
      </header>

      <section className={classes.section}>
        <div>
          <Link to="actions/test">
            <Button>TEST YOUR SPEED</Button>
          </Link>
          <img src={fastTyping} />
        </div>
        <div>
          <Link to="actions/training">
            <Button>TRAIN TYPING</Button>
          </Link>
          <img src={typingChallenges} />
        </div>
        <div>
          <Link to="actions/challenge">
            <Button>CHALLENGES</Button>
          </Link>
          <img src={typingTraining} />
        </div>
      </section>

      <footer>
        <RateBar />
      </footer>
    </div>
  );
};

export default Home;
