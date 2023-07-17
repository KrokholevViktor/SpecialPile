import formSlider from "./modules/formSlider";
import examplesSlider from "./modules/examplesSlider";
import reviewsSlider from "./modules/reviewsSlider";
import accordion from "./modules/accordion";
import forms from "./modules/forms";
import modals from "./modules/modals";
import changeFormSliderSate from "./modules/changeFormSliderSate";
import mask from "./modules/mask";
import burger from "./modules/burger";
import advantagesSlider from "./modules/advantagesSlider";

window.addEventListener('DOMContentLoaded', function () {
    "use strict";

    let formSliderState = {};
    formSlider('.form-slider__navigation_prev .button_black', '.form-slider__navigation_next .button_black', '.form-slider__item', '.form-slider__wrapper', '.form-slider__inner');
    changeFormSliderSate(formSliderState);
    examplesSlider('.examples__navigation .navigation_prev .button_black', '.examples__navigation .navigation_next .button_black', '.examples__slide', '.examples__wrapper', '.examples__inner' );
    reviewsSlider('.reviews__navigation .navigation_prev .button_black', '.reviews__navigation .navigation_next .button_black', '.reviews__slide', '.reviews__wrapper', '.reviews__inner'); // init slider for reviews
    accordion('.questions__accordion__item', '.questions__accordion__descr');
    forms(formSliderState);
    modals();
    mask('[name="phone"]');
    burger('.header__menu_burger', '.burger');
    advantagesSlider('.advantages__navigation .navigation_prev .button_black', '.advantages__navigation .navigation_next .button_black', '.advantages__slide', '.advantages__slider', '.advantages__inner');
});



