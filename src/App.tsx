import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import arrow from "../src/images/arrow.png";

function App(): JSX.Element {
  const [input, setInput] = useState("");

  let numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  const makeWord = (input: string) => {
    let mod: number = Number(input) % 10;
    let firstPart: number = Number(input) - mod;
    let noInput: string = "";

    if (input === noInput) {
      return "";
    } else if (Number(input) < 10) {
      return numbers[mod as unknown as keyof typeof numbers];
    } else if (firstPart == 1) {
      return numbers[input as unknown as keyof typeof numbers];
    } else {
      return (
        numbers[firstPart as unknown as keyof typeof numbers] +
        " " +
        numbers[mod as unknown as keyof typeof numbers]
      );
    }
  };

  return (
    <div className="App">
      <div className="all-elements">
        <div className="header">Convert your number</div>
        <div className="arrow">
          <img src={arrow} width="75px" height="60px" className="rotate270" />
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="number-input"
          type="number"
          placeholder=""
        />
        <div className="result">{makeWord(input)}</div>
      </div>
    </div>
  );
}

export default App;
