import React from "react";
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Button from '../../components/global/Button'
import userEvent from "@testing-library/user-event"
import{createMemoryHistory} from 'history'
import {Router, BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)
/*
test('Button test case', () =>{
    const{container} = render(<Button path={'/home'} text ="Click Me"/>);
    expect(container).toMatchSnapshot();
})*/

test("Renders without crashing", () => {
    const div = document.createElement("div");
    render(<BrowserRouter><Button></Button>, div </BrowserRouter>)
})

test("Renders button correctly", () => {
   const{container} = render(<BrowserRouter><Button path={'/home'} text ="Click Me" ></Button></BrowserRouter>);
   expect(container).toHaveTextContent("Click Me");

})