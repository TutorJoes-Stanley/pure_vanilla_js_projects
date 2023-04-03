const toggleBtn = document.querySelector("#toggleBtn");
const input = document.querySelector(".input-container input");

let password = true;
toggleBtn.addEventListener("click", function () {
  if (password) {
    input.setAttribute("type", "text");
    toggleBtn.classList.remove("fa-eye");
    toggleBtn.classList.add("fa-eye-slash");
    password = false;
  } else {
    input.setAttribute("type", "password");
    toggleBtn.classList.remove("fa-eye-slash");
    toggleBtn.classList.add("fa-eye");
    password = true;
  }
});
