import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD3lLVhbeyoEClnP0GB0pSaEx81ZbjpFDA",
  authDomain: "expensify-70afb.firebaseapp.com",
  databaseURL: "https://expensify-70afb.firebaseio.com",
  projectId: "expensify-70afb",
  storageBucket: "expensify-70afb.appspot.com",
  messagingSenderId: "53128478433"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: "Lloyd Park",
  age: 31,
  isMarried: true,
  location: {
    state: "CA",
    city: "Anaheim"
  }
});

database.ref().set({
  age: 30
});
