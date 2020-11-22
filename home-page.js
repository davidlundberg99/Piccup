import {renderGameForm, handleGameFormSubmit, renderGamePost} from "./game-form-script.js";

const renderGameFormButton = function() {
    let game_form_button = document.createElement('button');
    game_form_button.id = "game-form-button";
    game_form_button.className = "button is-block is-primary is-inverted";
    game_form_button.innerHTML = `Create Post`;
    return game_form_button;
}

const handleGameFormButton = function(event) {
    event.preventDefault();
    $("#game-form").toggle();
    if($("#game-form-button").html() == "Create Post"){
        $("#game-form-button").removeClass("is-primary is-inverted");
        $("#game-form-button").addClass("is-danger");
        $("#game-form-button").html("Cancel Post");
    } else {
        $("#game-form-button").html("Create Post");
        $("#game-form-button").removeClass("is-danger");
        $("#game-form-button").addClass("is-primary is-inverted");
    }
}

const renderFilterBar = function () {
    let filter_form = document.createElement('div');
    filter_form.classList.add("container");
   // filter_form.classList.add("has-text-centered");
    filter_form.innerHTML = `
            <div class="subtitle has-text-grey is-3 has-text-centered">Filter</div>
            <div class="dropdown">
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button dd-button" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>Select Sport</span>
                            <span class="icon is-small">
                            <i class="fas fa-angle-down"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                Football
                            </a>
                            <a href="#" class="dropdown-item">
                                Basketball
                            </a>
                            <a href="#" class="dropdown-item">
                                Soccer
                            </a>
                            <a href="#" class="dropdown-item">
                                Tennis
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button dd-button" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>Select Skill Level</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                10:00am
                            </a>
                            <a href="#" class="dropdown-item">
                                10:30am
                            </a>
                            <a href="#" class="dropdown-item">
                                11:00am
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button dd-button" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>Time</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                10:00am
                            </a>
                            <a href="#" class="dropdown-item">
                                10:30am
                            </a>
                            <a href="#" class="dropdown-item">
                                11:00am
                            </a>
                        </div>
                    </div>
                </div>
                <div class="field is-grouped">
                <div class="control apply is-grouped"></div>
                </div>
            </div>
            </div>
    `
    //Create buttons and apend them
    let button_container = filter_form.getElementsByClassName('apply')[0];
    let apply_button = document.createElement("button");
    apply_button.className = "button is-danger apply-button";
    apply_button.innerHTML=`Apply`;
    button_container.appendChild(apply_button);
    let clear_button = document.createElement("button");
    clear_button.className = "button is-clear clear-button";
    clear_button.innerHTML=`Clear`;
    button_container.appendChild(clear_button);
    //TODO: Handle button presses
    filter_form.getElementsByClassName('apply-button')[0].addEventListener('click', () => {
        handleFilterApplyButton();
    })
    filter_form.getElementsByClassName('clear-button')[0].addEventListener('click', () => {
        
    })
    return filter_form;
}

const handleFilterApplyButton = function () {
    alert("Apply button was pressed");
}

const loadIntoDom = function (gameData) {
    $("#filter-container").append(renderFilterBar());
    $("#game-form-container").append(renderGameForm());
    $("#game-form-container").append(renderGameFormButton());
    $("#game-form").hide();
    $(document).on("click", "#game-form-button", handleGameFormButton);
    $(document).on("submit", "#game-form", handleGameFormSubmit);
    

    $("#no-games-message").toggle();
    for(let i=0; i < gameData.length; i++) {
        $("#feed").append(renderGamePost(gameData[i]));
    }
 }
 
 $(function() {
     loadIntoDom(dummyGames);
 });