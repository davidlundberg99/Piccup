
const firebaseConfig = {
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

export const getCurProfile = async () => {
    const uid = user.uid;
    // console.log(uid)
    if (uid) {
      const profRef = firebase.firestore().collection('users').doc(uid);
      const profile = await profRef.get();
      if(profile.exists){
        return profile.data();
        }
    }
    return null;
      
}

export const getUserInfo = async function () {
    let userInfo = await new Promise(function(resolve, reject){
        firebase.auth().onAuthStateChanged(async function (userResult) {
            if (userResult) {
                user = userResult;
                const profile = await getCurProfile();
                resolve(profile);
            } else {
                console.log("error");
                reject();
                // No user is signed in.
            }
        });
    });
    return userInfo;
    // console.log(profile);
    // let first_name = profile.firstName;
    // let last_name = profile.lastName;
    // let bio = profile.bio;
    // let skill_level = profile.skillLevel
    // let sports = profile.sports;
    // let games_played = profile.gamesPlayed;
}