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
  if (!name || !ema || !pass || !repass) e.preventDefault();
  if (ema.length < 11) {
    e.preventDefault();
    const notyf = new Notyf();
    notyf.error("Please enter a valid email!");
  }
  if (pass !== repassw) {
    e.preventDefault();
    Swal.fire({
      icon: "error", // نوع پیام: error, success, warning, info, question
      title: "Oops...",
      text: "Please enter a valid pass!",
      background: "#432dd7", // رنگ بک‌گراند مودال
      color: "#ffffff",
    });
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
