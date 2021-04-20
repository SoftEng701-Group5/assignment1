import React from "react";
import { render, cleanup } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Task from "../../components/global/Task/Task";
import "@testing-library/jest-dom/extend-expect";
import { AuthContext } from "../../services/providers/authProvider";

afterEach(cleanup);

test("Renders Task correctly", () => {
  const { container } = render(
    <AuthContext.Provider value={{ currentUser: "myUser" }}>
      <BrowserRouter>
        <Task expanded checked name="Test 1" subtasks={[]} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
  expect(container).toHaveTextContent("Test 1");
});
