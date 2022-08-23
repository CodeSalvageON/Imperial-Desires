const againstSystem = document.getElementById("against-the-system");
const turnCard = document.getElementById("turn-card");
const cont = document.getElementById("cont");
const useArm = document.getElementById("use-arm");
const useProt = document.getElementById("use-prot");

const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");

const forgeForm = document.getElementById("forgeForm");
const enemyForm = document.getElementById("enemyForm");

const empireName = document.getElementById("empire-name");
const compNum = document.getElementById("comp-num");

const leaderboard = document.getElementById("leaderboard");
const exNum = document.getElementById("ex-num");
const champion = document.getElementById("champion");
const deckDom = document.getElementById("deck");
const proNum = document.getElementById("pro-num");
const armNum = document.getElementById("arm-num");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card1t = document.getElementById("card1t");
const card2t = document.getElementById("card2t");
const gameStatus = document.getElementById("game-status");

const nonGameHUD = document.getElementById("non-game-hud");
const gameHUD = document.getElementById("game-hud");

let gameType = 0;
let compArray = [];
let deck = [];
let protEct = 0;
let armIe = 0;

function removeItemOnce (arr, value) {
  let index = arr.indexOf(value);
  
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function measureGame () {
  let innerCard1 = card1t.innerText;
  let innerCard2 = card2t.innerText;

  if (innerCard1 === "Ace") {
    innerCard1 = 14;
  }

  else if (innerCard1 === "King") {
    innerCard1 = 13;
  }

  else if (innerCard1 === "Queen") {
    innerCard1 = 12;
  }

  else if (innerCard1 === "Jack") {
    innerCard1 = 11;
  }

  else if (innerCard1 === "Counter-Army") {
    innerCard1 = 15;
  }

  else {
    innerCard1 = parseInt(innerCard1);
  }

  // Card 2

  if (innerCard2 === "Ace") {
    innerCard2 = 14;
  }

  else if (innerCard2 === "King") {
    innerCard2 = 13;
  }

  else if (innerCard2 === "Queen") {
    innerCard2 = 12;
  }

  else if (innerCard2 === "Jack") {
    innerCard2 = 11;
  }

  else {
    innerCard2 = parseInt(innerCard2);
  }

  // Actual measuring

  if (innerCard1 > innerCard2) {
    gameStatus.innerText = "Conquered an Exarchate.";
    console.log("conquered");

    switch (innerCard2) {
      case 14:
        deck.push("Ace");
        break;
      case 13:
        deck.push("King");
        break;
      case 12:
        deck.push("Queen");
        break;
      case 11: 
        deck.push("Jack");
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        deck.push(innerCard2);
        break;
    }
  }

  else if (innerCard1 < innerCard2) {
    gameStatus.innerText = "Lost an Exarchate.";
    console.log("lost");

    switch (innerCard1) {
      case 14:
        removeItemOnce(deck, "Ace");
        break;
      case 13:
        removeItemOnce(deck, "King");
        break; 
      case 12: 
        removeItemOnce(deck, "Queen");
        break;
      case 11:
        removeItemOnce(deck, "Jack");
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        removeItemOnce(deck, parseInt(innerCard1));
        break;
    }
  }

  else if (innerCard1 === innerCard2) {
    gameStatus.innerText = "Draw. No conclusion.";
    console.log("tie");
  }

  else {
    console.log(card1t);
    console.log(card2t);
  }

  card1.style.display = "none";
  card2.style.display = "none";
  nonGameHUD.style.display = "flex";
  gameHUD.style.display = "none";

  if (parseInt(exNum.innerText) === 0) {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";

    menu1.style.display = "block";
    compArray = [];
  }
}

function autoEnemy () {
  let randomCard1 = Math.floor(Math.random() * 13);
  let randomCard2 = Math.floor(Math.random() * 13);

  switch (randomCard1) {
    case 0:
    case 1:
      randomCard1 = 14;
      break;
  }

  switch (randomCard2) {
    case 0:
    case 1:
      randomCard2 = 14;
      break;
  }
}

againstSystem.onclick = function () {
  menu1.style.display = "none";
  menu2.style.display = "block";
  gameType = 0;
}

turnCard.onclick = function () {
  let randomCard = Math.floor(Math.random() * 14);
  let randomEnCard = Math.floor(Math.random() * 14);
  let randomNormCard = deck[Math.floor(Math.random() * deck.length)];
  
  card1.style.display = "block";
  card2.style.display = "block";
  nonGameHUD.style.display = "none";
  gameHUD.style.display = "flex";
  

  switch (randomCard) {
    case 0:
      randomCard = 1;
      break;
  }

  switch (randomEnCard) {
    case 0:
      randomEnCard = 1;
      break;
  }

  switch (randomCard) {
    case 1:
      card1t.innerText = "Ace";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7: 
    case 8:
    case 9:
    case 10:
      card1t.innerText = randomCard;
      break;
    case 11:
      card1t.innerText = "Jack";
      break;
    case 12:
      card1t.innerText = "Queen";
      break;
    case 13:
      card1t.innerText = "King";
      break;
  }

  card1t.innerText = randomNormCard;

  switch (randomEnCard) {
    case 1:
      card2t.innerText = "Ace";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7: 
    case 8:
    case 9:
    case 10:
      card2t.innerText = randomEnCard;
      break;
    case 11:
      card2t.innerText = "Jack";
      break;
    case 12:
      card2t.innerText = "Queen";
      break;
    case 13:
      card2t.innerText = "King";
      break;
  }
}

cont.onclick = function () {
  measureGame();
}

useArm.onclick = function () {
  if (String(deck).includes("Ace")) {
    card1t.innerText = "Ace";
    removeItemOnce(deck, "Ace");
  }

  else {
    gameStatus.innerText = "You have no armies.";
  }
}

useProt.onclick = function () {
  let proNumAc = parseInt(proNum.innerText);

  if (proNumAc > 1 && card2t.innerText === "Ace") {
    removeItemOnce(deck, deck[Math.floor(Math.random() * deck.length)]);
    card1t.innerText = "Counter-Army";
  }

  else {
    gameStatus.innerText = "You require two protectorates; enemy's card must be an Ace.";
  }
}

forgeForm.onsubmit = function () {
  event.preventDefault();

  if (empireName.value.includes(";p{]")) {
    alert("Seriously?");
    return false;
  }

  switch (gameType) {
    case 0:
      menu2.style.display = "none";
      menu3.style.display = "block";
      
      break;
  }
}

enemyForm.onsubmit = function () {
  event.preventDefault();

  menu3.style.display = "none";
  menu4.style.display = "block";
  generateComp(parseInt(compNum.value));
  generateDeck();
}

function generateComp (num) {
  let randomGov = ["Republic", "Empire", "Duchy", "Kingdom", "Principality", "Sultanate", "Queendom", "Caliphate", "Expedition", "Tribe", "Confederation", "State", "Union", "Commonwealth", "Cult", "Hegemony", "Imperium", "City", "Cartel", "Triumvirate", "Alliance", "Dynasty", "Federation", "Commune", "People's Republic", "Democratic Republic", "Dominion", "Emirate", "Collective", "Pact", "League", "Coalition", "Consortium", "Entente", "Concordat", "Bloc", "Association", "Syndicate", "Horde", "Khanate", "Golden Horde", "Rebellion"];
  let randomCountry = ["of the North", "of the South", "of the East", "of the West", "of the Summer Moon", "of the Rising Sun", "of the Morning Fog", "of the Mountain People", "of the Sea People", "of the River People", "of the Forest Dwellers", "of the Endless Fields", "over the Roaring Waves", "of the Hilltop", "of the Corn Children", "of Eternity", "of the Sky", "of the Sea", "of the Water", "of Riches", "of the Hidden World", "of the Secret Garden", "of the Eternal City", "of the Raging River", "of Time", "of Fire"];

  compArray.push(empireName.value + ";p{]" + "10");
  
  for (i = 0; i < num; i++) {
    let randomAlgGov = randomGov[Math.floor(Math.random() * randomGov.length)];
    let randomAlgCont = randomCountry[Math.floor(Math.random() * randomCountry.length)];
    
    compArray.push(randomAlgGov + " " + randomAlgCont + ";p{]" + "10");
  }

  for (i = 0; i < compArray.length; i++) {
    let compSplit = compArray[i].split(";p{]");
    let compName = compSplit[0];
    let compCard = compSplit[1];
    
    leaderboard.innerHTML += "<p>" + compName + " Exarchates: <a class='numCol'>" + compCard + "</a></p>";
  }
}

function generateDeck () {
  for (i = 0; i < 10; i++) {
    let deckFore = Math.floor(Math.random() * 5);
    let deckMake = "";

    switch (deckFore) {
      case 0: 
        deckMake = Math.floor(Math.random() * 14);
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        deckMake = Math.floor(Math.random() * 11);
        break;
    }

    if (deckMake === 0) {
      deckMake = 1;
    }

    switch (deckMake) {
      case 1: 
        deckMake = "Ace";
        armIe += 1;
        break;
      case 11: 
        deckMake = "Jack";
        protEct += 1;
        break;
      case 12: 
        deckMake = "Queen";
        protEct += 1;
        break;
      case 13:
        deckMake = "King";
        protEct += 1;
        break;
    }
    
    deck.push(deckMake);
  }
  
  deckDom.innerText = String(deck);
  proNum.innerText = protEct;
  armNum.innerText = armIe;
}

setInterval(function () {
  let northCarthage = 0;
  let pulpFiction = "";

  leaderboard.innerHTML = "";
  
  for (i = 0; i < compArray.length; i++) {
    let compSplit = compArray[i].split(";p{]");
    let compCard = compSplit[1];
    
    let northMemphis = parseInt(compCard);

    if (northMemphis > northCarthage) {
      northCarthage = northMemphis;
      pulpFiction = compSplit[0];
    }
  }

  champion.innerText = pulpFiction;

  for (i = 0; i < compArray.length; i++) {
    let compSplit = compArray[i].split(";p{]");
    let compName = compSplit[0];
    let compCard = compSplit[1];
    
    leaderboard.innerHTML += "<p>" + compName + " Exarchates: <a class='numCol'>" + compCard + "</a></p>";
  }

  let tempDeck = 0;
  let tempProt = 0;
  let tempArm = 0;

  for (i = 0; i < deck.length; i++) {
    tempDeck += 1;

    if (deck[i] === "Jack" || deck[i] === "Queen" || deck[i] === "King") {
      tempProt += 1;
    }

    else if (deck [i] === "Ace") {
      tempArm += 1;
    }
  }
  exNum.innerText = tempDeck;
  proNum.innerText = tempProt;
  armNum.innerText = tempArm;
  deckDom.innerText = String(deck);

  for (i = 0; i < compArray.length; i++) {
    let compSplit = compArray[i].split(";p{]");
    let compName = compSplit[0];

    if (compName === empireName.value) {
      compArray[i] = empireName.value + ";p{]" + String(exNum.innerText);
    }
  }
}, 100);