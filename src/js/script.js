import formSlider from "./modules/form-slider";
import examplesSlider from "./modules/examples-slider";
import reviewsSlider from "./modules/reviews";

window.addEventListener('DOMContentLoaded', function () {
    formSlider('.form-slider__navigation_prev', '.form-slider__navigation_next', '.form-slider__item', '.form-slider__wrapper', '.form-slider__inner');
    examplesSlider('.examples__navigation .navigation_prev .button_black', '.examples__navigation .navigation_next .button_black', '.examples__slide', '.examples__wrapper', '.examples__inner' );
    reviewsSlider('.reviews__navigation .navigation_prev .button_black', '.reviews__navigation .navigation_next .button_black', '.reviews__slide', '.reviews__wrapper', '.reviews__inner') // init slider for reviews
});