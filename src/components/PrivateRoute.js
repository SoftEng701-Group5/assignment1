import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../services/providers/authProvider";

/**
 * This component masks the specified route to users that are not authenticated through
 * the firebase application and redirects them to the login screen
 * @param routePath The path that we want the user to get to
 * @param fallbackPath The path to redirect the user to if they aren't authorised. Defaults to login
 * @param children Elements to display within the route
 */
const PrivateRoute = ({ routePath, fallbackPath, children }) => {
  const {currentUser} = useContext(AuthContext);

  return (
    <>
      { currentUser ? (
        <Route exact path={routePath}>
          {children}
        </Route>
      ) : (
        <Redirect to={fallbackPath || "/"} />
      )
      }
    </>
  );
};


export default PrivateRoute