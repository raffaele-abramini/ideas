import firebase from  'firebase';

const config = {
	apiKey: "AIzaSyBisHYIYLMvGj1m2UfNLSlJkUnkhYUMPTM",
	authDomain: "react-test-70813.firebaseapp.com",
	databaseURL: "https://react-test-70813.firebaseio.com",
	storageBucket: "react-test-70813.appspot.com",
	messagingSenderId: "991209998758"
};

firebase.initializeApp(config);

export const db = firebase.database();
export const auth = firebase.auth;
export const storage = firebase.storage().ref();