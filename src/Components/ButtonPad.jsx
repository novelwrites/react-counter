import React from "react";

export default function ButtonPad(props) {
  return (
    <div>
      <button onClick={props.increment}>Up Button</button>
      <button onClick={props.decrement}>Down Button</button>
      <button onClick={props.reset}>Reset Button</button>
    </div>
  );
}
