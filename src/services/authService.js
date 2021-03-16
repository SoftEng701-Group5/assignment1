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
 */
const signIn = async (email, password) => {
    try{
        await firebaseConnection
        .auth()
        .signInWithEmailAndPassword(email, password);
    }catch(error){
        alert(error);
    }
}
/**
 * Creates a new user within the firebase application with the given email and password
 * @param {*} email The email of the user as a string
 * @param {*} password The password of the user as a string
 */
const signUp = async (email, password) => {
    try{
        await firebaseConnection
        .auth()
        .createUserWithEmailAndPassword(email, password);
    }catch(error){
        alert(error);
    }
}

export {signOut, signIn, signUp}