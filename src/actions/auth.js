import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { startLoading, finishLoading } from '../actions/ui'

// this is an asynchronous function, that's why we called a callback in the return
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( startLoading( ) );
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                dispatch( finishLoading( ) )
            })
            .catch( err => {
                console.log(err);
                dispatch( finishLoading( ) )
            })
    }
}

// this is an asynchronous function, that's why we called a callback in the return
export const startRegisterWithEmailPasswordName = ( email, password, name) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password)
        .then( async({ user }) => {
            await user.updateProfile({ displayName: name });

            dispatch(
                login(user.uid, user.displayName)
            )
        })
        .catch(err => {
            console.log(err);
        })
    }
}

// this is an asynchronous function, that's why we called a callback in the return
export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}


export const login = (uid, displayName) => {

    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch( logout() )

    }
}

export const logout = () => ({
    type: types.logout
})