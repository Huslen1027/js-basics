const root = document.getElementById("root");

const header = document.createElement("div");
const touch = document.createElement("button");
const level = document.createElement("p");
const chance = document.createElement("p");
const gamebody = document.createElement("div");
const levelC = 0;
const changeC = 0;
level.innerText = "level" + levelC;
touch.innerText = "start";
chance.innerText = "chance" + changeC;

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
    if (i == rand) {
      card.addEventListener("click", startgame);
      card.style.backgroundColor = `rgb(${red}, ${green - 50},${blue})`;
    } else {
      card.style.backgroundColor = randomColor;
    }
    box.appendChild(card);

    card.addEventListener("click");
  }

  gamebody.innerHTML = "";
  gamebody.appendChild(box);
}
