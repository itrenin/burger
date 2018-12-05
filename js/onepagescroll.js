
const content = document.querySelector('.maincontent');
const fixedMenuItems = document.querySelectorAll('.fixed-menu__item');
const fixedMenu = document.querySelector('.fixed-menu');
const navList = document.querySelector('.nav__list');
const btnOrder = document.querySelector('.btn');
const bMenu = document.querySelector('.burger-menu-content__list');
const burgerFullScreenMenuActive = document.querySelector(".burger-menu-content");
const wrapperBlockActive = document.querySelector(".wrapper");
const hamburgerBtn = document.querySelector("#hamburger-menu-button");
const sections = document.querySelectorAll ('section');
const arrowDown = document.querySelector('.arrow-down');


let currentSlide = 0;
let inScroll = false;

content.addEventListener('wheel', e=>{
    if (e.deltaY > 0){ // page down
        if(findNextSlide(currentSlide) && !inScroll){
            inScroll = true;
            nextSlide();
            setTimeout(null,200);
            inScroll = false;
            
            
        }
        
    }
    if(e.deltaY < 0){ //page up
        if (findPreviosSlide(currentSlide) && !inScroll){
            setTimeout(previostSlide,200);
        }
        
    }
});
document.addEventListener('keydown', e=>{
    //console.log(e.keyCode);
    switch (e.keyCode){
        case 40:  nextSlide(); break;
        case 38: previostSlide(); break;
    }
});

arrowDown.addEventListener('click', e=>{
    e.preventDefault();
    nextSlide();
});

fixedMenu.addEventListener('click', e=>{
    e.preventDefault();
    removeActiveFixedMenu();
    currentSlide = e.target.classList[1] - 1;
    fixedMenuItems[currentSlide].classList.add('active');
    content.style.transform = "translateY("+ (-1 * (currentSlide * 100)) + "%)";
    
});
navList.addEventListener('click', e=>{
    e.preventDefault();
    removeActiveFixedMenu();
    currentSlide = e.target.classList[1] - 1;
    fixedMenuItems[currentSlide].classList.add('active');
    content.style.transform = "translateY("+ (-1 * (currentSlide * 100)) + "%)";
});

btnOrder.addEventListener('click', e=>{
    e.preventDefault();
    removeActiveFixedMenu();
    currentSlide = e.target.classList[1] - 1;
    fixedMenuItems[currentSlide].classList.add('active');
    content.style.transform = "translateY("+ (-1 * (currentSlide * 100)) + "%)";
});

bMenu.addEventListener('click', e=>{
    e.preventDefault();
    burgerFullScreenMenuActive.classList.remove('burger-menu-content--active');
    wrapperBlockActive.classList.remove("wrapper--blocked");
    hamburgerBtn.classList.remove("hamburger-menu__icon-pic-close");
    removeActiveFixedMenu();
    currentSlide = e.target.classList[1] - 1;
    console.log(currentSlide);
    fixedMenuItems[currentSlide].classList.add('active');
    content.style.transform = "translateY("+ (-1 * (currentSlide * 100)) + "%)";
});

//------------------------------------

function nextSlide(){ 
         
        sections[currentSlide].classList.remove('active-section');
        currentSlide ++;
        sections[currentSlide].classList.add('active-section');
        content.style.transform = "translateY("+ (-1 * (currentSlide * 100)) + "%)";
        removeActiveFixedMenu();
        fixedMenuItems[currentSlide].classList.add('active');


    }

function previostSlide(){
        
        sections[currentSlide].classList.remove('active-section');
        currentSlide --;
        sections[currentSlide].classList.add('active-section');
        content.style.transform = "translateY("+ (-1 * (currentSlide * 100)) + "%)";
        removeActiveFixedMenu();
        fixedMenuItems[currentSlide].classList.add('active');
    
}

//----------------------------------------
function findNextSlide(i){
       if(i>=0 && i < sections.length-1){
           return true;
       } else return false;
}
function findPreviosSlide(i){
    if(i>0 && i <= sections.length-1){
        return true;
    }else return false;
}

function removeActiveFixedMenu(){
    for (let i = 0; i < fixedMenuItems.length; i++){
        if (fixedMenuItems[i].classList.contains('active')){
            fixedMenuItems[i].classList.remove('active');
        }
    }
}