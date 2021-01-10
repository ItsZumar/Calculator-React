import React, { useState } from "react";
import "./calc.css";

const Calc = () => {
  const [val, setVal] = useState("");
  const [res, setRes] = useState(0);

  const handleClick = (e) => {
    const inp = e.target.value;
    if (inp >= "1" && inp <= "9") {
      setVal(val + inp);
    } else if (inp === "+" || inp === "-" || inp === "*" || inp === "/") {
      console.log("arithmetic operation");
      setVal(val + inp);
    } else if (inp === "=") {
      var result = eval(val);
      setRes(result);
    }
  };

  const handleClear = () => {
    setVal("");
    setRes(0);
  };


  return (
    <div className="calculator">
      <div className="display">
        <p className="input">{val}</p>
        <p>{res}</p>
      </div>

      <div className="btn">
        <div className="row">
          <button className="number" onClick={handleClick} value="1">
            1
          </button>
          <button className="number" onClick={handleClick} value="2">
            2
          </button>
          <button className="number" onClick={handleClick} value="3">
            3
          </button>
          <button className="operator" onClick={handleClick} value="+">
            +
          </button>
        </div>
        <div className="row">
          <button className="number" onClick={handleClick} value="4">
            4
          </button>
          <button className="number" onClick={handleClick} value="5">
            5
          </button>
          <button className="number" onClick={handleClick} value="6">
            6
          </button>
          <button className="operator" onClick={handleClick} value="-">
            -
          </button>
        </div>
        <div className="row">
          <button className="number" onClick={handleClick} value="7">
            7
          </button>
          <button className="number" onClick={handleClick} value="8">
            8
          </button>
          <button className="number" onClick={handleClick} value="9">
            9
          </button>
          <button className="operator" onClick={handleClick} value="*">
            *
          </button>
        </div>
        <button className="two number" onClick={handleClear} value="C">
          Clear
        </button>
        <button className="Equal" onClick={handleClick} value="=">
          =
        </button>
        <button className="operator" onClick={handleClick} value="/">
          /
        </button>
      </div>
    </div>
  );
};

export default Calc;
