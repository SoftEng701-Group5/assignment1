import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';

test("Login page renders", () =>{
  render(<App />);
  const text = screen.getByText("Login");
  expect(text).toBeInTheDocument();
})