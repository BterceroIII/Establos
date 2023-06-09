const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navegacion");

hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
});

