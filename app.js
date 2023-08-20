let fName = document.querySelector('.firstName')
let lName = document.querySelector('.lastName')
let password = document.querySelector('.password')
let reapeatPassword = document.querySelector('.reapeatPassword')
let email = document.querySelector('.email')
let signUpBtn = document.querySelector('.signUpBtn')
let loginBtn = document.querySelector('.loginBtn')
// console.log(signUpBtn);

import {
    auth,
    createUserWithEmailAndPassword,
    db,
    setDoc,
    doc,
} from "./firebaseconfig.js"


signUpBtn.addEventListener('click', () => {
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            
            const user = userCredential.user;
            set(ref(db,`user/${user.uid}`),{
                email : email.value,
                password : password.value

            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            
        });
        
    })
    
    if(password.value === reapeatPassword.value)
    {
        signUpBtn.addEventListener('click', signUpFunc)
        

        async function signUpFunc() {
            try {
                
                const user = await createUserWithEmailAndPassword(auth, email.value, password.value)
        if (user.user) {
            addUsreFoo(user.user.uid)
        }
        
        console.log("response=>>>", user.user);
    } catch (err) {
        
        console.log("error>>", err);
        
    }
    console.log("pehly ye chala lena");
}
}
else{
    alert("both password are should be same and must")
}

async function addUsreFoo(uid) {
    try {

        await setDoc(doc(db, "users", uid), {
            lName : lName.value,
            fName : fName.value,
            email : email.value,
            image : 'https://pps.whatsapp.net/v/t61.24694-24/348763079_788215329585650_6409438815246992571_n.jpg?ccb=11-4&oh=01_AdQHEu2ToXbwTh1W_9ECwtFxHh6yuhptwnKc9X6xhtbThg&oe=64EDF74F&_nc_cat=110" class="img-fluid rounded-start'
        });
        
        alert("you are signing up successfully")
        // console.log(response);

        window.location.href = './loginpage/index.html'
    }
    catch (err) {
        console.log(err, "error a raha hai");
    }
    
}

loginBtn.addEventListener('click', () => {
    window.location.href = './loginpage/index.html'
})
