// const FirebaseAuth = require('firebaseauth'); // or import FirebaseAuth from 'firebaseauth';
// const firebase = new FirebaseAuth(process.env.FIREBASE_API_KEY);

var config = {
    apiKey: "AIzaSyA0HcUo1NEGxUdt1ARrxrjM9xDP90iFfWg",
    authDomain: "mandate-tracker.firebaseapp.com",
    databaseURL: "https://mandate-tracker.firebaseio.com",
    projectId: "mandate-tracker",
    storageBucket: "mandate-tracker.appspot.com",
    messagingSenderId: "336855571578",
    appId: "1:336855571578:web:4f9840fae91fc5bd49efc3",
    measurementId: "G-HH7Q6VKST1"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().languageCode = 'pt';
// To apply the default browser preference instead of explicitly setting it.
firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

function signIn() {
    firebase.auth().signInWithPopup(provider).then(res => {
        console.log(res)
        let loginHtml = document.getElementById('login')
        let dataHtml = document.getElementById('data')
        loginHtml.classList.add('login-c')
        dataHtml.classList.remove('data-c')
    }).catch(err => console.log(err))
}

function addMandate() {
    let form = document.getElementById('new')
    form.classList.remove('new-item-c')
}

function regMandate() {

    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let c = document.getElementById('c').value
    let d = document.getElementById('d').value
    let e = document.getElementById('e').value
    let f = document.getElementById('f').value
    let g = document.getElementById('g').value
    var h = document.getElementById("h");
    var strUser = h.options[h.selectedIndex].value;

    let data = {
        co: a,
        po: b,
        dp: c,
        np: d,
        ct: e,
        dj: f,
        vl: g,
        st: strUser
    }

    console.log(data)

    let form = document.getElementById('new')
    form.classList.add('new-item-c')
}

function canMandate() {
    let form = document.getElementById('new')
    form.classList.add('new-item-c')
}