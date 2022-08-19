const againstSystem = document.getElementById("against-the-system");

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

let gameType = 0;
let compArray = [];

againstSystem.onclick = function () {
  menu1.style.display = "none";
  menu2.style.display = "block";
  gameType = 0;
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
}

function generateComp (num) {
  let randomGov = ["Republic", "Empire", "Duchy", "Kingdom", "Principality", "Sultanate", "Queendom", "Caliphate", "Expedition", "Tribe", "Confederation", "State", "Union", "Commonwealth", "Cult", "Hegemony", "Imperium", "City", "Cartel", "Triumvirate", "Alliance", "Dynasty", "Federation", "Commune", "People's Republic", "Democratic Republic", "Dominion", "Emirate", "Collective"];
  let randomCountry = ["of the North", "of the South", "of the East", "of the West", "of the Summer Moon", "of the Rising Sun", "of the Morning Fog", "of the Mountain People", "of the Sea People", "of the River People", "of the Forest Dwellers", "of the Endless Fields", "over the Roaring Waves", "of the Hilltop", "of the Corn Children", "of Eternity", "of the Sky", "of the Sea", "of the Water", "of Riches"];

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