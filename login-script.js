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
                    <input class="input is-medium" type="email" placeholder="johnsmith@gmail.com" id="email">
                </div>
            </div>
            <div class="field" id="password-box">
                <div class="control">
                    <input class="input is-medium" type="password" placeholder="Password" id="password">
                </div>
            </div>
        </form>
        <label class="checkbox" style="margin: 20px;">
            <input type="checkbox" id="remember-me-checkbox">
            Remember me
        </label>
        <form>
         <div class="field">
            <div class="control login">
            </div>
        
            </div>
        </form>
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
    //Handle Login Button
    loginForm.getElementsByClassName('login-button')[0].addEventListener('click', function() {
    })
    return loginForm;
}


const loadIntoDom = function () {
   $("#login-container").append(renderLoginForm());
   // $("#login").on('click', '#login-button', handleLoginButton);

}

$(function() {
    loadIntoDom();
});