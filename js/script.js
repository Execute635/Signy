const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.header__navigations');
const menuLinks = document.querySelectorAll('.header__link');
    
iconMenu.addEventListener ("click", function () {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
});
          
let swiper1 = document.querySelector('.home-slider');
let swiper2 = document.querySelector('.friend-slider');

if(swiper1){
    let mySwiper1 = new Swiper(swiper1 ,{
        pagination: {
            el: '.home-slider__pagination',
             // Буллеты
             clickable: true,
        },
        effect: "fade",
    });
}
if(swiper2){
    let mySwiper2 = new Swiper(swiper2 ,{
        pagination: {
            el: '.friend-slider__pagination',
            // Буллеты
            clickable: true,
        },
        slidesPerView: 4,
        breakpoints: {
            1440: {
                slidesPerView: 4,
            },
            1366: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },
            320: {
                slidesPerView: 1,
            },
            414: {
                slidesPerView: 1,
            },
        },
    });
}
    let title = document.querySelectorAll('.questions__title');
    if(title){
        for (let i = 0; i < title.length; i++){
            title[i].addEventListener("click", function(){
                let subTitle = this.nextElementSibling;
                if(subTitle.classList.contains('active') &&  this.classList.contains('with')){
                    this.classList.remove('with');
                    subTitle.classList.remove('active');
                } else{
                    this.classList.add('with');
                    subTitle.classList.add('active');
                }
            });
        }
    }
// модальное окно 1
let popupOne = document.getElementById('mypopup-01');
let popupToggleOne = document.getElementById('myBtn-01');
let popupCloseOne = document.querySelector('.popup__close');
let subInput = document.querySelector(".subscribe__input");
let popupText = document.querySelector(".popup__text");

if(popupOne){
    popupToggleOne.addEventListener("click", function(e){
        if(subInput.value.length > 0){
            popupOne.style.display="block"
            subInput.value = '';
        }
        e.preventDefault();
    });
    popupCloseOne.addEventListener("click", function(){
        popupOne.style.display="none"
    });
    window.addEventListener("click", function(e){
        if(e.target == popupOne) {
            popupOne.style.display="none"   
        }
    });
}
// модальное окно 2
let popupTwo = document.getElementById('mypopup-02');
let popupToggleTwo = document.getElementById('myBtn-02');
let popupCloseTwo = document.querySelector('.popup-02__close');
let popupEmail = document.querySelector(".popup-02__input-02");

if(popupTwo){
    popupToggleTwo.onclick = function(e){
        popupTwo.style.display="block"
        e.preventDefault();
    };
    popupCloseTwo.onclick = function(){
        popupTwo.style.display="none"
    };
    window.onclick = function(e){
        if(e.target == popupTwo) {
            popupTwo.style.display="none"   
        }
    }
};