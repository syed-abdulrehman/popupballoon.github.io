
let email= document.getElementById('regemail');
let password= document.getElementById('regpassword');
let signinemail= document.getElementById('signinemail');
let signinpassword= document.getElementById('signinpassword');


function signUp(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(regemail.value, regpassword.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log('useradded')
      window.location.href = "index.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
      // ..
    });
 
}

function signIn(e){
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(signinemail.value, signinpassword.value)
    .then((userCredential) => {
      // Signed in
      console.log('user logged in ')
      window.location.href = "popupballoon.html"
      // ...
    })
    .catch((error) => {
     
      var errorMessage = error.message;
      console.log(error.message);
    });  
}

async function glogin() {
    try {
    var provider = new firebase.auth.GoogleAuthProvider();
    let googleLogin = await firebase.auth().signInWithPopup(provider)
    console.log(googleLogin)
   // window.location.href = "index.html"
    window.location = "./popupballoon.html"    
    }
    catch(error)
    {

       alert("Wait Please!")

    }
}