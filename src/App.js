import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./pages/loginView";
import SignUpView from "./pages/signUpView";
import HomeView from "./pages/homeView";
import BoardView from "./pages/boardView";
import PageNotFoundView from "./pages/pageNotFoundView";
import { AuthProvider } from "./services/providers/authProvider";
import DarkModeContext from "./services/theme-context";
import PrivateRoute from "./components/PrivateRoute";
import DashboardView from "./pages/dashboardView";

const getColourScheme = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = React.useState(getCurrentTheme());
  const mqListener = (e) => {
    setIsDarkMode(e.matches);
  };

  React.useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);
  return isDarkMode;
};

function App() {
  const isDarkMode = getColourScheme();
  return (
    <AuthProvider>
      <Router>
        <DarkModeContext.Provider value={isDarkMode}>
          <div className={isDarkMode ? "background" : "background--light"}>
            <div className="main-content">
              <Switch>
                {/* Login/Signup page - unrestricted access */}
                <Route exact path="/">
                  <LoginView />
                </Route>
                <Route exact path="/signup">
                  <SignUpView />
                </Route>

                {/* Restricted pages */}
                <PrivateRoute component={HomeView} path="/home" exact />

                {/* Trello Task View */}
                <PrivateRoute component={BoardView} path="/board" exact />

                {/* Welcome dashboard - navbar present */}
                <PrivateRoute
                  component={DashboardView}
                  path="/dashboard"
                  exact
                />
                {/* Fallback - if none of the above routes are hit */}
                <Route>
                  <PageNotFoundView />
                </Route>
              </Switch>
            </div>

            <div className={isDarkMode ? "circle1" : "circle1 light"} />
            <div className={isDarkMode ? "circle2" : "circle2 light"} />
          </div>
        </DarkModeContext.Provider>
      </Router>
    </AuthProvider>
  );
}

export default App;
