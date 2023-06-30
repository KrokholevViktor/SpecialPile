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
    })
};

export default burger;