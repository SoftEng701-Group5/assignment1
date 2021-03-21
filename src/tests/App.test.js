import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

// Basic test to check login page renders, will add more once
// tests are functional
test("Login page renders", () => {
  render(<App />);
  const text = screen.getByText("Login");
  expect(text).toBeInTheDocument();
});
