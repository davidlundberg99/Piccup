const renderFilterBar = function () {
    let filter_form = document.createElement('div');
    filter_form.classList.add("container");
   // filter_form.classList.add("has-text-centered");
    filter_form.innerHTML = `
        <div class="box">
            <div class="subtitle has-text-grey is-4 has-text-centered">Filter</div>
            <div class="dropdown">
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>Which sport would you like to search a game for?</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                            <div class="dropdown-item">
                                <p>Basketball</p>
                            </div>
                            <div class="dropdown-item">
                                <p>Football</p>
                            </div>
                            <div class="dropdown-item">
                                <p>Soccer</p>
                            </div>
                            <div class="dropdown-item">
                                <p>Tennis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>Beginner, intermediate, or advanced?</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                            <div class="dropdown-item">
                                <p>Beginner</p>
                            </div>
                            <div class="dropdown-item">
                                <p>Intermediate</p>
                            </div>
                            <div class="dropdown-item">
                                <p>Advanced</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field is-grouped">
                <div class="control apply is-grouped"></div>
                <div class="control clear></div>
                </div>
            </div>
            </div>
        </div>
    `
    let button_container = filter_form.getElementsByClassName('apply')[0];
    let apply_button = document.createElement("button");
    apply_button.className = "button is-danger apply-button";
    apply_button.innerHTML=`Apply`;
    button_container.appendChild(apply_button);
    let clear_button = document.createElement("button");
    clear_button.className = "button is-clear apply-button";
    clear_button.innerHTML=`Clear`;
    button_container.appendChild(clear_button);
    return filter_form;
}

const loadIntoDom = function () {
    $("#filter-container").append(renderFilterBar());
 
 }
 
 $(function() {
     loadIntoDom();
 });