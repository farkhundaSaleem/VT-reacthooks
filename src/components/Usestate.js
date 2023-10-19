import React from "react";
import { useState } from "react";

const Usestate = () => {
  let [count, setcount] = useState(0);
  return (
    <>
      <button onClick={() => setcount(count + 1)}>+</button>
      {count}
      <button onClick={() => (count === 0) ? setcount(0) : setcount(count - 1)}>-</button>
    </>
  );
};

export default Usestate;
