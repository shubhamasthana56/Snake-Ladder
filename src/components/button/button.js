import React from "react";
import "./button.css";

const Button = ({buttonText = "button", buttonHandler})=> {
    return <button className="button" onClick={buttonHandler}>{buttonText}</button>
}
export default Button