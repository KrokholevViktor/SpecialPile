const burger = (menuSelector, burgerSelector, menuLinks) => {
    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector),
          phone = document.querySelector('.header__info_e_p .header__info_phone '),
          links = document.querySelectorAll(menuLinks);
    menuElem.style.display = 'none';

    function closeMenu() {
        menuElem.classList.add('fadeOut');
        menuElem.classList.remove('fadeIn');
        setTimeout(() => {
            menuElem.style.display = 'none';
        }, 300);
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            burgerElem.click();
        })
    });


    burgerElem.addEventListener('click', () => {
        burgerElem.classList.toggle('active');

        if (burgerElem.classList.contains('active')) {
            phone.style.visibility = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            phone.style.visibility = 'visible';
            document.body.style.overflow = '';
        }
        
        if (menuElem.style.display == 'none' && window.innerWidth < 993) {
            menuElem.style.display = '';
            menuElem.classList.add('fadeIn');
            menuElem.classList.remove('fadeOut');
            
        } else {
            closeMenu();
        }
    });

    let flagOrientation = false;

    window.addEventListener('orientationchange', () => {
        flagOrientation = true;
    })

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
        if (menuElem.classList.contains('fadeIn') && flagOrientation) {
            flagOrientation = false;
        } else if (menuElem.classList.contains('fadeIn')) {
                burgerElem.click();
                // menuElem.classList.remove('fadeIn')
        }
        
    });


};

export default burger;