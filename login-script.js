// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB71fFfvD1D85MLOw7HhNknoLjCP55Gu5s",
    authDomain: "piccup-f339d.firebaseapp.com",
    databaseURL: "https://piccup-f339d.firebaseio.com",
    projectId: "piccup-f339d",
    storageBucket: "piccup-f339d.appspot.com",
    messagingSenderId: "1042044087440",
    appId: "1:1042044087440:web:0e3885ce7ef972f83c3c15",
    measurementId: "G-TKHRW9XMW2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const renderLoginForm = function() {
   // console.log("attempting to render LoginForm")
    let loginForm = document.createElement('div');
    loginForm.classList.add("container");
    loginForm.classList.add("has-text-centered");
    loginForm.innerHTML=`
    <div class="column is-8 is-offset-2">
    <div class="container" id="welcome-message">
            <article class="message">
                <div class="message-header">
                  <h1 class = "is-size-4">Welcome To Piccup</h1>
                  <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Love to play sports but can’t commit to the schedule of an organized league?
                    Piccup allows you to find same day, semi-organized, pickup sports in your community.
                    Our site allows you to schedule and register for pickup sports
                    game at public parks and facilities in your community.
                </div>
              </article>
    </div>
    <h3 class="title has-text-white" id="login">Login</h3>
    <hr class="login-hr">
    <p class="subtitle has-text-white">Please login to enter Piccup</p>
    <div class="box">
        <div class="subtitle has-text-grey">Please enter your email and password.</div>
        <form>
            <div class="field" id="email-box">
                <div class="control">
                    <label class="subtitle">Email:</label>
                    <input class="input is-medium" type="email"placeholder="johnsmith@gmail.com" id="email">
                </div>
            </div>
            <div class="field" id="password-box">
                <div class="control">
                    <label class="subtitle">Password:</label>
                    <input class="input is-medium" type="password"placeholder="Password" id="password">
                </div>
            </div>
        </form>
        <label class="checkbox" style="margin: 20px;">
            <input type="checkbox" id="remember-me-checkbox">
            Remember me
        </label>
         <div class="field">
            <div class="control login" id="signup">
            </div>
            </div>
    </div>
</div>`


//<button class="button is-danger is-block is-fullwidth is-large" id="login-button">Login</button>
    //Create login Button
    let button_container = loginForm.getElementsByClassName('login')[0];
    let login_button = document.createElement('a');
    login_button.className = "button is-danger is-block is-fullwidth is-large login-button";
    login_button.href="homepage.html"
    login_button.innerHTML=`Login`;
    button_container.appendChild(login_button);
    //Sign up button
    let sign_up_button = document.createElement('button');
    sign_up_button.className = "button is-primary is-block is-fullwidth is-large signup-button";
    sign_up_button.innerHTML="Sign up"
    button_container.appendChild(sign_up_button);
    //Handle Login Button
    loginForm.getElementsByClassName('signup-button')[0].addEventListener('click', function () {
        $("#root").append(renderSignUpForm);
    })
    return loginForm;
}

const renderSignUpForm = function () {
    let sign_up_form = document.createElement('div');
    sign_up_form.className = 'modal is-active';
    sign_up_form.innerHTML=`
    <div class = "modal-background"></div>
    <div class = "modal-content">
    <div class = "modal-content">
        <div class = "box">
        <div class = "content">
        <p class = "title is-4 has-text-centered sign-up-header">Sign up
            <button class="delete close-button"></button>
        </p>
    </div>
    <form>
        <div class="field" id="first-name">
            <div class="control">
                <label class="subtitle">First Name:</label>
                <input class="input is-medium" placeholder="John" >
            </div>
        </div>
        <div class="field" id="last-name">
            <div class="control">
                <label class="subtitle">Last Name:</label>
                <input class="input is-medium" placeholder="Smith" >
            </div>
        </div>
        <div class="field" id="signup-email">
            <div class="control">
                <label class="subtitle">Email:</label>
                <input class="input is-medium" placeholder="johnsmith@gmail.com" >
            </div>
        </div>
        <div class="field" id="signup-password-box">
            <div class="control">
                <label class="subtitle">Password:</label>
                <input class="input is-medium" placeholder="Password">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control sign-up-buttons"></div>
        </div> 
    </form>
</div>
`
    let button_container = sign_up_form.getElementsByClassName("sign-up-buttons")[0];
    let submit_button = document.createElement('div');
    submit_button.className = "button is-primary submit-button is-medium";
    submit_button.innerHTML = "Submit";
    button_container.appendChild(submit_button);
    let clear_button = document.createElement('div');
    clear_button.className = "button is-clear clear-button is-medium";
    clear_button.innerHTML = "Clear";
    button_container.appendChild(clear_button);
    
    sign_up_form.getElementsByClassName('submit-button')[0].addEventListener('click', function () {
        let new_email = sign_up_form.getElementsByClassName("input")[0].value;
        let new_password = sign_up_form.getElementsByClassName("input")[1].value;
        handleSignUpSubmitButton(new_email, new_password, sign_up_form);
    })
    sign_up_form.getElementsByClassName('clear-button')[0].addEventListener('click', function () {
        sign_up_form.getElementsByClassName("input")[0].value = '';
        sign_up_form.getElementsByClassName("input")[1].value = '';
    })
    sign_up_form.getElementsByClassName('close-button')[0].addEventListener('click', () => {
        sign_up_form.remove();
    })
    return sign_up_form;
}

const handleSignUpSubmitButton = function (email, password, form) {
    form.remove();
    saveUsers(email, password);
}
const loadIntoDom = function () {
   $("#login-container").append(renderLoginForm());

}

function submitUser(){
    var email = getInputVal('signup-email');
    var password = getInputVal('signup-password-box');
    console.log(email);
}

function getInputVal(id){
    return document.getElementById(id).value;
}


//Save users to firebase
function saveUsers(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password);
}
let ranOnce = false;
firebase.auth().onAuthStateChanged((user) => {
    if(user && !ranOnce) {
        let uid = user.uid;
        ranOnce = true;
        window.location.href='/homepage.html';
    } else {
        console.log('somethings wrong');
    }
})

$(function() {
    loadIntoDom();
});


