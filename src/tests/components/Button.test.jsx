import React from "react";
import {render, cleanup} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Button from '../../components/global/Button'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

test("Renders without crashing", () => {
    const div = document.createElement("div");
    render(<BrowserRouter><Button />, div </BrowserRouter>);
})

test("Renders button correctly", () => {
   const{container} = render(<BrowserRouter><Button path="/home" text ="Click Me"  /></BrowserRouter>);
   expect(container).toHaveTextContent("Click Me");
})