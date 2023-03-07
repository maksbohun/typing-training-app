import classes from "./Button.module.css";

export function Button(props) {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      style={props.style}
      onClick={props.onClick}
      id={props.id}
    >
      {props.children}
    </button>
  );
}
