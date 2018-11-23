const accoSection = document.querySelector(".team__section");
const accoItem = document.querySelectorAll(".team-acco__item");

accoSection.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();


    for (let i = 0; i < accoItem.length; i++){
        accoItem[i].classList.remove("team-acco__item--active");
    }

    for (let i = 0; i < accoItem.length; i++){
        accoItem[i].addEventListener("click", function(e){
            e.preventDefault();
            e.stopPropagation();

            if (accoItem[i].classList.contains("team-acco__item--active")){
                accoItem[i].classList.remove("team-acco__item--active");
            } else {
                for (let i = 0; i < accoItem.length; i++){
                    accoItem[i].classList.remove("team-acco__item--active");
                }
                accoItem[i].classList.add("team-acco__item--active");
            }
        });
    }

});