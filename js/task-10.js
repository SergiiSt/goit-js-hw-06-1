function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("[data-create]");
const divContainerEl = document.querySelector("#boxes");
const destroyBtnEl = document.querySelector("[data-destroy]");

function createBoxes(value) {
  let boxSize = 30;
  for (let i = 0; i < value; i += 1) {
    const createdDivEl = document.createElement("div");
    createdDivEl.style.backgroundColor = getRandomHexColor();
    createdDivEl.style.width = `${boxSize}px`;
    createdDivEl.style.height = `${boxSize}px`;
    divContainerEl.appendChild(createdDivEl);
    boxSize += 10;
  }
}

function destroyBoxes() {
  divContainerEl.innerHTML = "";
}

createBtnEl.addEventListener("click", () => {
  createBoxes(Number(inputEl.value));
});

destroyBtnEl.addEventListener("click", () => {
  destroyBoxes();
});
