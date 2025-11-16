const $ = document;

const form = $.getElementById("form");
const username = $.getElementById("username");
const email = $.getElementById("email");
const password = $.getElementById("password");
const repass = $.getElementById("repass");
const res = $.getElementById("res");

const handleSubmit = (e) => {
  const name = username.value.trim();
  const ema = email.value.trim();
  const pass = password.value.trim();
  const repassw = repass.value.trim();
  console.log(name, ema, pass, repassw);
  if (!name || !ema || !pass || !repass) {
    e.preventDefault();
    const notyf = new Notyf();
    notyf.error("Please enter all inputs");
  }
  if (ema.length < 11) {
    e.preventDefault();
  }
  if (pass !== repassw) {
    e.preventDefault();
    const notyf = new Notyf();
    notyf.error("Please enter same pass!");
  }
};
const handleReset = () => {
  username.value = "";
  email.value = "";
  password.value = "";
  repass.value = "";
  res.value = "";
};
form.addEventListener("submit", handleSubmit);
res.addEventListener("click", handleReset);
