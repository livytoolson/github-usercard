import axios from 'axios';
// console.log(axios)

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const result = axios.get('https://api.github.com/users/livytoolson')

  .then(res => {
    const userData = res.data;
    console.log(userData)
    const gitHubCard = cardMaker(res.data);
    entryPoint.appendChild(gitHubCard);
    // console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];
followersArray.push('tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell')
console.log(followersArray)

axios.get('https://api.github.com/users/{username}')
  .then(res => {
    followersArray.forEach(item => {
    for(let i = 0; i < followersArray.length; i++){
      const gitHubCard = cardMaker(res.data)
      entryPoint.appendChild(gitHubCard)
      }
    })
  })
  .catch(err =>{
    console.log(err)
  })
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

// Selecting the entry point for cards
const entryPoint = document.querySelector('.cards')
// console.log(entryPoint)

function cardMaker(object){

  // Instantiating Elements
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // Appending Elemenets & Creating Hierarchy
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // Setting Class Names
  card.classList.add('class');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  // Setting Attributes & Text
  image.src = object.avatar_url;
  name.textContent = object.name;
  username.textContent = object.login;
  location.textContent = `Location: ${object.location}`;
  profile.textContent = 'Profile: ';
  profileLink.src = object.html_url;
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;

  // Add interactivity
  card.addEventListener('click', () => {
    card.classList.toggle('selected')
  });

  // Return card
  return card;
};

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
