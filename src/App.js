import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginView from './pages/loginView';
import PageNotFoundView from './pages/pageNotFoundView';
import TimerModal from './components/TimerModal/TimerModal';
import TimerRightSide from "./components/TimerModal/TimerRightSide";
import TimerLeftSide from "./components/TimerModal/TimerLeftSide";


function App() {
    return (
        <Router>
            <div className="app">
                <h1>Global content</h1>
                <Switch>
                    {/* Route to login page */}
                    <Route exact path="/">
                        <LoginView/>
                    </Route>

                    <Route path={"/timerModal"}>
                        <TimerModal onPlay={() => console.log("Play Pressed")}
                                    onResize={() => console.log("Resize Pressed")}
                                    children={TimerRightSide()}
                                    leftSide={TimerLeftSide()}/>
                    </Route>

                    {/* Fallback - if none of the above routes are hit */}
                    <Route>
                        <PageNotFoundView/>
                    </Route>
                </Switch>
                <div className="circle1" />
                <div className="circle2" />
            </div>
        </Router>
    );
}

export default App;
