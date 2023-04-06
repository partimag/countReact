import React, { useState } from "react";
import "./index.css";
function Counter() {
  let [count, setCount] = useState(0);
  const incrementBtn = () => {
    setCount(count + 1);
  };
  const decrementBtn = () => {
    setCount(count - 1);
  };
  const useStyle = {
    backgroundColor: "green",
    color: "white",
    margin: "50px",
  };
  const paraStyle = {
    margin: "200px",
    padding: "20px",
    marginRight: "300px",
  };
  return (
    <>
      <diV className="body">
        <p
          style={{
            fontSize: "3rem",
            color: "green",

            justifyItems: "center",
            alignItems: "center",
            margin: "200px",
            padding: "50px",
          }}
        >
          the value is {count}
        </p>

        <button
          type="button"
          style={useStyle}
          className="btn btn-success "
          onClick={incrementBtn}
        >
          Increment
        </button>
        <button
          type="button"
          style={useStyle}
          className="btn btn-danger "
          onClick={decrementBtn}
        >
          Dcrement
        </button>
      </diV>
    </>
  );
}

export default Counter;
