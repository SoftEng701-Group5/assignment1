import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../services/providers/authProvider";

/**
 * This component masks the specified route to users that are not authenticated through
 * the firebase application and redirects them to the login screen
 * @param component The page view that the user is trying to access
 * @param rest The rest of the component props
 */
 const PrivateRoute = ({ component: Component, ...rest }) => {
  const {currentUser} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};


export default PrivateRoute