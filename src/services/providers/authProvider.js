import React, {  useState } from "react";
import firebaseConnection from "../firebase";

export const AuthContext = React.createContext();

/**
 * This provider component provides all the child components with the firebase user object.
 * If the user is not logged in, this is set to null.
 * @param {*} param0 The children of this component
 */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Adds an observer to the authentication state of the firebase app
  // When authentication state is change, sets the "currentUser" const to the changed value
  firebaseConnection.auth().onAuthStateChanged((user) => {
    setCurrentUser(user)
  });

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};