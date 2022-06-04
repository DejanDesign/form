const user = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorDiv = document.getElementById("error");


alert('correct user: new_user &  pass: 123456789');

/*form.addEventListener("submit", (e) => {
  let messages = [];
  if (
    user.value === "" ||
    (user.value == null && password.value === "") ||
    password.value == null
  ) {
    messages.push("* please, enter username");
    messages.push("* please, enter password");
    user.style.borderColor = "red";
    password.style.borderColor = "red";
  }

  if (user.value === "new_user" && password.value === "123456789") {
    user.style.borderColor = "green";
    password.style.borderColor = "green";
    e.preventDefault();
  }
  if (!(user.value === "new_user")) {
    user.style.borderColor = "red";
    messages.push("* please, enter valid username");
    e.preventDefault();
  }
  if (password.value !== "123456789") {
    password.style.borderColor = "red";
    messages.push("* please, enter valid password");
    e.preventDefault();
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorDiv.innerText = messages.join(",");
  }
});*/

form.addEventListener("submit", (e) => {
  let messages = [];
  if (user.value === "" && password.value === "") {
    messages.push("* please, enter username");
    messages.push("* please, enter password");
    user.style.borderColor = "red";
    password.style.borderColor = "red";
  }

  if (user.value === "new_user" && password.value === "123456789") {
    user.style.borderColor = "green";
    password.style.borderColor = "green";
    messages.push("");
    e.preventDefault();
  }
  if (user.value !== "new_user" && user.value !== "") {
    user.style.borderColor = "red";
    messages.push("* please, enter valid username");
    e.preventDefault();
  }
  if (password.value !== "123456789" && password.value !== "") {
    password.style.borderColor = "red";
    messages.push("* please, enter valid password");
    e.preventDefault();
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorDiv.innerText = messages.join(",");
  }
});
