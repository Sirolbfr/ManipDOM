const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const max = document.getElementById('max');
const input = document.querySelector('input');
const p1_btn = document.getElementById('p1_btn');
const p2_btn = document.getElementById('p2_btn');
const reset_btn = document.getElementById('reset');

max.innerHTML += input.value;

input.addEventListener ("change", function() {
  changeMax();
  reset();
});
p1_btn.addEventListener ("click", () => changeScore(1));
p2_btn.addEventListener ("click", () => changeScore(2));
reset_btn.addEventListener ("click", reset);

function reset() {
  [p1.innerHTML, p2.innerHTML] = [0, 0];
  [p1.style.color, p2.style.color] = ["#000000", "#000000"];
  [p1_btn.disabled, p2_btn.disabled] = [false, false];
}

function checkMax() {
  if (p1.innerHTML == input.value || p2.innerHTML == input.value) {
    if (p1.innerHTML == input.value) {p1.style.color = "#00ff00"}
    else {p2.style.color = "#00ff00"}
    p1_btn.disabled = true;
    p2_btn.disabled = true;
  }
}

function changeMax() {
  max.innerHTML = "Playing to: " + input.value;
  reset();
}

function changeScore(player) {
  if (player == 1) {p1.innerHTML = parseInt(p1.innerHTML)+1;}
  else {p2.innerHTML = parseInt(p2.innerHTML)+1}
  checkMax();
}
