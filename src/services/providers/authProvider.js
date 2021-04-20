import React, { useState, useEffect } from "react";
import firebaseConnection from "../firebase";
import { fetchUserInfo } from "../authService";

export const AuthContext = React.createContext();

/**
 * This provider component provides all the child components with the firebase user object.
 * If the user is not logged in, this is set to null.
 * @param {*} param0 The children of this component
 */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [refetchUser, setRefetchUser] = useState(false);

  // Adds an observer to the authentication state of the firebase app
  // When authentication state is change, sets the "currentUser" state to the changed value
  useEffect(() => {
    firebaseConnection.auth().onAuthStateChanged((user) => {
      let updatedUser;

      // fetch the user's name and append it to updatedUser
      fetchUserInfo(user.uid).then((userInfo) => {
        updatedUser = {
          ...user,
          firstName: userInfo.First_name,
          lastName: userInfo.Last_name,
        };

        setCurrentUser(updatedUser);
      });
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      let updatedUser;

      fetchUserInfo(currentUser.uid).then((userInfo) => {
        updatedUser = {
          ...currentUser,
          firstName: userInfo.First_name,
          lastName: userInfo.Last_name,
        };

        setCurrentUser(updatedUser);
      });
    }
  }, [refetchUser]);

  const triggerRefetch = () => {
    setRefetchUser(!refetchUser);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        triggerRefetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
