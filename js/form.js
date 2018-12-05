const orderForm = document.querySelector('#order-form');
const submitButton = document.querySelector('#form-submit');
// const overlay = document.querySelector(".overlay");
// const popupText = document.querySelector(".overlay__text");
const overlayOrder = document.querySelector("#overlay-order");
const popupTextOrder = document.querySelector("#overlay-order__text");
let myFormData = new FormData();


submitButton.addEventListener('click', e=>{
    e.preventDefault();
    e.stopPropagation();
    myFormData.append('name', orderForm.elements.name.value);
    myFormData.append('phone', orderForm.elements.phone.value);
    myFormData.append('comment', orderForm.elements.comment.value);
    myFormData.append('to', 'itrenin@gmail.com');

    //console.log(JSON.stringify(myFormData));

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail', true);
    xhr.send(myFormData);
    //console.log('Я все еще работаю');

    xhr.addEventListener('load', () => {
        console.log(xhr.response.status);
        if(xhr.response.status>=400) {
            let contentOrder = 'Ошибка, данные не отправлены, попробуйте позже';
            popupText.innerHTML = contentOrder;
            overlay.style.display = 'block';
       
          } else {
              if(xhr.response.status) {
                  let contentOrder = 'Сообщение отправлено';
                  console.log(contentOrder);
                  popupTextOrder.innerHTML = contentOrder;
                  overlayOrder.style.display = 'block';
                       
              } else {
                  let contentOrder = 'Соединение с сервером не установлено';
                  popupTextOrder.innerHTML = contentOrder;
                  overlayOrder.style.display = 'block';
                       
              }
          }
        });

});
// 1. name - имя заказавшего
// 2. phone - телефон заказавшего
// 3. comment - комментарий
// 4. to - почта (в формате валидного адреса email)