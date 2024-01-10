const input = document.querySelector("input");
const span = document.getElementById("span");
const btn = document.getElementById("btn");
const state = document.getElementById("states");
const success = document.getElementById("success");

const charter = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
function validateEmail() {
  if (!input.value.match(charter)) {
    span.innerText = "Invalid email";
    span.style.color = "red";
  } else {
    span.innerText = "Valid email";
    span.style.color = "green";
    btn.style.pointerEvents = "auto";
  }
  input.value = input.value;
}

btn.addEventListener("click", function () {
  state.classList.remove("flex");
  state.classList.add("hidden");
  success.classList.remove("hidden");
  success.classList.add("block");
});
