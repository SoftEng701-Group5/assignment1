import firebaseConnection from "./firebase";
/**
 * Signs the user out of the firebase application
 */
const signOut = () => {
  firebaseConnection.auth().signOut();
};
/**
 * Signs the user into the firebase application
 * @param {*} email The email of the user as a string
 * @param {*} password The password of the user as a string
 * @returns {boolean} true if the user was signed in sucessfully, false otherwise
 */
const signIn = async (email, password) => {
  try {
    await firebaseConnection.auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    return false;
  }
};
/* eslint-disable import/no-mutable-exports */
let signUpError;
/**
 * Signs the user up to the firebase application.
 * After they have successfully created their account, their first and last names
 * are added to the firestore db
 * @param {*} email The email of the user as a string
 * @param {*} password The password of the user as a string
 * @param {*} first_name The first name of the user as a string
 * @param {*} last_name The last name of the user as a string
 * @returns {boolean} true if the user was signed up sucessfully, false otherwise
 */
const signUp = async (email, password, firstName, lastName) => {
  try {
    await firebaseConnection
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((Credential) => {
        const db = firebaseConnection.firestore();
        db.collection("Users").add({
          User_id: Credential.user.uid,
          First_name: firstName,
          Last_name: lastName,
        });
      });
    return true;
  } catch (error) {
    signUpError = error;
    return false;
  }
};

// Rest Password
const resetPassword = async (email) => {
  try {
    await firebaseConnection
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // email sent
      });
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * A "get" request to the firebase cloud firestore which retrieves the first and last name for a specific user
 * @param {*} userId Unique user identifier as a string. You can get this from currentUser.uid
 * @returns A single javascript object with the following fields:
 * First_name: string,
 * Last_name: string,
 * User_id: string
 */
const fetchUserInfo = async (userId) => {
  const db = firebaseConnection.firestore();
  const data = await db
    .collection("Users")
    .where("User_id", "==", userId)
    .get();
  const user = data.docs[0].data();
  return user;
};

export { signOut, signIn, signUp, signUpError, resetPassword, fetchUserInfo };
