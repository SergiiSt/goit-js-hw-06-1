function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const colorBtnEl = document.querySelector('[type="button"]');
colorBtnEl.addEventListener("click", onChangeColorBtnClick);
function onChangeColorBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}
