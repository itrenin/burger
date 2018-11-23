const menu = document.querySelector(".menu-acco");
const menuItem = document.querySelectorAll (".menu-acco__item");
const btnClose = document.querySelector("#acco-content__close");


menu.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    for (let i = 0; i < menuItem.length; i++){
        menuItem[i].classList.remove("menu-acco__item--active");
    }
});

btnClose.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    for (let i = 0; i < menuItem.length; i++){
        menuItem[i].classList.remove("menu-acco__item--active");
    }
});

for (let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        
       if (menuItem[i].classList.contains("menu-acco__item--active")){
           menuItem[i].classList.remove("menu-acco__item--active");
       } else{
           for (let i = 0; i < menuItem.length; i++){
            menuItem[i].classList.remove("menu-acco__item--active");
           }
        menuItem[i].classList.add("menu-acco__item--active");
       }
       
    });
}