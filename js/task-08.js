const loginEl = document.querySelector(".login-form");
const emailEl = document.querySelector('[type = "email"]');
const passwordEl = document.querySelector('[type="password"]');
loginEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (emailEl.value === "" || passwordEl.value === "") {
    return alert("Все поля должны быть заполнены!!!");
  }
  const dataArray = { email, password };
  console.log(dataArray);
  loginEl.reset();
});
