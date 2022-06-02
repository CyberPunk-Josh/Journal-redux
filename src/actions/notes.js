import { db } from '../firebase/firebase-config';

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const id = getState().auth.uid;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${ id }/journal/notes`).add(newNote);

        console.log(doc);
    }
}