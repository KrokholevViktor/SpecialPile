import formSlider from "./modules/form-slider";
import examplesSlider from "./modules/examples-slider";
import reviewsSlider from "./modules/reviews-slider";
import accordion from "./modules/accordion";
import form from "./modules/form";

window.addEventListener('DOMContentLoaded', function () {
    "use strict";
    formSlider('.form-slider__navigation_prev .button_black', '.form-slider__navigation_next .button_black', '.form-slider__item', '.form-slider__wrapper', '.form-slider__inner');
    examplesSlider('.examples__navigation .navigation_prev .button_black', '.examples__navigation .navigation_next .button_black', '.examples__slide', '.examples__wrapper', '.examples__inner' );
    reviewsSlider('.reviews__navigation .navigation_prev .button_black', '.reviews__navigation .navigation_next .button_black', '.reviews__slide', '.reviews__wrapper', '.reviews__inner'); // init slider for reviews
    accordion('.questions__accordion__item', '.questions__accordion__descr');
    form();

   

    const slides = document.querySelectorAll('.form-slider__item');

    slides.forEach(slide => {
        const images = slide.querySelectorAll('.form-slider__img img'),
              cardAskSelects = slide.querySelectorAll('.form-slider__item__card-form_select');

        images.forEach(element => {
            element.addEventListener('click', () => {
                images.forEach(element => {
                    element.classList.remove('img-selected');
                });
                element.classList.add('img-selected');
    
                if (!element.classList.contains('img-selected')) {
                    element.previousElementSibling.style.cssText = "border-bottom: 1px solid $black-color;"
                   
                } else {
                    element.previousElementSibling.style.cssText = "background-color: transparent; border-bottom: none; color: white"
                }
            });
        });

        cardAskSelects.forEach(select => {
            select.addEventListener('click', () => {
                cardAskSelects.forEach(select => {
                    select.classList.remove('ask-selected');
                });
                select.classList.add('ask-selected');
    
                
            });
        });
    });


    

    
});