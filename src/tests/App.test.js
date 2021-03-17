import React from "react";
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import App from '../App';
import userEvent from "@testing-library/user-event"
import{createMemoryHistory} from 'history'
import {MemoryRouter, Router, BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

import IconButton from '../components/global/IconButton';
import NavBar from '../components/Navbar';
import Button from '../components/global/Button';

afterEach(cleanup)
/*
test('renders app without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})*/

//Test likely to be removed, just a 'test' test.
test("Login page contains correct text", () =>{
  render(<App />);
  const text = screen.getByText("Login");
  expect(text).toBeInTheDocument();
})

//Don't have access to firebase stuff yet, so hard to write tests.
/*test("Test Fetch Requests", ()=>{
  //const renderComponent
})*/

/*test("Test navbar", () => {
  const onClick = jest.fn();
  const {getByText} = render(<Button onClick={onClick} />);

  fireEvent.click(getByText(/click me/i));
  expect(onClick).toHaveBeenCalled();
})*/

/*test("Test NavBar", () => {

})*/

/*
test('full app rendering/navigating', () =>{
  const history = createMemoryHistory()
  render(
      <Router history = {history}>
        <App />
      </Router>
  )
  //verify page content for expected route
  //should use a data-testid or role query, but can do this as a simple way
  expect(screen.getByText(/Login/i)).toBeInTheDocument()
  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/Login/i), leftClick)
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
})*/

test('Clicking login brings you to dashboard', () =>{
    render(<App/>);
    fireEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Dashboard")).toBeInTheDocument();

})

//Render with a bad address, expecting to get the pageNotFoundView
test("Land on invalid page", () =>{
    //helper function, might be moved to be used for all navigation tests
    const renderWithRouter = (ui, {route='/'} = {}) => {
        window.history.pushState({}, 'Test page', route)
        return render(ui, {wrapper: BrowserRouter});
    }
    renderWithRouter(<App></App>, {route: '/bad/address'})

    expect(screen.getByText(/error/i)).toBeInTheDocument();
})
//test("")