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
  firebase.initializeApp(firebaseConfig);

  let user;

  firebase.auth().onAuthStateChanged(async function(userResult) {
    if (userResult) {
        user = userResult;
        const renderedProfile = await renderProfile();
        console.log(renderedProfile)
        $("#profile-container").append(renderedProfile);
      // User is signed in.
    } else {
        // No user is signed in.
      }
    });

  const getCurProfile = async () => {
      const uid = user.uid;
      console.log(uid)
      if (uid) {
        const profRef = firebase.firestore().collection('users').doc(uid);
        const profile = await profRef.get();
        if(profile.exists){
          return profile.data();
          }
      }
      return null;
        
  }

const renderProfile = async function () {
    const profile = await getCurProfile();
    console.log(profile);
    let first_name = profile.firstName;
    let last_name = profile.lastName;
    let bio = profile.bio;
    let skill_level = profile.skillLevel
    let sports = profile.sports;
    let games_played = profile.gamesPlayed;

    if (bio == null) {
        bio = "You have not set up a bio yet. If you would like to add a bio, please press the edit profile button."
    }
    if (skill_level == undefined) {
        skill_level = "Beginner"
    }
    if (sports == null) {
        sports = '';
    }
    if (games_played == undefined) {
        games_played == "0"
    }
    skill_level = skill_level[0].toUpperCase() + skill_level.slice(1);
    let profile_card = document.createElement('div');
    profile_card.classList.add("container");
    profile_card.innerHTML= `
    <div class="card">
    <div class="card-content">
        <div class="columns">
            <div class="column">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-128x128">
                            <img src="blank_profile.png" alt="profile picture"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-3 has-text-primary">${first_name} ${last_name}</p>
                    </div>
                </div>
            </div>
            <div class="column profile-column-left has-text-centered">
                <p class="subtitle">Games played</p>
                <p class="title is-1 attribute-value">${games_played}</p>
            </div>
            <div class="column profile-column has-text-centered">
                <p class="subtitle">Overall Skill Level</p>
                <p class="title is-4 attribute-value skill-level">${skill_level}</p>
            </div>
            <div class="column profile-column-right has-text-centered">
                <p class="subtitle">Sports</p>
                <p class="title is-4 attribute-value sports">${sports}</p>
            </div>
        </div>
        </div>
        <div class="content bio-container">
            <p class="title is-3" id="bio">Bio</p>
            <p class ="subtitle is-5 bio">${bio}</p>
        </div>
        <div class="control edit-button">
        </div>
    </div>
</div>
    `
    //create edit button
    let button_container = profile_card.getElementsByClassName("edit-button")[0];
    let edit_profile_button = document.createElement('button');
    edit_profile_button.className = "button is-danger is-outlined is-medium edit-profile-button";
    edit_profile_button.innerHTML = `Edit Profile`;
    button_container.append(edit_profile_button)
    //handle edit button press
    profile_card.getElementsByClassName('edit-profile-button')[0].addEventListener('click', () => {
        $("#root").append(renderEditProfileForm(games_played, sports, skill_level, bio));
    })
    return profile_card;
}

const renderErrorEditForm = function (games_played, sports, skill_level, bio) {
    //console.log("edit form should be rendered")
    let sign_up_form = document.createElement('div');
    sign_up_form.className = 'modal is-active';
    sign_up_form.innerHTML=`
    <div class = "modal-background"></div>
    <div class = "modal-content">
    <div class = "modal-content">
        <div class = "box">
        <div class = "content">
        <p class = "title is-4 has-text-centered sign-up-header">Edit Your Profile
            <button class="delete edit-profile-close-button"></button>
        </p>
    </div>
    <form>
        <div class="field" id="games-played">
            <div class="control">
                <label class="subtitle">Games Played:</label>
                <input class="input is-medium" placeholder="Enter how many games you have played." >
            </div>
        </div>
        <div class="field" id="overall-skill-level">
            <div class="control">
                <label class="subtitle">Overall Skill Level:</label>
                <br>
                <label class="subtitle has-text-danger">Input must be beginner, intermediate, or expert</label>
                <input class="input is-medium is-danger" placeholder="Beginner, intermediate, or expert" >
            </div>
        </div>
        <div class="field" id="sports">
            <div class="control">
                <label class="subtitle">What sports do you enjoy?:</label>
                <input class="input is-medium" placeholder="Ex.) Football, Basketball, and soccer"
            </div>
        </div>
        <div class="field" id="bio">
            <div class="control">
                <label class="subtitle">Bio:</label>
                <input class="input is-medium" placeholder="This is what your bio will say.">
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
        if (sign_up_form.getElementsByClassName("input")[0].value !== "") {
            games_played = sign_up_form.getElementsByClassName("input")[0].value;
       } 
       if (sign_up_form.getElementsByClassName("input")[1].value !== "" ) {
           skill_level = sign_up_form.getElementsByClassName("input")[1].value;
       }
       if (sign_up_form.getElementsByClassName("input")[2].value !== "") {
           sports = sign_up_form.getElementsByClassName("input")[2].value;
       }
       if (sign_up_form.getElementsByClassName("input")[3].value !== "") {
           bio = sign_up_form.getElementsByClassName("input")[3].value;
       }
        handleSignUpSubmitButton(games_played, skill_level, sports, bio, sign_up_form);
    })
    sign_up_form.getElementsByClassName('clear-button')[0].addEventListener('click', function () {
        sign_up_form.getElementsByClassName("input")[0].value = '';
        sign_up_form.getElementsByClassName("input")[1].value = '';
        sign_up_form.getElementsByClassName("input")[2].value = '';
        sign_up_form.getElementsByClassName("input")[3].value = '';
        
    })
    sign_up_form.getElementsByClassName('edit-profile-close-button')[0].addEventListener('click', () => {
        sign_up_form.remove();
    })
    return sign_up_form;
}

const renderEditProfileForm = function (games_played, sports, skill_level, bio) {
    console.log("button was pressed")
    let sign_up_form = document.createElement('div');
    sign_up_form.className = 'modal is-active';
    sign_up_form.innerHTML=`
    <div class = "modal-background"></div>
    <div class = "modal-content">
    <div class = "modal-content">
        <div class = "box">
        <div class = "content">
        <p class = "title is-4 has-text-centered sign-up-header">Edit Your Profile
            <button class="delete edit-profile-close-button"></button>
        </p>
    </div>
    <form>
        <div class="field" id="games-played">
            <div class="control">
                <label class="subtitle">Games Played:</label>
                <input class="input is-medium" placeholder="Enter how many games you have played." >
            </div>
        </div>
        <div class="field" id="overall-skill-level">
            <div class="control">
                <label class="subtitle">Overall Skill Level:</label>
                <input class="input is-medium" placeholder="Beginner, intermediate, or expert" >
            </div>
        </div>
        <div class="field" id="sports">
            <div class="control">
                <label class="subtitle">What sports do you enjoy?:</label>
                <input class="input is-medium" placeholder="Ex.) Football, Basketball, and Soccer"
            </div>
        </div>
        <div class="field" id="bio">
            <div class="control">
                <label class="subtitle">Bio:</label>
                <input class="input is-medium" placeholder="This is what your bio will say.">
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
        // checks to make sure only to update if values are inputted.
        if (sign_up_form.getElementsByClassName("input")[0].value !== "") {
             games_played = sign_up_form.getElementsByClassName("input")[0].value;
        } 
        if (sign_up_form.getElementsByClassName("input")[1].value !== "" ) {
            skill_level = sign_up_form.getElementsByClassName("input")[1].value;
        }
        if (sign_up_form.getElementsByClassName("input")[2].value !== "") {
            sports = sign_up_form.getElementsByClassName("input")[2].value;
        }
        if (sign_up_form.getElementsByClassName("input")[3].value !== "") {
            bio = sign_up_form.getElementsByClassName("input")[3].value;
        }
        handleSignUpSubmitButton(games_played, skill_level, sports, bio, sign_up_form);
    })
    sign_up_form.getElementsByClassName('clear-button')[0].addEventListener('click', function () {
        sign_up_form.getElementsByClassName("input")[0].value = '';
        sign_up_form.getElementsByClassName("input")[1].value = '';
        sign_up_form.getElementsByClassName("input")[2].value = '';
        
    })
    sign_up_form.getElementsByClassName('edit-profile-close-button')[0].addEventListener('click', () => {
        sign_up_form.remove();
    })
    //console.log("signup form")
    return sign_up_form;
}

const updateProfile = async function (games_played, bio, skill_level, sports) {
    const uid = user.uid;
    await firebase.firestore().collection('users').doc(uid).update({
        gamesPlayed: games_played,
        bio,
        skillLevel: skill_level,
        sports
    })
    // $("#profile-container").empty()
    // $("#profile-container").append(renderProfile());
    reloadPage();
}

const handleSignUpSubmitButton = function (games_played, skill_level, sports, bio, form) {
    if (skill_level.toLowerCase().localeCompare("beginner") == 0) {
        updateProfile(games_played, bio, skill_level, sports);
        form.remove();
    } else if (skill_level.toLowerCase().localeCompare("intermediate") == 0) {
        updateProfile(games_played, bio, skill_level, sports);
        form.remove();
    } else if (skill_level.toLowerCase().localeCompare("expert") == 0) {
        updateProfile(games_played, bio, skill_level, sports);
        form.remove();
    } else {
        form.remove();
        $("#root").append(renderErrorEditForm(games_played, sports, skill_level, bio));   
    }
    
}

function reloadPage(){
    window.location.href='./profile.html'
}

const loadIntoDom = function (bio) {
    // $("#profile-container").append(renderProfile(bio));
    $(".navbar-burger").on("click", function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
        });
 }
 
 $(function() {
     loadIntoDom();
 });