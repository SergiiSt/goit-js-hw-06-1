const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);
function onInputChange(event) {
  const inputValue = event.target.value.trim();
  spanEl.textContent = inputValue ? inputValue : "Anonymous";
}
