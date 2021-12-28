import React from "react";

<<<<<<< Updated upstream
import "./Button.css";

const Button = (props) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
=======
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
>>>>>>> Stashed changes
      {props.children}
    </button>
  );
};

export default Button;
