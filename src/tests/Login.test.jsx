import React from "react";
import {render, screen, waitFor, fireEvent, cleanup} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import userEvent from "@testing-library/user-event";
import App from '../App';
import '@testing-library/jest-dom/extend-expect'

const renderWithRouter = (ui, {route='/'} = {}) => {
    window.history.pushState({}, 'Test page', route)
    return render(ui, {wrapper: BrowserRouter});
}

// should probably be in a separate test 'helper' file, but can't get that working for some reason
const getGreeting = () => {
    const myDate = new Date();
    const hrs = myDate.getHours();
    let msg;
    if (hrs < 12){
        msg= "Good Morning";
    }
    else if (hrs < 18){
        msg = "Good Afternoon";
    }
    else msg = "Good Evening";

    return msg;
};
// Need to figure out why this test fails, as this login method is
// how tests will need to be run
jest.setTimeout(20000);
test("Correct Login", async() => {
    const email = 'ddow731@aucklanduni.ac.nz';
    const password = 'TestAccount';
    // renderWithRouter(<App />, {route: '/'});
    // <App/>
    userEvent.type(screen.getByTestId('email'), email);
    userEvent.type(screen.getByTestId('password'), password);
    expect(screen.getByText('ddow731@aucklanduni.ac.nz')).toBeInTheDocument();
    fireEvent.click(screen.getByText("Login"));
    await new Promise((r) => setTimeout(r,19000))
    expect(screen.getByText(getGreeting())).toBeInTheDocument();
})