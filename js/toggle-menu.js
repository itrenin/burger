
const hamburger = document.querySelector("#hamburger-menu-button");
const burgerFullScreenMenu = document.querySelector(".burger-menu-content");
const wrapperBlock = document.querySelector(".wrapper");

const styleHamburger = getComputedStyle(hamburger);

hamburger.addEventListener("click", function(e){
    e.preventDefault();


    if (burgerFullScreenMenu.classList.contains("burger-menu-content--active")){
        burgerFullScreenMenu.classList.remove("burger-menu-content--active");
        wrapperBlock.classList.remove("wrapper--blocked");
        hamburger.classList.remove("hamburger-menu__icon-pic-close");
    }
    else {
        burgerFullScreenMenu.classList.add("burger-menu-content--active");
        wrapperBlock.classList.add("wrapper--blocked");
        hamburger.classList.add("hamburger-menu__icon-pic-close");
    }

});