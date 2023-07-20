const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
console.log(listEl);
ingredients.forEach((ingridient) => {
  const listElCall = document.createElement("li");
  listElCall.textContent = ingridient;
  listElCall.classList.add("item");
  listEl.append(listElCall);
});
