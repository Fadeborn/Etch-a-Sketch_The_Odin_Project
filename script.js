const content = document.querySelector("#content");
const resetBtn = document.querySelector("#reset-btn");

function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

function cleanGrid() {
  content.innerHTML = "";
}

function applyDarkenEffect(box) {
  box.addEventListener("mouseenter", () => {
    let darkness = Number(box.dataset.darkness);
    darkness = Math.min(darkness + 0.1, 1);
    box.dataset.darkness = darkness;
    box.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`;
  });
}

function applyRandomColorEffect(box) {
  box.addEventListener(
    "mouseenter",
    () =>
      (box.style.backgroundColor = `rgb(${getRandomNumber(
        255
      )}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`)
  );
}

function createBox(size) {
  const containerSize = 600;
  const boxSize = containerSize / size;

  const box = document.createElement("div");
  box.dataset.darkness = 0;
  box.style.height = boxSize + "px";
  box.style.width = boxSize + "px";
  box.classList.add("box");
  return box;
}

function createGrid(size, effect) {
  cleanGrid();

  for (let i = 0; i < size ** 2; i++) {
    const box = createBox(size);
    if (effect === "darken") applyDarkenEffect(box);
    if (effect === "random") applyRandomColorEffect(box);
    content.appendChild(box);
  }
}

createGrid(16, "random");

resetBtn.addEventListener("click", () => {
  let sizeGird = 0;
  while (true) {
    sizeGird = Number(prompt("Enter grid size: ", 4));

    if (sizeGird > 100) {
      alert("The grid cannot be larger than 100x100");
    } else if (sizeGird < 0) {
      alert("The grid cannot be less than 0");
    } else {
      break;
    }
  }

  createGrid(sizeGird, "darken");
});
