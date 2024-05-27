
// const hamburgerMenu = document.querySelector(".hamburger-menu");
// const headerContent = document.querySelector(".header-content");
// const navBar = document.querySelector("nav");
// const menuContainer = document.querySelector(".menu-container");
// let closeIcon = document.querySelector(".close-icon");
// const goTop= document.querySelector(".go-top")
// const mainContent = document.querySelector(".main-content")

// hamburgerMenu.addEventListener("click", () => {
//     navBar.classList.add("menu-open");
//     menuContainer.classList.add("menu-gayab");
// });

// closeIcon.addEventListener("click", () => {
//     navBar.classList.remove("menu-open");
//     menuContainer.classList.remove("menu-gayab");
// });

// goTop.addEventListener("click", ()=> {
//     mainContent.scrollTo(0,0)
// })



// window.addEventListener("DOMContentLoaded", ()=> {
//     menuContainer.classList.remove("menu-gayab");
//     navBar.classList.remove("menu-open")
// })

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector("nav");
const menuContainer = document.querySelector(".menu-container");
const closeIcon = document.querySelector(".close-icon");
const goTop = document.querySelector(".go-top");
const mainContent = document.querySelector(".main-content");

hamburgerMenu.addEventListener("click", () => {
    navBar.classList.add("menu-open");
    menuContainer.classList.add("menu-gayab");
});

closeIcon.addEventListener("click", () => {
    navBar.classList.remove("menu-open");
    menuContainer.classList.remove("menu-gayab");
});

navBar.querySelectorAll('a').forEach((link) => {
    link.addEventListener("click", () => {
        navBar.classList.remove("menu-open");
        menuContainer.classList.remove("menu-gayab");
    });
});

document.addEventListener("click", (event) => {
    if (!navBar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        navBar.classList.remove("menu-open");
        menuContainer.classList.remove("menu-gayab");
    }
});

goTop.addEventListener("click", () => {
    mainContent.scrollTo(0, 0);
});

window.addEventListener("DOMContentLoaded", () => {
    menuContainer.classList.remove("menu-gayab");
    navBar.classList.remove("menu-open");
    mainContent.scrollTo(0, 0);
});

