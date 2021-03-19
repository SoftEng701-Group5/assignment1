import React from "react";
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import App from '../App';
import '@testing-library/jest-dom/extend-expect'



afterEach(cleanup)

// Helper tool
const renderWithRouter = (ui, {route='/'} = {}) => {
    window.history.pushState({}, 'Test page', route)
    return render(ui, {wrapper: BrowserRouter});
}

test("Login page renders", () =>{
  render(<App />);
  const text = screen.getByText("Login");
  expect(text).toBeInTheDocument();
})

// Likely needs to be removed with a test that works with login
test('Clicking login brings you to Home', () =>{
    render(<App/>);
    fireEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Dashboard")).toBeInTheDocument();

})

// Render with a bad address, expecting to get the pageNotFoundView
test("Land on invalid page", () =>{
    renderWithRouter(<App />, {route: '/bad/address'})

    expect(screen.getByText(/error/i)).toBeInTheDocument();
})

// Edit test once trello board is actually fleshed out
test("Land on Trello page", () => {
    renderWithRouter(<App/>, {route:'/board'})
    expect(screen.getByText(/Task/i)).toBeInTheDocument();
})

