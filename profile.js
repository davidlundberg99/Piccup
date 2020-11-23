const renderProfile = function (bio, skill_level, sports) {
    if (bio == null) {
        bio = "You have not set up a bio yet. If you would like to add a bio, please press the edit profile button."
    }
    if (skill_level == undefined) {
        skill_level = "Beginner"
    }
    if (sports == null) {
        sports = ""
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
                        <p class="title is-3 has-text-primary">First Last</p>
                    </div>
                </div>
            </div>
            <div class="column profile-column-left has-text-centered">
                <p class="subtitle">Games played</p>
                <p class="title is-1 attribute-value">8</p>
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
        $("#root").append(renderEditProfileForm(sports, skill_level, bio));
    })
    return profile_card;
}

const renderErrorEditForm = function () {
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
                <label class="subtitle">Sports:</label>
                <p class="subtitle sports-label">Add a sport:</p>
                <div class="select">
                    <select class="my-select">
                    <option value="Football">Football</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Football">Soccer</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Volleyball">Volleyball</option>
                    <option value="Volleyball">Tennis</option>
                    </select>
                </div>
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
        let skill_level = sign_up_form.getElementsByClassName("input")[0].value;
        let sports = sign_up_form.getElementsByClassName("my-select")[0].value;
        let bio = sign_up_form.getElementsByClassName("input")[1].value;
        handleSignUpSubmitButton(skill_level, sports, bio, sign_up_form);
    })
    sign_up_form.getElementsByClassName('clear-button')[0].addEventListener('click', function () {
        sign_up_form.getElementsByClassName("input")[0].value = '';
        sign_up_form.getElementsByClassName("input")[1].value = '';
        sign_up_form.getElementsByClassName("input")[2].value = '';
        
    })
    sign_up_form.getElementsByClassName('edit-profile-close-button')[0].addEventListener('click', () => {
        sign_up_form.remove();
    })
    return sign_up_form;
}

const renderEditProfileForm = function (sports, skill_level, bio) {
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
        <div class="field" id="overall-skill-level">
            <div class="control">
                <label class="subtitle">Overall Skill Level:</label>
                <input class="input is-medium" placeholder="Beginner, intermediate, or expert" >
            </div>
        </div>
        <div class="field" id="sports">
            <div class="control">
                <p class="subtitle sports-label">Add a sport:</p>
                <div class="select">
                    <select class="my-select">
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Soccer</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Volleyball">Volleyball</option>
                        <option value="Volleyball">Tennis</option>
                    </select>
                </div>
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
        let skill_level = sign_up_form.getElementsByClassName("input")[0].value;
        let sports = sign_up_form.getElementsByClassName("my-select")[0].value;
        let bio = sign_up_form.getElementsByClassName("input")[1].value;
        console.log(sports)
        handleSignUpSubmitButton(skill_level, sports, bio, sign_up_form);
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

const updateProfile = function (bio, skill_level, sports) {
    $("#profile-container").empty()
    $("#profile-container").append(renderProfile(bio, skill_level, sports));
}

const handleSignUpSubmitButton = function (skill_level, sports, bio, form) {
    if (skill_level.toLowerCase().localeCompare("beginner") == 0) {
        updateProfile(bio, skill_level, sports);
        form.remove();
    } else if (skill_level.toLowerCase().localeCompare("intermediate") == 0) {
        updateProfile(bio, skill_level, sports);
        form.remove();
    } else if (skill_level.toLowerCase().localeCompare("expert") == 0) {
        updateProfile(bio, skill_level, sports);
        form.remove();
    } else {
        form.remove();
        $("#root").append(renderErrorEditForm());   
    }
    
}


const loadIntoDom = function (bio) {
    $("#profile-container").append(renderProfile(bio));
 }
 
 $(function() {
     loadIntoDom();
 });