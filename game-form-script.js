var gamePost = {
    name: "",
    location: "",
    gameDate: new Date().toISOString().substring(0, 10),
    gameTime: '12:00:00',
    numPlayers: 0,
    sportSelect: "",
    skillSelect: "",
};

export const renderGameForm = function() {
    let gameForm = document.createElement('div');
    gameForm.classList.add("has-text-centered");
    gameForm.innerHTML=`<form id="game-form" class="box">
    <h2>Post a Game</h2>
    <input type="text" name="name" placeholder="Name" /><br>
    <input type="text" name="location" placeholder="Location" /><br>
    <label>
      Date:<br>
        <input type="date" name="gameDate" min={new Date().toISOString().substring(0, 10)}}/>
    </label><br>
    <label>
      Time:<br>
        <input type="time" name="gameTime"/>
    </label><br>
    <select name="sportSelect">
      <option value="" disabled selected>Select Sport</option>
      <option value="baseball">Baseball</option>
      <option value="basketball">Basketball</option>
      <option value="football">Football</option>
      <option value="soccer">Soccer</option>
      <option value="tennis">Tennis</option>
      <option value="volleyball">Volleyball</option>
    </select><br>
    <input type="number" name="numPlayers" placeholder="Number of players" /><br>
    <select name="skillSelect">
      <option value="" disabled selected>Select Skill Level</option>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="expert">Expert</option>
    </select><br>
    <input class="button is-block submit-button is-primary" type="submit" name="Submit" />
  </form>
`;
    return gameForm;
}


export const handleGameFormSubmit = function (event) {
    event.preventDefault();
    gamePost.name = $("#game-form").serializeArray()[0].value;
    gamePost.location = $("#game-form").serializeArray()[1].value;
    gamePost.gameDate = new Date($("#game-form").serializeArray()[2].value);
    gamePost.gameTime = $("#game-form").serializeArray()[3].value;
    gamePost.sportSelect = $('#game-form').serializeArray()[4].value;
    gamePost.numPlayers = $("#game-form").serializeArray()[5].value;
    gamePost.skillSelect = $("#game-form").serializeArray()[6].value;
    if($("#no-games-message").is(':visible')) {
        $("#no-games-message").toggle();
    }
    $('#feed').prepend(renderGamePost(gamePost));
}

export const renderGamePost = function (post) {
    let sportName = post.sportSelect.charAt(0).toUpperCase() + post.sportSelect.slice(1);
    let skillLevel = post.skillSelect.charAt(0).toUpperCase() + post.skillSelect.slice(1);
    let gameTimeInt = parseInt(post.gameTime.substring(0, 2));
    return `<div class="card game-card">
    <header class="card-header">
        <figure class="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
        <p class="card-header-title">
            <span>
            <a>Sam Lempp </a> <br>
            ${sportName} Game: ${post.name}
            </span>
        </p><br>
        <figure class="image is-48x48">
        <img src="./sport-logos/${post.sportSelect}.png" alt="Placeholder image">
        </figure>
    </header>
    <div class="card-content">
        <strong> Location:  </strong> ${post.location}<br> 
        <strong>Time: </strong>  ${gameTimeInt > 12 ? (gameTimeInt - 12) + post.gameTime.substring(2,5) + " PM" : post.gameTime + " AM"} <br>
        <strong>Date: </strong> ${post.gameDate.getUTCMonth() + 1}/${post.gameDate.getUTCDate()}/${post.gameDate.getFullYear()}<br>
        <strong>Players: </strong> ${post.numPlayers}<br>
        <strong>Skill Level: </strong> ${skillLevel} <br>
    </div>
    <footer class="card-footer">
        <button class="button is-primary card-footer-item is-size-8">Join Game</button>
    </footer>
    </div>`
    }