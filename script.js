const content = document.querySelector("#content");
const resetBtn = document.querySelector("#reset-btn");

let boxColumn = 4;
let boxRow = 4;

function getRandomColor() {
  return Math.floor(Math.random() * 255 + 1);
}

for (let i = 0; i < boxColumn; i++) {
  const boxForSquer = document.createElement("div");
  boxForSquer.style.display = "flex";
  boxForSquer.style.flex = "1";
  boxForSquer.style.flexDirection = "column";
  for (let j = 0; j < boxRow; j++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.flex = "1";
    box.style.border = "solid 1px";
    boxForSquer.appendChild(box);
  }

  content.appendChild(boxForSquer);
}

const boxs = document.querySelectorAll(".box");

let opacity = 1;

boxs.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    // opacity -= 0.1;
    // element.style.opacity = `${opacity}`;
  });
});

resetBtn.addEventListener("click", () => {
  console.log("pressed");
  boxs.forEach((element) => element.remove());
});
