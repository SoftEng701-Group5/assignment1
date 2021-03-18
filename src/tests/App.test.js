import React from "react";
import {render, screen, fireEvent, cleanup} from '@testing-library/react';

import userEvent from "@testing-library/user-event"
import{createMemoryHistory} from 'history'
import {MemoryRouter, Router, BrowserRouter} from 'react-router-dom'
import App from '../App';
import getIcon from '../components/global/componentFunctions'
import '@testing-library/jest-dom/extend-expect'

import IconButton from '../components/global/IconButton';
import NavBar from '../components/Navbar';
import Button from '../components/global/Button';

afterEach(cleanup)
// helper function, might be moved to be used for all navigation tests
const renderWithRouter = (ui, {route='/'} = {}) => {
    window.history.pushState({}, 'Test page', route)
    return render(ui, {wrapper: BrowserRouter});
}
/*
test('renders app without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}) */

// Test likely to be removed, just a 'test' test.
test("Login page contains correct text", () =>{
  render(<App />);
  const text = screen.getByText("Login");
  expect(text).toBeInTheDocument();
})

// Don't have access to firebase stuff yet, so hard to write tests.
/* test("Test Fetch Requests", ()=>{
  //const renderComponent
}) */

/* test("Test navbar", () => {
  const onClick = jest.fn();
  const {getByText} = render(<Button onClick={onClick} />);

  fireEvent.click(getByText(/click me/i));
  expect(onClick).toHaveBeenCalled();
}) */

/* test("Test NavBar", () => {

}) */

/*
test('full app rendering/navigating', () =>{
  const history = createMemoryHistory()
  render(
      <Router history = {history}>
        <App />
      </Router>
  )
  //verify page content for expected route
  //should use a data-test id or role query, but can do this as a simple way
  expect(screen.getByText(/Login/i)).toBeInTheDocument()
  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/Login/i), leftClick)
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
}) */

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
// test("")

// Edit test once trello board is actually fleshed out
test("Land on Trello page", () => {
    renderWithRouter(<App/>, {route:'/board'})
    expect(screen.getByText(/Task/i)).toBeInTheDocument();
})
// don't know how to 'find' nav button on the page.
test("Navbar takes you to different pages", () => {
    renderWithRouter(<App/>, {route: '/home'})
    // this approach seems closest, but output is incorrect (error is 'Unable to find an accessible element with the role button and name '[object Object]'
    fireEvent.click(screen.getByRole('button', {name:getIcon("BoardImage")}))
    expect(screen.getByText(/Task/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button-link', {name:/home/i}))
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button-link'), {name:/dashboard/i})
    expect(screen.getByText(/Timer/i)).toBeInTheDocument();

    // this might not work either, likely remove
    fireEvent.keyDown(screen.getByRole('button-link', {name:/home/i}))
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
})

