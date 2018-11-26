const reviews = document.querySelector(".reviews__list");
const overlay = document.querySelector(".overlay");
const popupText = document.querySelector(".overlay__text");

reviews.addEventListener('click', e =>{
    e.preventDefault();
    let element = e.target;

    console.log (element.tagName);
    if (element.tagName === 'A'){
        let modalText = element.previousElementSibling.innerHTML;
        
        popupText.innerHTML = modalText;
        overlay.style.display = 'block';
    }
});

overlay.addEventListener('click', e =>{
    e.preventDefault();
    let element = e.target;
    if (element.tagName === 'A'){
        overlay.style.display = 'none';
    }
});

document.addEventListener('keyup', e => {
    let keyName = e.keyCode;
    
    if (keyName === 27) {
      overlay.style.display = 'none';
    }
  });