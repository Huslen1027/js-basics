// const root = document.getElementById("root");

// const startButton = document.createElement("button");
// startButton.innerText = "Start";
// root.appendChild(startButton);
// const reset = document.createElement("button");
// reset.innerText = "reset";
// root.appendChild(reset);
// startButton.addEventListener("click", startGame);
// const container = document.createElement("div");
// root.appendChild(container);

// function startGame() {
//   const box = document.createElement("div");
//   const diffBox = document.createElement("div");
//   const red = Math.floor(Math.random() * 245) + 10;
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);
//   const randomColor = `rgb(${red},${green},${blue})`;
//   const differentColor = `rgb(${red - 10},${green},${blue})`;

//   box.setAttribute("class", "box");
//   diffBox.setAttribute("class", "box");
//   box.style.backgroundColor = randomColor;
//   diffBox.style.backgroundColor = differentColor;

//   container.appendChild(box);
//   container.appendChild(diffBox);
// }

// localStorage.setItem("item", "1232345");
// console.log(localStorage.getItem("item"));

// function resett() {
//   document.getElementById("reset").innerText = "";
// }

const root = document.getElementById("root");
//header uusgeh
const header = document.createElement("div");
header.setAttribute("class", "head");
//rootrugee headeraa hiij bn
root.appendChild(header);

const startBtn = document.createElement("button");
startBtn.innerText = "start";
startBtn.setAttribute("class", "startgame");
header.appendChild(startBtn);

const gamebody = document.createElement("div");
gamebody.setAttribute("class", "gamebody");
startBtn.addEventListener("click", startgame);
root.appendChild(gamebody);

function startgame() {
    const box = document.createElement("div");
    box.setAttribute("class", "box");

    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 205 + 50);
    const rand = Math.floor(Math.random() * 8);
    for (i = 0; i < 9; i++) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        if (i == rand) {
            card.style.backgroundColor = `rgb(${red}, ${green - 50}, ${blue})`;
        } else {
            card.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        box.appendChild(card);
    }
    gamebody.innerHTML = "";
    gamebody.appendChild(box);
}