import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    /* your firebase config*/
    
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}