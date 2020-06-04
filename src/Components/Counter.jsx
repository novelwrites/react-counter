import React, { useState } from "react"; //react is the library
import Display from "./Display.jsx"; //path to Display.jsx file
import ButtonPad from "./ButtonPad.jsx"; //function name must match

function Counter() {
  const [display, setDisplay] = useState(0); //placed here
  //so its inside the function
  const increment = () => {
    setDisplay(display + 1); //child is importing from props so you have to the buttonpad
  };
  const decrement = () => {
    setDisplay(display - 1); //child is importing from props so you have to the buttonpad
  };

  const reset = () => {
    setDisplay(0);
  };

  return (
    <div className="counter">
      <Display pizza={display} />{" "}
      {/*{display} is the prop thats passed to display*/}
      <ButtonPad increment={increment} decrement={decrement} reset={reset} />
    </div>
  );
}

export default Counter;
