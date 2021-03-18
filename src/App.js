import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./pages/loginView";
import HomeView from "./pages/homeView";
import PageNotFoundView from "./pages/pageNotFoundView";
import Navbar from "./components/Navbar";
import TimerModal from './components/TimerModal/TimerModal';
import TimerSection from "./components/TimerModal/TimerSection";
import AssignmentAndNotes from "./components/TimerModal/AssignmentAndNoteSection";

function App() {
    return (
        <Router>
            <div className="background">
                <Navbar/>
                <div className="main-content">
                    <Switch>
                        {/* Route to login page */}
                        <Route exact path="/">
                            <LoginView/>
                        </Route>
                        <Route exact path="/home">
                            <HomeView/>
                        </Route>

                        <Route path="/timerModal">
                            <TimerModal timerSection={TimerSection("Work")}
                                        assignmentAndNoteSection={AssignmentAndNotes()}/>
                        </Route>

                        {/* Fallback - if none of the above routes are hit */}
                        <Route>
                            <PageNotFoundView/>
                        </Route>
                    </Switch>
                </div>

                <div className="circle1"/>
                <div className="circle2"/>
            </div>
        </Router>
    );
}

export default App;
