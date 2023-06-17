const slideSelect = () => {
        const slides = document.querySelectorAll('.form-slider__item'),
              next = document.querySelector('.form-slider__navigation_next .button_black');
            //   prev = document.querySelector('.form-slider__navigation_prev .button_black');
              next.disabled = true;

              

    slides.forEach(slide => {
        const images = slide.querySelectorAll('.form-slider__img'),
            cardAskSelects = slide.querySelectorAll('.form-slider__item__card-form_select');
            
        images.forEach(element => {

            element.addEventListener('click', () => {
                images.forEach(element => {
                    element.children[1].classList.remove('img-selected');
                });
                element.children[1].classList.add('img-selected');
                next.disabled = false;
                if (!element.children[1].classList.contains('img-selected')) {
                    element.children[1].previousElementSibling.style.cssText = "border-bottom: 1px solid $black-color;"
                } else {
                    images.forEach(element => {
                        element.children[1].previousElementSibling.style.cssText = "border-bottom: 1px solid $black-color;"
                    });
                    element.children[1].previousElementSibling.style.cssText = "background-color: transparent; border-bottom: none; color: white; text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;";
                }
            });
        });

        cardAskSelects.forEach(select => {
            select.addEventListener('click', () => {
                next.disabled = false;
                cardAskSelects.forEach(select => {
                    select.classList.remove('ask-selected');
                });
                select.classList.add('ask-selected');

                
            });
        });
    });
};


export default slideSelect;