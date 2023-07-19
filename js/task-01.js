const categories = document.querySelector("#categories");
const categoriesArray = categories.children;
console.log(`Number of categories: ${categoriesArray.length}`);
const categoriName = document.querySelectorAll(".item");
categoriName.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
