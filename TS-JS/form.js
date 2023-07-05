const user = {
    name: "",
    username: "",
    email: "",
    password: "",
 };
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
 
function handleSubmit(e) {
    e.preventDefault();
    user.name = e.target.name.value;
    user.username = e.target.username.value;
    user.email = e.target.email.value;
    user.password = e.target.password.value;
    console.log(user);
    form.value = ""
 }