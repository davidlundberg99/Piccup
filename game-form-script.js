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

const gamesCollection = firebase.firestore().collection('games')


// var gamePost = {
//     name: "",
//     location: "",
//     gameDate: new Date().toISOString().substring(0, 10),
//     gameTime: '12:00:00',
//     numPlayers: 0,
//     sportSelect: "",
//     skillSelect: "",
// };

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
      <option value=Baseball">Baseball</option>
      <option value="Basketball">Basketball</option>
      <option value="Football">Football</option>
      <option value="Soccer">Soccer</option>
      <option value="Tennis">Tennis</option>
      <option value="Volleyball">Volleyball</option>
    </select><br>
    <input type="number" name="numPlayers" placeholder="Number of players" /><br>
    <select name="skillSelect">
      <option value="" disabled selected>Select Skill Level</option>
      <option value="beginner">Beginner</option>
      <option value="Intermediate">Intermediate</option>
      <option value="expert">Expert</option>
    </select><br>
    <input class="button is-block submit-button is-primary" type="submit" name="Submit" />
  </form>
`;
    return gameForm;
}


export const handleGameFormSubmit = function (event) {
    event.preventDefault();
    const gamePost = {}
    gamePost.name = $("#game-form").serializeArray()[0].value;
    gamePost.location = $("#game-form").serializeArray()[1].value;
    gamePost.gameDate = $("#game-form").serializeArray()[2].value;
    gamePost.gameTime = $("#game-form").serializeArray()[3].value;
    gamePost.sportSelect = $('#game-form').serializeArray()[4].value;
    gamePost.numPlayers = $("#game-form").serializeArray()[5].value;
    gamePost.skillSelect = $("#game-form").serializeArray()[6].value;
    // if($("#no-games-message").is(':visible')) {
    //     $("#no-games-message").toggle();
    // }
    // $('#feed').prepend(renderGamePost(gamePost));
    gamesCollection.add(gamePost);
}

export const renderGamePost = function (post) {
  console.log("here");
  return `<div class="card">
  <header class="card-header">
      <p class="title card-header-title">
          <span>
          <a>${post.sportSelect} </a> <br>
          </span>
      </p>
  </header>
  <div class="card-content is-size-3">
      <strong> Location:  </strong> ${post.location}<br> 
      <strong>Time: </strong>  ${post.gameTime} <br>
      <strong>Date: </strong> ${post.gameDate} <br>
      <strong>Players: </strong> ${post.numPlayers} <br>
      <strong>Skill Level: </strong> ${post.skillSelect} <br>
      <strong>Host: </strong> ${post.name} <br>
  </div>
  <footer class="card-footer">
      <button class="button is-primary card-footer-item is-size-3">Join Game</button>
  </footer>
  </div>`
}

// const loadIntoDom = function () {
//     $("#game-form-container").append(renderGameForm());
//     $(document).on("submit", "form", handleGameFormSubmit);
// }

// $(function() {
//     loadIntoDom();
// });