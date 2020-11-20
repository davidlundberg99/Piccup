
const renderGameForm = function() {
    let gameForm = document.createElement('div');
    gameForm.classList.add("container");
    gameForm.classList.add("has-text-centered");
    gameForm.innerHTML=`<div class="box">
    <form class="game-form">
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
    <input type="submit" name="Submit" />
  </form>
  </div>`;
    return gameForm;
}

const handleFormSubmit = function () {

}

const loadIntoDom = function () {
    $("#game-form-container").append(renderGameForm());
}

$(function() {
    loadIntoDom();
});