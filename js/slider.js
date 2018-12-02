const left = document.querySelector("#burger__left");
const right = document.querySelector("#burger__right");
const items = document.querySelector("#burger__list");
const itemsNumber = document.querySelectorAll(".burger__item");
const computed = getComputedStyle(items);


right.addEventListener("click", function(e) {

  e.preventDefault();
  let currentRight = parseInt(computed.right);
  if (!currentRight){
    currentRight = 0;
  }
  if (currentRight < (parseInt(computed.width) * ((itemsNumber.length)-1))){
    items.style.right = currentRight + parseInt(computed.width) + 'px';
  }
});

left.addEventListener("click", function(e) {
  
    e.preventDefault();
    let currentRight = parseInt(computed.right);
    if (!currentRight){
      currentRight = 0;
    }
    if (currentRight > 0){
      items.style.right = currentRight - parseInt(computed.width) + 'px';
    }
});