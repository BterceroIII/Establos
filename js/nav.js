const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navegacion");

hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
});

const openModal = document.querySelector('.entrada__enlace');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});


