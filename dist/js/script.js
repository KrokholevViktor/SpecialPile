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

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
// disabledPrev();

function showTitle() {
  titles.forEach(title => title.style.display = 'none');
  titles[slideIndex - 1].style.display = '';
}
next.addEventListener('click', () => {
  if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }
  slidesField.style.transform = `translateX(-${offset}px)`;
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
  hideElements();
  showTitle();
  // disabledPrev();
});

prev.addEventListener('click', () => {
  if (offset == 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2);
  }
  slidesField.style.transform = `translateX(-${offset}px)`;
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
  // disabledPrev();
});

// function disabledPrev() {
//     if ((slideIndex - 1) == 0) {
//         prev.disabled = true;
//     } else {
//         prev.disabled = false;
//     }
// };

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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map