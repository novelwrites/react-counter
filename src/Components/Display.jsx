import React, { useState } from "react";

function Display(props) {
  // const [display,setDisplay] = useState(0);

  return <section className="display">{props.pizza}</section>;
  //the only way to receive the value of the display is through props.pizza
}

export default Display;
