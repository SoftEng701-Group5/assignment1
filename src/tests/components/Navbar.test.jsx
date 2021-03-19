import React from "react";
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

import App from "../../App";
import Navbar from "../../components/Navbar";


afterEach(cleanup)

// Helper function, should be moved to a separate testing script.
// allows the render page to be specified
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
// This test might not do anything? I'm just not sure how else to test if it renders
test("Navbar renders correctly", () => {
    const{container} = render(<BrowserRouter><Navbar/></BrowserRouter>);
    expect(container).toBeInTheDocument();
})

// May need edits, but should work fine. Tests that the navbar works

test("Navbar takes you to different pages", () => {
    renderWithRouter(<App/>, {route: '/home'})
    fireEvent.click(screen.getByTestId("dashboard"))
    // Will need to change this when dashboard text is included
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("home"))
    expect(screen.getByText(getGreeting())).toBeInTheDocument();

    // Test line for home page
   // expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("board"))
    expect(screen.getByText(/Today's Tasks/i)).toBeInTheDocument();

    // this might not work either, likely remove
    fireEvent.keyDown(screen.getByTestId("home"))
    expect(screen.getByText(getGreeting())).toBeInTheDocument();

})
