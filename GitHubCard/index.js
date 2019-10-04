/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
getInfo('Insurikai');
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];
followersArray.forEach(getInfo);
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function getInfo(username){
  axios.get(`https://api.github.com/users/${username}`).then(response => {
    document.querySelector(".cards").appendChild(makeElement(response));
  }).catch(error => {
    console.log("Something went wrong", error)
  });
}
function makeElement(user) {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("card");
  mainDiv.appendChild(document.createElement("img")).src = user.data.avatar_url;
  const cardInfo = mainDiv.appendChild(document.createElement("div"));
  cardInfo.classList.add("card-info");
  const name = cardInfo.appendChild(document.createElement("h3"))
  name.classList.add("name");
  name.textContent = user.data.name;
  const username = cardInfo.appendChild(document.createElement("p"))
  username.classList.add("username");
  username.textContent = user.data.login;
  cardInfo.appendChild(document.createElement("p")).textContent = `Location: ${user.data.location}`;
  const profile = cardInfo.appendChild(document.createElement("p"));
  profile.textContent = "Profile: "
  const profileLink = profile.appendChild(document.createElement("a"));
  profileLink.href = user.data.html_url;
  profileLink.textContent = user.data.html_url;
  cardInfo.appendChild(document.createElement("p")).textContent = `Followers: ${user.data.followers}`;
  cardInfo.appendChild(document.createElement("p")).textContent = `Following: ${user.data.following}`;
  cardInfo.appendChild(document.createElement("p")).textContent = `Bio: ${user.data.bio}`;
  return mainDiv;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/