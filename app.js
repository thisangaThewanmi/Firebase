// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQPLRlenW1KkkYevsHk45AYzpQiGbTlLs",
    authDomain: "fir-auth-8f69c.firebaseapp.com",
    projectId: "fir-auth-8f69c",
    storageBucket: "fir-auth-8f69c.appspot.com",
    messagingSenderId: "373406750611",
    appId: "1:373406750611:web:5ab14f59ebf6da0590fa66"
};


//initialize firebase
firebase.initializeApp(firebaseConfig)


//create a Auth Instance
const auth = firebase.auth();

//signup function
document.getElementById('signUp').addEventListener('click',()=> {
    alert("test1");
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;



    auth.createUserWithEmailAndPassword(email, password)
        .then((UserCredential) => {
            //signedIn
            alert("done")
        })
        // If the above is done then give the alert

        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });

})

//signInFunction
document.getElementById('login').addEventListener('click',()=>{
    alert("test2");

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((UserCredential) => {
            //signedIn
            alert("done login")
        })
        // If the above is done then give the alert

        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
})
