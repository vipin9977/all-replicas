const hamburger = document.querySelector(".navigation__hamburger")
const menu = document.querySelector(".navigation__menu")

hamburger.addEventListener('click' , () => {
    menu.classList.toggle("open")
})