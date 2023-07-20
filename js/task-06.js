const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");
// console.log(inputEl);

inputEl.addEventListener("blur", (event) => {
  const valueLength = event.target.value.trim().length;
  console.log(valueLength);
  console.log(dataLength);
  if (Number(dataLength) === valueLength) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
