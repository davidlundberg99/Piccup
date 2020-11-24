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
      <option value="Baseball">Baseball</option>
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
    <input class="button is-block submit-button is-primary" type="submit" name="Submit" onSubmit="handleGameFormSubmit()"/>
  </form>
`;
    return gameForm;
}


export const handleGameFormSubmit = async function (event) {
    event.preventDefault();
    console.log("submitted");
    const gamePost = {}
    gamePost.name = $("#game-form").serializeArray()[0].value;
    gamePost.location = $("#game-form").serializeArray()[1].value;
    gamePost.gameDate = $("#game-form").serializeArray()[2].value;
    gamePost.gameTime = $("#game-form").serializeArray()[3].value;
    gamePost.sportSelect = $('#game-form').serializeArray()[4].value;
    gamePost.numPlayers = $("#game-form").serializeArray()[5].value;
    gamePost.skillSelect = $("#game-form").serializeArray()[6].value;
    
    await gamesCollection.add(gamePost);
}

export const renderGamePost = function (post) {
    let sportName = post.sportSelect.charAt(0).toUpperCase() + post.sportSelect.slice(1);
    let skillLevel = post.skillSelect.charAt(0).toUpperCase() + post.skillSelect.slice(1);
    let gameTimeInt = parseInt(post.gameTime.substring(0, 2));
    let game_card = document.createElement('div');
    game_card.classList.add("container");
    game_card.innerHTML = `<div class="card game-card">
    <header class="card-header">
        <figure class="image is-48x48">
        <img src="./blank_profile.png" alt="Placeholder image">
        </figure>
        <p class="card-header-title">
            <span >
            <a>Sam Lempp </a><br>
            <span class=""><strong>${sportName} Game: ${post.name}</strong></span><br>
            </span>
        </p>
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
        <button class="button is-primary card-footer-item is-size join-button">Join Game</button>
    </footer>
      <button class="button is-info is-fullwidth is-size participants-button">Participants</button>
    </div>`

    game_card.getElementsByClassName("join-button")[0].addEventListener('click', () => {
      handleJoinButton();
    })
    game_card.getElementsByClassName("participants-button")[0].addEventListener('click', () => {
      handleParticipantsButton();
    })
    return game_card
    }

export const handleJoinButton = function () {
  alert("You have joined the game.");
}

export const handleParticipantsButton = function () {
  $("#root").append(renderParticipantsForm());
}

export const renderParticipantsForm = function () {
  let participants_form = document.createElement('div');
  participants_form.className = "modal is-active";
  participants_form.innerHTML = `
  <div class = "modal-background"></div>
    <div class = "modal-content">
    <div class = "modal-content">
        <div class = "box">
        <div class = "content">
        <p class = "title is-4 has-text-centered sign-up-header">Participants
            <button class="delete participants-close-button"></button>
        </p>
    </div>
  `
  participants_form.getElementsByClassName('delete')[0].addEventListener('click', () => {
    participants_form.remove();
  })
  return participants_form;
}