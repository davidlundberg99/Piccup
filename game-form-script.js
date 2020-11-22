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

export const renderGamePost = function (post) {
    return `<div class='card'>
    <div class='card-header'>

    <p>${post.name} ${post.location}  ${post.date}</p>
    </div>`
}

export const handleGameFormSubmit = function (event) {
    event.preventDefault();
    gamePost.name = $("#game-form").serializeArray()[0].value;
    gamePost.location = $("#game-form").serializeArray()[1].value;
    gamePost.gameDate = $("#game-form").serializeArray()[2].value;
    gamePost.gameTime = $("#game-form").serializeArray()[3].value;
    gamePost.sportSelect = $('#game-form').serializeArray()[4].value;
    gamePost.numPlayers = $("#game-form").serializeArray()[5].value;
    gamePost.skillSelect = $("#game-form").serializeArray()[6].value;
    console.log("Hello");
}

// const loadIntoDom = function () {
//     $("#game-form-container").append(renderGameForm());
//     $(document).on("submit", "form", handleGameFormSubmit);
// }

// const postToFeed = (post) => {
//     $('#feed').append(renderGamePost(post));
// }

// $(function() {
//     loadIntoDom();
// });