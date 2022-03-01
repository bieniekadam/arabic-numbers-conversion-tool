import "./App.css";
import { useState } from "react";
import arrow from "../src/images/arrow.png";

export function App(): JSX.Element {
  const [input, setInput] = useState("");

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
        <div className="result">{numToWords(Number(input))}</div>
      </div>
    </div>
  );
}

export default App;

export function numToWords(num: any = 0) {
  if (num == 0) return "Zero";
  num = ("0".repeat((2 * (num += "").length) % 3) + num).match(/.{3}/g);
  let out = "",
    T10s = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
    T20s = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ],
    sclT = ["", "thousand", "million", "billion", "trillion", "quadrillion"];
  return (
    num.forEach((n: string, i: number) => {
      if (+n) {
        let hundred = +n[0],
          ten = +n.substring(1),
          scl = sclT[num.length - i - 1];
        out +=
          (out ? " " : "") +
          (hundred ? T10s[hundred] + " hundred" : "") +
          (hundred && ten ? " " : "") +
          (ten < 20
            ? T10s[ten]
            : "and " + T20s[+n[1]] + (+n[2] ? "-" : "") + T10s[+n[2]]);
        out += (out && scl ? " " : "") + scl;
      }
    }),
    out
  );
}
