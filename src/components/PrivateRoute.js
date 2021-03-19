import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../services/providers/authProvider";

/**
 * This component masks the specified route to users that are not authenticated through
 * the firebase application and redirects them to the login screen
 * @param {*} param0 The component that will be shown to the user if they are logged in
 * @returns ...
 */
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
            // TODO: redirect to the login page
          <Redirect to="/login" />
        )
      }
    />
  );
};


export default PrivateRoute