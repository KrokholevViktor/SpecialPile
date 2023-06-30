/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordion = (triggersSelector, descrSelector) => {
  const triggers = document.querySelectorAll(triggersSelector),
    blocks = document.querySelectorAll(descrSelector);
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      if (!this.classList.contains('questions__accordion__item_active')) {
        this.classList.add('questions__accordion__item_active');
        this.lastElementChild.classList.remove('fadeOut');
        this.lastElementChild.classList.add('fadeIn');
        console.log(this.lastElementChild);
      } else {
        this.lastElementChild.classList.remove('fadeIn');
        this.lastElementChild.classList.add('fadeOut');
        setTimeout(() => {
          this.classList.remove('questions__accordion__item_active');
        }, 250);
        console.log(this.lastElementChild);
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
    burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    burgerElem.classList.toggle('active');
    if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = '';
      menuElem.classList.add('fadeIn');
      menuElem.classList.remove('fadeOut');
    } else {
      menuElem.classList.add('fadeOut');
      menuElem.classList.remove('fadeIn');
      setTimeout(() => {
        menuElem.style.display = 'none';
      }, 300);
    }
  });
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/changeFormSliderSate.js":
/*!************************************************!*\
  !*** ./src/js/modules/changeFormSliderSate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const changeFormSliderSate = state => {
  const buldingType = document.querySelectorAll('.item-1 .form-slider__item__card'),
    floorsNumber = document.querySelectorAll('.item-2 .form-slider__item__card'),
    material = document.querySelectorAll('.item-3 .form-slider__item__card'),
    soiltype = document.querySelectorAll('.item-4 .form-slider__item__card'),
    planSelect = document.querySelectorAll('.item-5 .form-slider__item__card-form_select');
  function bindActionToElems(elem, prop) {
    elem.forEach(item => {
      item.addEventListener('click', () => {
        if (item.firstElementChild === null) {
          state[prop] = item.textContent.replace(/\s+/g, ' ');
        } else {
          state[prop] = item.firstElementChild.textContent.replace(/\s+/g, ' ');
        }
      });
    });
  }
  ;
  bindActionToElems(buldingType, 'buldingType');
  bindActionToElems(floorsNumber, 'floorsNumber');
  bindActionToElems(material, 'material');
  bindActionToElems(soiltype, 'soiltype');
  bindActionToElems(planSelect, 'planSelect');
}; // при клике по картчоке в слайдере добавляет свойство prop в объект state с текстом заголовка картоки

/* harmony default export */ __webpack_exports__["default"] = (changeFormSliderSate);

/***/ }),

/***/ "./src/js/modules/examples-slider.js":
/*!*******************************************!*\
  !*** ./src/js/modules/examples-slider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function examplesSlider(prevBtn, nextBtn, slidesItems, sliderWrapper, sliderInner) {
  const slides = document.querySelectorAll(slidesItems),
    prev = document.querySelector(prevBtn),
    next = document.querySelector(nextBtn),
    slidesWrapper = document.querySelector(sliderWrapper),
    slidesInner = document.querySelector(sliderInner),
    width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1;
  let offset = 0;
  slidesInner.style.width = 100 * slides.length + '%';
  slides.forEach(slide => {
    slide.style.width = width; // ширина слайда
  });

  disabledNext();
  disabledPrev();
  next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
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
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
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
  }
  ;
  function disabledNext() {
    if (slideIndex == slides.length) {
      next.disabled = true;
    } else {
      next.disabled = false;
    }
  }
  ;
}
;
/* harmony default export */ __webpack_exports__["default"] = (examplesSlider);

/***/ }),

/***/ "./src/js/modules/form-slider.js":
/*!***************************************!*\
  !*** ./src/js/modules/form-slider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/// slider

function formSlider(prevBtn, nextBtn, slidesItems, sliderWrapper, sliderInner) {
  const slides = document.querySelectorAll(slidesItems),
    prev = document.querySelector(prevBtn),
    next = document.querySelector(nextBtn),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    counter = document.querySelector('.form-slider__counter'),
    slidesWrapper = document.querySelector(sliderWrapper),
    slidesInner = document.querySelector(sliderInner),
    width = window.getComputedStyle(slidesWrapper).width,
    titles = document.querySelectorAll('.form-slider__title'),
    buttonForm = document.querySelector('.form-slider__navigation_btn-form');
  let slideIndex = 1;
  let offset = 0;
  let slideCounter = 0;
  if (slides.length < 10) {
    total.textContent = `0${slides.length - 1}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length - 1;
    current.textContent = slideIndex;
  }
  ;
  slidesInner.style.width = 100 * slides.length + '%';
  slides.forEach(slide => {
    slide.style.width = width;
  });
  hideElements();
  showTitle();
  hidePrev();
  setTimeout(() => {
    next.click();
    prev.click();
  }, 10);
  function showTitle() {
    titles.forEach(title => title.style.display = 'none');
    titles[slideIndex - 1].style.display = '';
  }
  ;
  next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
    next.disabled = true;
    hideElements();
    showTitle();
    hidePrev();
    slideCounter++;
    checkSelecteditems(slideCounter);
  });
  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
    hideElements();
    showTitle();
    hidePrev();
    slideCounter--;
    checkSelecteditems(slideCounter);
  });
  function hidePrev() {
    if (slideIndex - 1 == 0) {
      prev.style.visibility = 'hidden';
    } else {
      prev.style.visibility = '';
    }
  }
  ;
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
  }
  ;
  const slideSelect = () => {
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
            element.children[1].previousElementSibling.style.cssText = "border-bottom: 1px solid $black-color;";
          } else {
            images.forEach(element => {
              element.children[1].previousElementSibling.style.cssText = "border-bottom: 1px solid $black-color;";
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
  slideSelect();

  // проверяет карточки в слайдере на наличие класса и включает или оключает кнопку next 
  function checkSelecteditems(i) {
    let slidesItems = slides[i].querySelectorAll('.form-slider__img');
    let askitems = slides[i].querySelectorAll('.form-slider__item__card-form_select');
    function chek(typeSlide) {
      for (i = 0; i < typeSlide.length; i++) {
        try {
          if (!typeSlide[i].children[1].classList.contains('img-selected')) {
            next.disabled = true;
          } else {
            next.disabled = false;
            return;
          }
        } catch (error) {
          if (!typeSlide[i].classList.contains('ask-selected')) {
            next.disabled = true;
          } else {
            next.disabled = false;
            return;
          }
        }
      }
      ;
    }
    ;
    chek(slidesItems);
    chek(askitems);
  }
  ;
}
/* harmony default export */ __webpack_exports__["default"] = (formSlider);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = state => {
  const formWrapper = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    phoneInputs = document.querySelectorAll('input[name="phone"]'),
    upload = document.querySelectorAll('[name="file"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/, '');
    });
  });
  const message = {
    loading: 'Загрузка...',
    success: 'Заявка успешно отправленна!',
    failure: 'Что-то пошло не так...'
  };
  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };
  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Прикрепить файл';
    });
  };
  upload.forEach(item => {
    item.addEventListener('input', () => {
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 15 ? dots = "..." : dots = '.';
      const name = arr[0].substring(0, 15) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  formWrapper.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);
      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      postData('server.php', formData).then(res => {
        console.log(res);
        statusMessage.textContent = message.success;
      }).catch(() => {
        statusMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
        }, 50000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  function bindModal(triggersSelector, modalSelctor, closeSelector) {
    const triggers = document.querySelectorAll(triggersSelector),
      modal = document.querySelector(modalSelctor),
      close = document.querySelector(closeSelector);
    triggers.forEach(trigger => {
      trigger.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        close.addEventListener('click', () => {
          modal.style.display = "none";
          document.body.style.overflow = "";
        });
        modal.addEventListener('click', e => {
          if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "";
          }
        });
      });
    });
  }
  bindModal('.modal-btn', '.modal', '.modal__close');
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/reviews-slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/reviews-slider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function reviewsSlider(prevBtn, nextBtn, slidesItems, sliderWrapper, sliderInner) {
  const slides = document.querySelectorAll(slidesItems),
    prev = document.querySelector(prevBtn),
    next = document.querySelector(nextBtn),
    slidesWrapper = document.querySelector(sliderWrapper),
    slidesInner = document.querySelector(sliderInner);
  slidesInner.style.width = 100 * slides.length + '%';
  const width = window.getComputedStyle(document.querySelector('.reviews__slide')).width;
  let slideIndex = 1;
  let offset = 0;
  disabledNext();
  disabledPrev();
  next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
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
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
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
  }
  ;
  function disabledNext() {
    if (slideIndex == slides.length) {
      next.disabled = true;
    } else {
      next.disabled = false;
    }
  }
  ;
}
;
/* harmony default export */ __webpack_exports__["default"] = (reviewsSlider);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_form_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form-slider */ "./src/js/modules/form-slider.js");
/* harmony import */ var _modules_examples_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/examples-slider */ "./src/js/modules/examples-slider.js");
/* harmony import */ var _modules_reviews_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/reviews-slider */ "./src/js/modules/reviews-slider.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_changeFormSliderSate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/changeFormSliderSate */ "./src/js/modules/changeFormSliderSate.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");









window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  let formSliderState = {};
  Object(_modules_form_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.form-slider__navigation_prev .button_black', '.form-slider__navigation_next .button_black', '.form-slider__item', '.form-slider__wrapper', '.form-slider__inner');
  Object(_modules_changeFormSliderSate__WEBPACK_IMPORTED_MODULE_6__["default"])(formSliderState);
  Object(_modules_examples_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.examples__navigation .navigation_prev .button_black', '.examples__navigation .navigation_next .button_black', '.examples__slide', '.examples__wrapper', '.examples__inner');
  Object(_modules_reviews_slider__WEBPACK_IMPORTED_MODULE_2__["default"])('.reviews__navigation .navigation_prev .button_black', '.reviews__navigation .navigation_next .button_black', '.reviews__slide', '.reviews__wrapper', '.reviews__inner'); // init slider for reviews
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_3__["default"])('.questions__accordion__item', '.questions__accordion__descr');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])(formSliderState);
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_7__["default"])('[name="phone"]');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_8__["default"])('.header__menu_burger', '.burger');
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map