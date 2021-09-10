const btn = document.querySelector("#v2");
btn.onclick = function () {
  alert("You clicked me! Using JavaScript");
};

function scream() {
  alert("DO NOT TOUCH ME!");
}

btn.onmouseenter = scream;

const btn3 = document.querySelector("#v3");

btn3.addEventListener("click", scream);
