
import {
    onAuthStateChanged,
    auth,
    doc,
    db,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    addDoc,
    serverTimestamp,
    onSnapshot,
    orderBy,
    updateDoc,
    signOut
}
    from '../firebaseconfig.js'

    

let userName = document.querySelector('.userName')

let publish = document.querySelector('.publish')

let tittle = document.querySelector('#tittle')

let description = document.querySelector('#descr')

let posts = document.querySelector('.posts')

let loginsignBtn  = document.querySelector('.loginsignBtn')
// console.log(publish);
// console.log(description);

publish.addEventListener('click', postFunc)

let emptyArray = [];

function postFunc(params) {
    console.log("mnbvjvjh");

    let data = ` <div class="container singlrpost">
    <div class="imageArea">
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="https://pps.whatsapp.net/v/t61.24694-24/348763079_788215329585650_6409438815246992571_n.jpg?ccb=11-4&oh=01_AdQHEu2ToXbwTh1W_9ECwtFxHh6yuhptwnKc9X6xhtbThg&oe=64EDF74F&_nc_cat=110" class="img-fluid rounded-start" alt="...">
    </div>
            <div class="col-md-8">
            <div class="card-body">
                    <h5 class="card-title">${tittle.value}</h5>
                    <p class="card-text">${description.value}</p>
                        <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="textColumn">
                ${description.value
        }
                </div>
                <div class="postBtn">
                <button class="delete">delete</button>
                <button class="edit">Edit</button>
                </div>
                </div>`
    emptyArray.push(data)
    posts.innerHTML = emptyArray.join(" ")
}


loginsignBtn.addEventListener('click',signOutuser)
function signOutuser() {

    window.location.href = '../loginpage/index.html'
}

// onAuthStateChanged(auth, (user) => {
//     // console.log(user, "==>> user")
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         // console.log(uid);
//         getUserData(uid)
//         // getAllUsers(user.email)
//         curentloggedinuser=uid
//         console.log(curentloggedinuser)
//     } else {
//         window.location.href = "../login/index.html"    // User is signed out
//     }
// });
// async function getUserData(uid){
//     try {
//         const docRef = doc(db, "users", uid);
//             const docSnap = await getDoc(docRef);
    
//             if (docSnap.exists()) {
//                 console.log("Document data:", docSnap.data());
//                 const {  firstName, email ,Picture ,Lastname} = docSnap.data()
//                name.textContent = firstName
//             //  pic.src = Picture || "../dashboard/assets/user.png"
//             } else {
//                 // docSnap.data() will be undefined in this case
//                 console.log("No such document!");
//             }
//         } catch (error) {
//             console.log(error, "==>>error in get User Data")
//         }
//     }

