import React from "react";
import "./Keyboard.css";
import command from "./../../icons/command.svg";
import caretLeft from "./../../icons/caret-left.svg";
import caretRight from "./../../icons/caret-right.svg";
import caretUp from "./../../icons/caret-up.svg";
import caretDown from "./../../icons/caret-down.svg";

const Keyboard = () => {
  return (
    <div className="keyboard-body">
      {/* <h1 className="title">Eyes on the screen</h1> */}
      <div className="keyboard">
        <ul className="row row-0">
          <li className="key yellow" id="Escape">
            ESC
          </li>
          <li className="key light-gray" id="Digit1">
            1
          </li>
          <li className="key light-gray" id="Digit2">
            2
          </li>
          <li className="key light-gray" id="Digit3">
            3
          </li>
          <li className="key light-gray" id="Digit4">
            4
          </li>
          <li className="key light-gray" id="Digit5">
            5
          </li>
          <li className="key light-gray" id="Digit6">
            6
          </li>
          <li className="key light-gray" id="Digit7">
            7
          </li>
          <li className="key light-gray" id="Digit8">
            8
          </li>
          <li className="key light-gray" id="Digit9">
            9
          </li>
          <li className="key light-gray" id="Digit0">
            0
          </li>
          <li className="key light-gray">-</li>
          <li className="key light-gray">+</li>
          <li className="key pinky" id="Backspace">
            BACK
          </li>
        </ul>

        <ul className="row row-1">
          <li className="key pinky" id="Tab">
            TAB
          </li>
          <li className="key light-gray" id="KeyQ">
            Q
          </li>
          <li className="key light-gray" id="KeyW">
            W
          </li>
          <li className="key light-gray" id="KeyE">
            E
          </li>
          <li className="key light-gray" id="KeyR">
            R
          </li>
          <li className="key light-gray" id="KeyT">
            T
          </li>
          <li className="key light-gray" id="KeyY">
            Y
          </li>
          <li className="key light-gray" id="KeyU">
            U
          </li>
          <li className="key light-gray" id="KeyI">
            I
          </li>
          <li className="key light-gray" id="KeyO">
            O
          </li>
          <li className="key light-gray" id="KeyP">
            P
          </li>
          <li className="key light-gray" id="BracketLeft">
            [
          </li>
          <li className="key light-gray" id="BracketRight">
            ]
          </li>
          <li className="key light-gray" id="Backslash">
            \
          </li>
        </ul>

        <ul className="row row-2">
          <li className="key pinky" id="CapsLock">
            CAPS
          </li>
          <li className="key light-gray" id="KeyA">
            A
          </li>
          <li className="key light-gray" id="KeyS">
            S
          </li>
          <li className="key light-gray" id="KeyD">
            D
          </li>
          <li className="key light-gray" id="KeyF">
            F
          </li>
          <li className="key light-gray" id="KeyG">
            G
          </li>
          <li className="key light-gray" id="KeyH">
            H
          </li>
          <li className="key light-gray" id="KeyJ">
            J
          </li>
          <li className="key light-gray" id="KeyK">
            K
          </li>
          <li className="key light-gray" id="KeyL">
            L
          </li>
          <li className="key light-gray">:</li>
          <li className="key light-gray">''</li>
          <li className="key yellow" id="Enter">
            ENTER
          </li>
        </ul>

        <ul className="row row-3">
          <li className="key pinky" id="ShiftLeft">
            SHIFT
          </li>
          <li className="key light-gray" id="KeyZ">
            Z
          </li>
          <li className="key light-gray" id="KeyX">
            X
          </li>
          <li className="key light-gray" id="KeyC">
            C
          </li>
          <li className="key light-gray" id="KeyV">
            V
          </li>
          <li className="key light-gray" id="KeyB">
            B
          </li>
          <li className="key light-gray" id="KeyN">
            N
          </li>
          <li className="key light-gray" id="KeyM">
            M
          </li>
          <li className="key light-gray" id="Comma">
            ,
          </li>
          <li className="key light-gray" id="Period">
            .
          </li>
          <li className="key light-gray" id="Semicolon">
            ;
          </li>
          <li className="key pinky" id="ShiftRight">
            SHIFT
          </li>
        </ul>
        <ul className="row row-3">
          <li className="key pinky" id="ControlLeft">
            ctrl
          </li>
          <li className="key pinky" id="MetaLeft">
            option
          </li>
          <li className="key pinky" id="AltLeft">
            command
          </li>
          <li className="key yellow" id="Space">
            &nbsp;
          </li>
          <li className="key pinky" id="AltRight">
            <img src={command} />
          </li>
          <li className="key pinky" id="fn">
            fn
          </li>
          <li className="key pinky" id="ControlRight">
            ctrl
          </li>
          <li className="key pinky" id="ArrowLeft">
            <img src={caretLeft} />
          </li>
          <li id="carets">
            <img src={caretUp} className="pinky key" id="ArrowUp" />
            <img src={caretDown} className="pinky key" id="ArrowDown" />
          </li>
          <li className="key pinky" id="ArrowRight">
            <img src={caretRight} />
          </li>
        </ul>
      </div>
      {/* <h1 className="title">Hands on the keyboard</h1> */}
    </div>
  );
};

export default Keyboard;
