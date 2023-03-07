import React from "react";
import "./KeyboardOrange.css";
import command from "./../../icons/command.svg";
import caretLeft from "./../../icons/caret-left.svg";
import caretRight from "./../../icons/caret-right.svg";
import caretUp from "./../../icons/caret-up.svg";
import caretDown from "./../../icons/caret-down.svg";

const Keyboard = (props) => {
  return (
    <div className={`keyboard-body ${props.className}`}>
      <div className="keyboard">
        <ul className="row row-0">
          <li className="key orange" id="Escape">
            ESC
          </li>
          <li className="key white" id="Digit1">
            1
          </li>
          <li className="key white" id="Digit2">
            2
          </li>
          <li className="key white" id="Digit3">
            3
          </li>
          <li className="key white" id="Digit4">
            4
          </li>
          <li className="key white" id="Digit5">
            5
          </li>
          <li className="key white" id="Digit6">
            6
          </li>
          <li className="key white" id="Digit7">
            7
          </li>
          <li className="key white" id="Digit8">
            8
          </li>
          <li className="key white" id="Digit9">
            9
          </li>
          <li className="key white" id="Digit0">
            0
          </li>
          <li className="key white">-</li>
          <li className="key white">+</li>
          <li className="key dark-gray" id="Backspace">
            BACK
          </li>
        </ul>

        <ul className="row row-1">
          <li className="key dark-gray" id="Tab">
            TAB
          </li>
          <li className="key white" id="KeyQ">
            Q
          </li>
          <li className="key white" id="KeyW">
            W
          </li>
          <li className="key white" id="KeyE">
            E
          </li>
          <li className="key white" id="KeyR">
            R
          </li>
          <li className="key white" id="KeyT">
            T
          </li>
          <li className="key white" id="KeyY">
            Y
          </li>
          <li className="key white" id="KeyU">
            U
          </li>
          <li className="key white" id="KeyI">
            I
          </li>
          <li className="key white" id="KeyO">
            O
          </li>
          <li className="key white" id="KeyP">
            P
          </li>
          <li className="key white" id="BracketLeft">
            [
          </li>
          <li className="key white" id="BracketRight">
            ]
          </li>
          <li className="key white" id="Backslash">
            \
          </li>
        </ul>

        <ul className="row row-2">
          <li className="key dark-gray" id="CapsLock">
            CAPS
          </li>
          <li className="key white" id="KeyA">
            A
          </li>
          <li className="key white" id="KeyS">
            S
          </li>
          <li className="key white" id="KeyD">
            D
          </li>
          <li className="key white" id="KeyF">
            F
          </li>
          <li className="key white" id="KeyG">
            G
          </li>
          <li className="key white" id="KeyH">
            H
          </li>
          <li className="key white" id="KeyJ">
            J
          </li>
          <li className="key white" id="KeyK">
            K
          </li>
          <li className="key white" id="KeyL">
            L
          </li>
          <li className="key white">:</li>
          <li className="key white">''</li>
          <li className="key orange" id="Enter">
            ENTER
          </li>
        </ul>

        <ul className="row row-3">
          <li className="key dark-gray" id="ShiftLeft">
            SHIFT
          </li>
          <li className="key white" id="KeyZ">
            Z
          </li>
          <li className="key white" id="KeyX">
            X
          </li>
          <li className="key white" id="KeyC">
            C
          </li>
          <li className="key white" id="KeyV">
            V
          </li>
          <li className="key white" id="KeyB">
            B
          </li>
          <li className="key white" id="KeyN">
            N
          </li>
          <li className="key white" id="KeyM">
            M
          </li>
          <li className="key white" id="Comma">
            ,
          </li>
          <li className="key white" id="Period">
            .
          </li>
          <li className="key white" id="Semicolon">
            ;
          </li>
          <li className="key dark-gray" id="ShiftRight">
            SHIFT
          </li>
        </ul>

        <ul className="row row-3">
          <li className="key dark-gray" id="ControlLeft">
            ctrl
          </li>
          <li className="key dark-gray" id="MetaLeft">
            option
          </li>
          <li className="key dark-gray" id="AltLeft">
            command
          </li>
          <li className="key white" id="Space">
            &nbsp;
          </li>
          <li className="key dark-gray" id="AltRight">
            <img src={command} />
          </li>
          <li className="key dark-gray" id="fn">
            fn
          </li>
          <li className="key dark-gray" id="ControlRight">
            ctrl
          </li>
          <li className="key orange" id="ArrowLeft">
            <img src={caretLeft} />
          </li>
          <li id="carets">
            <img src={caretUp} className="orange key" id="ArrowUp" />
            <img src={caretDown} className="orange key" id="ArrowDown" />
          </li>
          <li className="key orange" id="ArrowRight">
            <img src={caretRight} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Keyboard;
