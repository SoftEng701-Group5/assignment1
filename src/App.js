import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./pages/loginView";
import HomeView from "./pages/homeView";
import PageNotFoundView from "./pages/pageNotFoundView";
import Navbar from "./components/Navbar";
import TimerModal from './TimerModal/TimerModal';
import TimerRightSide from "./TimerModal/TimerRightSide";

function App() {
  return (
    <Router>
      <div className="background">
        <Navbar />
        <div className="main-content">
          <Switch>
            {/* Route to login page */}
            <Route exact path="/">
              <LoginView />
            </Route>
            <Route exact path="/home">
              <HomeView />
            </Route>

              <Route path={"/timerModal"}>
                  <TimerModal onPlay={() => console.log("Play Pressed")}
                              onResize={() => console.log("Resize Pressed")}
                              children={TimerRightSide()}/>
              </Route>

            {/* Fallback - if none of the above routes are hit */}
            <Route>
              <PageNotFoundView />
            </Route>
          </Switch>
        </div>

        <div className="circle1" />
        <div className="circle2" />
      </div>
    </Router>
  );
}

export default App;
