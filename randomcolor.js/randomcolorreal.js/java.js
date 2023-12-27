const root = document.getElementById("root");

const header = document.createElement("div");
const touch = document.createElement("button");
const level = document.createElement("p");
const chance = document.createElement("p");
const gamebody = document.createElement("div");
const levelC = 0;
const chanceC = 3;
level.innerText = "level" + levelC;
touch.innerText = "start";
chance.innerText = "chance" + chanceC;

chance.setAttribute("class", "score");
level.setAttribute("class", "p");
touch.setAttribute("class", "p");
header.setAttribute("class", "head");
gamebody.setAttribute("class", "gamebody");

header.appendChild(level);
header.appendChild(touch);
header.appendChild(chance);
root.appendChild(header);
root.appendChild(gamebody);

touch.addEventListener("click", startgame);

function startgame() {
  const box = document.createElement("div");
  box.setAttribute("class", "box");

  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 205 + 50);
  const rand = Math.floor(Math.random() * 8);
  const randomColor = `rgb(${red}, ${green},${blue})`;
  for (i = 0; i < 9; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", i);
    if (i == rand) {
      card.addEventListener("click", startgame);
      card.style.backgroundColor = `rgb(${red}, ${green - 50},${blue})`;
    } else {
      card.style.backgroundColor = randomColor;
    }
    box.appendChild(card);

    card.addEventListener("click", (e) => {
      let boxId = e.target.id;
      if (boxId == random) {
        levelC++;
        box.innerHTML = "";
        level.innerText = "Level" + levelC;
        if (levelC == 5) {
          gamebody.innerHTML = "WIN";
        } else {
          addBoxes();
        }
      } else {
        chanceC--;
        if (chanceC == 0) {
          gamebody.innerHTML = "LOSE";
        }
        chance.innerText = "Chance " + chanceC;
      }
    });
  }

  gamebody.innerHTML = "";
  gamebody.appendChild(box);
}
function startGame() {
  levelC = 0;
  level.innerText = "Level " + levelC;
  chanceC = 3;
  chance.innerText = "Chance " + chanceC;
  gamebody.innerHTML = "";
  box.innerHTML = "";
  addBoxes();
}

/*
const root = document.getElementById("root");
const header = document.createElement("div");
header.setAttribute("class", "header");

let levelC = 0;

const level = document.createElement("p");
level.innerText = "Level " + levelC;

const start = document.createElement("button");
start.setAttribute("id", "start");
start.innerText = "Start";

let chanceC = 3;

const chance = document.createElement("p");
chance.setAttribute("class", "chance");
chance.innerText = "Chance " + chanceC;

header.appendChild(level);
header.appendChild(start);
header.appendChild(chance);
const gameBody = document.createElement("div");
gameBody.setAttribute("class", "gameBody");
const boxes = document.createElement("div");
boxes.setAttribute("class", "boxes");
root.appendChild(header);
root.appendChild(gameBody);
start.addEventListener("click", startGame);

function addBox() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  const random = Math.floor(Math.random() * 8);

  for (i = 0; i < 9; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", i);
    if (i == random) {
      box.style.backgroundColor = `rgb(${red - 50}, ${green}, ${blue})`;
    } else {
      box.style.backgroundColor = randomColor;
    }
    boxes.appendChild(box);

    box.addEventListener("click", (e) => {
      let boxId = e.target.id;
      if (boxId == random) {
        levelC++;
        boxes.innerHTML = "";
        level.innerText = "Level " + levelC;
        if (levelC == 5) {
          gameBody.innerHTML = "WIN";
        } else {
          addBox();
        }
      } else {
        chanceC--;
        if (chanceC == 0) {
          gameBody.innerHTML = "LOSE";
        }
        chance.innerText = "Chance " + chanceC;
      }
    });
  }

  gameBody.appendChild(boxes);
}

function startGame() {
  levelC = 0;
  level.innerText = "Level " + levelC;
  chanceC = 3;
  chance.innerText = "Chance " + chanceC;
  //   gameBody.innerHTML = "";
  boxes.innerHTML = "";
  addBoxes();
}
/*/
