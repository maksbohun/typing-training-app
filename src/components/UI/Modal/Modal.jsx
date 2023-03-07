import React from "react";
import classes from "./Modal.module.css";

export function Modal(props) {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <div className={classes.content}>
          <p>{props.content.message}</p>
          {props.content.mistakes ? <p>{props.content.mistakes}</p> : ""}
          {props.content.time ? <p>{props.content.time}</p> : ""}
        </div>
      </div>
    </React.Fragment>
  );
}
