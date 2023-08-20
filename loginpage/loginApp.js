import {
    auth,
    signInWithEmailAndPassword,

} from "../firebaseconfig.js"


let loginEmail = document.querySelector('.loginEmail')

let loginPassword = document.querySelector('.loginPassword')

let loginReapeatPassword = document.querySelector('.loginReapeatPassword')

let signUp = document.querySelector('.loginsignBtn')

let LoginBtn = document.querySelector('.Login')

// console.log("jhvkjvjkh");

signUp.addEventListener('click', function () {
    window.location.href = '../index.html'
})


LoginBtn.addEventListener('click', loginFoo)


function loginFoo() {
    if(loginPassword.value === loginReapeatPassword.value)
    {

        signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            if(user) {
                
                console.log(user);
                window.location.href = '../dashboard/index.html'
            }
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
        });
        console.log("login ho gaya");
        
    }
    else{
        alert("pleas write both  password same")
    }
}


