import { render, screen } from "@testing-library/react";
import App, { numToWords } from "./App";

test("displays 7 correctly", () => {
  render(<App />);
  expect(numToWords(7)).toEqual("seven");
});

test("displays 42 correctly", () => {
  render(<App />);
  expect(numToWords(42)).toEqual("forty-two");
});

test("displays 1999 correctly", () => {
  render(<App />);
  expect(numToWords(1999)).toEqual("one thousand nine hundred and ninety-nine");
});

test("displays 2001 correctly", () => {
  render(<App />);
  expect(numToWords(2001)).toEqual("two thousand and one");
});

test("displays 17999 correctly", () => {
  render(<App />);
  expect(numToWords(17999)).toEqual(
    "seventeen thousand nine hundred and ninety-nine"
  );
});

test("displays 342251 correctly", () => {
  render(<App />);
  expect(numToWords(342251)).toEqual(
    "three hundred and forty-two thousand two hundred and fifty-one"
  );
});

test("displays 1300420 correctly", () => {
  render(<App />);
  expect(numToWords(1300420)).toEqual(
    "one million three hundred thousand four hundred and twenty"
  );
});
