import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./pages/loginView";
import SignUpView from "./pages/signUpView";
import HomeView from "./pages/homeView";
import PageNotFoundView from "./pages/pageNotFoundView";
import Navbar from "./components/Navbar";
import { AuthProvider } from './services/providers/authProvider';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="background">
          <div className="main-content">
            <Switch>
              {/* Login/Signup page - no navbar */}
              <Route exact path="/">
                <LoginView />
              </Route>
              <Route exact path="/signup">
                <SignUpView />
              </Route>

              {/* User pages - navbar present */}
              <PrivateRoute routePath="/home" >
                <Navbar />
                <HomeView />
              </PrivateRoute>

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
    </AuthProvider>
  );
}

export default App;
