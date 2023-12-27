// const root = document.getElementById("root");
// const newInput = document.createElement("input");
// const generateBtn = document.createElement("button");
// generateBtn.innerText = "Generate";
// root.appendChild(newInput);
// root.appendChild(generateBtn);

// generateBtn.addEventListener("click", () => {
//   drawCircles(Number(newInput.value));
// });

// function drawCircles(number) {
//   const Container = document.createElement("div");
//   Container.setAttribute("class", "container");
//   const red = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);

//   while (number > 0) {
//     const Circle = document.createElement("div");
//     Circle.setAttribute("class", "circle");
//     let newblue = blue - number * 5;
//     if (newblue < 0) {
//       newblue = Math.abs(newblue);
//     }
//     Circle.style.backgroundColor = `rgb(${red},${newblue},${green})`;
//     Container.appendChild(Circle);
//     number--;
//   }
//   root.appendChild(Container);
// }

const root = document.getElementById("root");
const input = document.createElement("input");
const generateBtn = document.createElement("button");
root.appendChild(input);
root.appendChild(generateBtn);
generateBtn.innerText = "Generate";

generateBtn.addEventListener("click", () => {
  drawcircles(Number(input.value));
});

function drawcircles(number) {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  while (number > 0) {
    const circle = document.createElement("div");
    circle.setAttribute("class", "circle");

    let newblue = blue - number * 5;
    if (newblue < 0) {
      newblue = Math.abs(newblue);
    }
    circle.style.backgroundColor = `rgb(${red}, ${newblue}, ${green})`;
    container.appendChild(circle);
    number--;
  }
  root.appendChild(container);
}
