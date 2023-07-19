// const fixedHeader = () => {
//     const promo = document.querySelector('.promo'),
//           header = document.querySelector('.header');
//     let counter = 0;

//     function fixed() {
//         window.addEventListener('scroll', () => {
//             let promoCenter = promo.offsetHeight / 2,
//                 scrollTop = window.scrollY;
    
//             if (scrollTop >= promoCenter) {
//                 header.classList.add('fixed');
//                 promo.style.marginTop = `${header.offsetHeight}px`;
//             }  else {
//                 header.classList.remove('fixed');
//                 promo.style.marginTop = `0px`;
//             } 
//         })
//     }

//     let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
//     window.addEventListener('scroll', function() {
//       const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
//       if (currentScrollPosition < prevScrollPosition) {
//         console.log(counter);
//         counter++;
//         if (counter > 100) {
//             header.classList.remove('fixed');
//             promo.style.marginTop = `0px`;
//         }
//       } else {
//         console.log(counter);
//         fixed();
//         counter = 0;
//       }
      
//       prevScrollPosition = currentScrollPosition;
//     });
// }

// export default fixedHeader;

const fixedHeader = () => {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let isFixed = false;
    let scrollCounter = 0; // Добавляем счетчик прокрутки
    const scrollThreshold = 25; // Значение прокрутки, после которого удаляем класс
    
    function fixHeader() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > prevScrollPosition) {
        // Прямой скролл (scroll down)
        if (!isFixed) {
          header.classList.add('fixed');
          body.style.marginTop = `${header.offsetHeight}px`;
          isFixed = true;
        }
      } else {
        // Обратный скролл (scroll up)
        if (isFixed) {
        //   header.classList.remove('fixed');
        //   body.style.marginTop = `0px`;
          isFixed = false;
        }
      }
      
      // Увеличиваем счетчик прокрутки при скролле обратно
      if (!isFixed) {
        scrollCounter++;
      } else {
        scrollCounter = 0;
      }
      
      // Удаляем класс, если счетчик достигнет определенного значения
      if (scrollCounter >= scrollThreshold) {
        header.classList.remove('fixed');
        body.style.marginTop = `0px`;
        isFixed = false;
        scrollCounter = 0; // Сбрасываем счетчик
      }
      
      prevScrollPosition = scrollTop;
    }
  
    // Добавляем слушатель события прокрутки
    window.addEventListener('scroll', fixHeader);
};

export default fixedHeader;