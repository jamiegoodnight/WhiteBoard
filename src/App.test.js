import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import Display from "./Display";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders!", () => {
    render(<App />);
  });
  it("renders 'BASEBALL'", () => {
    const { getByText } = render(<App />);
    getByText(/BASEBALL/);
  });
  it("renders numbers of hits after hit function is fired", () => {
    const { getByText } = render(<App />);
    const button = getByText(/HIT/);
    fireEvent.click(button);
    getByText(/Hits: 1/);
  });
  it("renders numbers of strikes after strike function is fired", () => {
    const { getByText } = render(<App />);
    const button = getByText(/STRIKE/);
    fireEvent.click(button);
    getByText(/Strikes: 1/);
  });
  it("renders numbers of fouls after foul function is fired", () => {
    const { getByText } = render(<App />);
    const button = getByText(/FOUL/);
    fireEvent.click(button);
    getByText(/Fouls: 1/);
  });
});

describe("<Dashboard />", () => {
  it("renders!", () => {
    render(<Dashboard />);
  });
  it("renders 'STRIKE'", () => {
    const { getByText } = render(<App />);
    getByText(/STRIKE/);
  });
  it("fires hit function", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/HIT/);
    fireEvent.click(button);
  });
});

describe("<Display />", () => {
  it("renders!", () => {
    render(<Display />);
  });
  it("renders the number of hits", () => {
    const { getByText } = render(<App />);
    getByText(/Hits: 0/);
  });
  it("renders the number of fouls", () => {
    const { getByText } = render(<App />);
    getByText(/Fouls: 0/);
  });
});
