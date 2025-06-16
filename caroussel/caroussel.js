const cont = document.getElementById('cont');
const slides = document.querySelectorAll('li');

document.getElementById('prev').addEventListener("click", () => changeSlide(-1))
document.getElementById('next').addEventListener("click", () => changeSlide(1))

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {showSlides(slideIndex += n)}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}