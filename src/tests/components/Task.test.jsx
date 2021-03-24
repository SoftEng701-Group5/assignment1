import React from "react";
import { render, cleanup } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Task from "../../components/global/Task/Task";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("Renders Task and Subtask correctly", () => {
  const mockData = [{ id: 0, name: "Subtask" }];
  const { container } = render(
    <BrowserRouter>
      <Task expanded checked name="Test 1" subtasks={mockData} />
    </BrowserRouter>
  );
  expect(container).toHaveTextContent("Test 1");
  expect(container).toHaveTextContent("Subtask");
});

test("Renders multiple subtasks correctly", () => {
  const mockData = [
    { id: 0, name: "Subtask 1" },
    { id: 1, name: "Subtask 2" },
    { id: 2, name: "Subtask 3" },
  ];
  const { container } = render(
    <BrowserRouter>
      <Task expanded name="Test 2" subtasks={mockData} />
    </BrowserRouter>
  );
  expect(container).toHaveTextContent("Subtask 1");
  expect(container).toHaveTextContent("Subtask 2");
  expect(container).toHaveTextContent("Subtask 3");
});
