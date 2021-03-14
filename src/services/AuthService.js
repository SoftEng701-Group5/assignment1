import app from "./Firebase";

const signOut = () => {
    app.auth().signOut();
};

const signIn = async (email, password) => {
    try{
        await app
        .auth()
        .signInWithEmailAndPassword(email, password);
    }catch(error){
        alert(error);
    }
}

const signUp = async (email, password) => {
    try{
        await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
    }catch(error){
        alert(error);
    }
}

export {signOut, signIn, signUp}