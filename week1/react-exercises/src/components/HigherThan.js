import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  return (
    <div>
      <p> {feedback} </p>
      <Count currentCount={count} />
      <Button setCount={increaseCount} />
    </div>
  );
};

const Count = (props) => <p> {props.currentCount} </p>;

const Button = (props) => (
  <button onClick={() => props.setCount(props.setCount)}>Add 1!</button>
);

export default Counter;
