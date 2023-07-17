function advantagesSlider (prevBtn, nextBtn, slidesItems, sliderWrapper, sliderInner) {
        const slides = document.querySelectorAll(slidesItems),
        prev = document.querySelector(prevBtn),
        next = document.querySelector(nextBtn),
        slidesWrapper = document.querySelector(sliderWrapper),
        slidesInner = document.querySelector(sliderInner);

        let width = window.getComputedStyle(slidesWrapper).width;
        
        window.addEventListener('resize', () => {
            width = window.getComputedStyle(slidesWrapper).width
        });

    let slideIndex = 1;
    let offset = 0;

    function setSlideWidth() {
        slidesInner.style.width = `calc((100 * ${slides.length}%) + (10 * ${slides.length - 1}px))`;
        slides.forEach(slide => {
            slide.style.width = width;
        });
    }
    setSlideWidth();


    window.addEventListener('resize', () => {
        setSlideWidth();
    });

    disabledNext();
    disabledPrev();

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2) + 10
        }

        slidesInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        disabledNext();
        disabledPrev();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1)
        } else {
            offset -= +width.slice(0, width.length - 2) + 10
        }

        slidesInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        disabledNext();
        disabledPrev();
    });

    function disabledPrev() {
        if (slideIndex == 1) {
            prev.disabled = true;
        } else {
            prev.disabled = false;
        }
    };

    function disabledNext() {
        if (slideIndex == slides.length) {
            next.disabled = true;
        } else {
            next.disabled = false;
        }
    };
};

export default advantagesSlider;