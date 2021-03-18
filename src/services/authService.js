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
 * Signs the user up to the firebase application.
 * After they have successfully created their account, their first and last names
 * are added to the firestore db
 * @param {*} email The email of the user as a string
 * @param {*} password The password of the user as a string
 * @param {*} first_name The first name of the user as a string
 * @param {*} last_name The last name of the user as a string
 */
const signUp = async (email, password, first_name, last_name) => {
    try{
        await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password).then(Credential => {
            const db = firebaseApp.firestore();
            db.collection("Users").add({
                user_id: Credential.user.uid,
                First_name: first_name,
                Last_name: last_name 
            });
        });
        
    }catch(error){
        alert(error);
    }
}

export {signOut, signIn, signUp}