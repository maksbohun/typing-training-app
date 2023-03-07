import React from "react";
import "./KeyboardOrange.css";
import classes from "./KeyboardMint.module.css";
import command from "./../../icons/command.svg";
import caretLeft from "./../../icons/caret-left.svg";
import caretRight from "./../../icons/caret-right.svg";
import caretUp from "./../../icons/caret-up.svg";
import caretDown from "./../../icons/caret-down.svg";

const Keyboard = () => {
  return (
    <div className={`${classes["keyboard-body"]}`}>
      <div className={classes.keyboard}>
        <ul className={`${classes["row"]} ${classes["row-0"]}`}>
          <li className={`key ${classes.mint}`} id="Escape">
            ESC
          </li>
          <li className={`key ${classes.white}`} id="Digit1">
            1
          </li>
          <li className={`key ${classes.white}`} id="Digit2">
            2
          </li>
          <li className={`key ${classes.white}`} id="Digit3">
            3
          </li>
          <li className={`key ${classes.white}`} id="Digit4">
            4
          </li>
          <li className={`key ${classes.white}`} id="Digit5">
            5
          </li>
          <li className={`key ${classes.white}`} id="Digit6">
            6
          </li>
          <li className={`key ${classes.white}`} id="Digit7">
            7
          </li>
          <li className={`key ${classes.white}`} id="Digit8">
            8
          </li>
          <li className={`key ${classes.white}`} id="Digit9">
            9
          </li>
          <li className={`key ${classes.white}`} id="Digit0">
            0
          </li>
          <li className={`key ${classes.white}`}>-</li>
          <li className={`key ${classes.white}`}>+</li>
          <li className={`key ${classes.turquoise}`} id="Backspace">
            BACK
          </li>
        </ul>

        <ul className={`${classes.row} ${classes["row-1"]}`}>
          <li className={`key ${classes.mint}`} id="Tab">
            TAB
          </li>
          <li className={`key ${classes.white}`} id="KeyQ">
            Q
          </li>
          <li className={`key ${classes.white}`} id="KeyW">
            W
          </li>
          <li className={`key ${classes.white}`} id="KeyE">
            E
          </li>
          <li className={`key ${classes.white}`} id="KeyR">
            R
          </li>
          <li className={`key ${classes.white}`} id="KeyT">
            T
          </li>
          <li className={`key ${classes.white}`} id="KeyY">
            Y
          </li>
          <li className={`key ${classes.white}`} id="KeyU">
            U
          </li>
          <li className={`key ${classes.white}`} id="KeyI">
            I
          </li>
          <li className={`key ${classes.white}`} id="KeyO">
            O
          </li>
          <li className={`key ${classes.white}`} id="KeyP">
            P
          </li>
          <li className={`key ${classes.white}`} id="BracketLeft">
            [
          </li>
          <li className={`key ${classes.white}`} id="BracketRight">
            ]
          </li>
          <li className={`key ${classes.turquoise}`} id="Backslash">
            \
          </li>
        </ul>

        <ul className={`${classes.row} ${classes["row-2"]}`}>
          <li className={`key ${classes.mint}`} id="CapsLock">
            CAPS
          </li>
          <li className={`key ${classes.white}`} id="KeyA">
            A
          </li>
          <li className={`key ${classes.white}`} id="KeyS">
            S
          </li>
          <li className={`key ${classes.white}`} id="KeyD">
            D
          </li>
          <li className={`key ${classes.white}`} id="KeyF">
            F
          </li>
          <li className={`key ${classes.white}`} id="KeyG">
            G
          </li>
          <li className={`key ${classes.white}`} id="KeyH">
            H
          </li>
          <li className={`key ${classes.white}`} id="KeyJ">
            J
          </li>
          <li className={`key ${classes.white}`} id="KeyK">
            K
          </li>
          <li className={`key ${classes.white}`} id="KeyL">
            L
          </li>
          <li className={`key ${classes.white}`}>:</li>
          <li className={`key ${classes.white}`}>''</li>
          <li className={`key ${classes.turquoise}`} id="Enter">
            ENTER
          </li>
        </ul>

        <ul className={`${classes.row} ${classes["row-3"]}`}>
          <li className={`key ${classes.mint}`} id="ShiftLeft">
            SHIFT
          </li>
          <li className={`key ${classes.white}`} id="KeyZ">
            Z
          </li>
          <li className={`key ${classes.white}`} id="KeyX">
            X
          </li>
          <li className={`key ${classes.white}`} id="KeyC">
            C
          </li>
          <li className={`key ${classes.white}`} id="KeyV">
            V
          </li>
          <li className={`key ${classes.white}`} id="KeyB">
            B
          </li>
          <li className={`key ${classes.white}`} id="KeyN">
            N
          </li>
          <li className={`key ${classes.white}`} id="KeyM">
            M
          </li>
          <li className={`key ${classes.white}`} id="Comma">
            ,
          </li>
          <li className={`key ${classes.white}`} id="Period">
            .
          </li>
          <li className={`key ${classes.white}`} id="Semicolon">
            ;
          </li>
          <li className={`key ${classes.turquoise}`} id="ShiftRight">
            SHIFT
          </li>
        </ul>

        <ul className={`${classes.row} ${classes["row-3"]}`}>
          <li className={`key ${classes.mint}`} id="ControlLeft">
            ctrl
          </li>
          <li className={`key ${classes.mint}`} id="MetaLeft">
            option
          </li>
          <li className={`key ${classes.mint}`} id="AltLeft">
            command
          </li>
          <li className={`key ${classes.white}`} id="Space">
            &nbsp;
          </li>
          <li className={`key ${classes.turquoise}`} id="AltRight">
            <img src={command} />
          </li>
          <li className={`key ${classes.turquoise}`} id="fn">
            fn
          </li>
          <li className={`key ${classes.turquoise}`} id="ControlRight">
            ctrl
          </li>
          <li className={`key ${classes.mint}`} id="ArrowLeft">
            <img src={caretLeft} />
          </li>
          <li id="carets">
            <img src={caretUp} className={`${classes.mint} key`} id="ArrowUp" />
            <img
              src={caretDown}
              className={`${classes.mint} key`}
              id="ArrowDown"
            />
          </li>
          <li className={`key ${classes.mint}`} id="ArrowRight">
            <img src={caretRight} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Keyboard;
