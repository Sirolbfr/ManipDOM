const input = document.getElementById('input');
const list = document.getElementById('list');
const submit_btn = document.getElementById('submit');

submit_btn.addEventListener("click", submit);

function submit() {
  if (input.value != '') {
    list.innerHTML += `<li>${input.value}</li>`
    input.value = '';
  }
}