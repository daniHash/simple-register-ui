const $ = document;

const form = $.getElementById("login-form");
const username = $.getElementById("username");
const password = $.getElementById("password");
const res = $.getElementById("res-btn");

const handleSubmit = (e) => {
  const name = username.value.trim();
  const pass = password.value.trim();
  if (!name || !pass) {
    e.preventDefault();
    const notyf = new Notyf();
    notyf.error("Please enter all inputs");
  }
};
const handleReset = () => {
  username.value = "";
  password.value = "";
};
form.addEventListener("submit", handleSubmit);
res.addEventListener("click", handleReset);
