/// slider

const slides = document.querySelectorAll('.form-slider__item'),
      prev = document.querySelector('#prev'),
      next = document.querySelector('.form-slider__navigation_next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      counter = document.querySelector('.form-slider__counter'),
      slidesWrapper = document.querySelector('.form-slider__wrapper'),
      slidesField = document.querySelector('.form-slider__inner'),
      width = window.getComputedStyle(slidesWrapper).width,
      titles = document.querySelectorAll('.form-slider__title'),
      buttonForm = document.querySelector('.form-slider__navigation_btn-form');

let slideIndex = 1;
let offset = 0;

if (slides.length < 10) {
    total.textContent = `0${slides.length - 1}`;
    current.textContent = `0${slideIndex}`;
} else {
    total.textContent = slides.length - 1;
    current.textContent = slideIndex;
}


slidesField.style.width = 100 * slides.length + '%';
slides.forEach(slide => {
    slide.style.width = width;
});
hideElements();
showTitle();
disabledPrev();


function showTitle() {
    titles.forEach(title => title.style.display = 'none')
    titles[slideIndex - 1].style.display = '';
}


next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2)
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

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
    hideElements();
    showTitle();
    disabledPrev();
});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1)
    } else {
        offset -= +width.slice(0, width.length - 2)
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

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
    hideElements();
    showTitle();
    disabledPrev();
});

function disabledPrev() {
    if ((slideIndex - 1) == 0) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }
};

function hideElements() {
    if (slideIndex == slides.length) {
        counter.style.visibility = 'hidden';
        next.style.display = 'none';
        buttonForm.style.display = '';
    } else {
        counter.style.visibility = '';
        next.style.display = '';
        buttonForm.style.display = 'none';
    }
};




// showSlides(slideIndex);

// if (slides.length < 10) {
//     total.textContent = `0${slides.length - 1}`;
// } else {
//     total.textContent = slides.length - 1;
// }



// function showSlides(n) {
//     if (n > slides.length) {
//         slideIndex = 1;
//     }

//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     slides.forEach(item => item.style.display = 'none');
//     slides[slideIndex - 1].style.display = '';

//     if (slideIndex < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }

//     if (slideIndex == slides.length) {
//         counter.style.visibility = 'hidden'
//     } else {
//         counter.style.visibility = ''
//     }
// }

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// prev.addEventListener('click', () => {
//     plusSlides(-1)
// });

// next.addEventListener('click', () => {
//     plusSlides(1)
// });