const accordion = (triggersSelector, itemsSelector) => {
    const triggers = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(itemsSelector);

    blocks.forEach(block => {
        block.classList.add('fadeIn');
        block.classList.add('fadeOut');
    });

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            if (!this.classList.contains('questions__accordion__item_active')) {
                this.classList.add('questions__accordion__item_active');
            } else {
                this.classList.remove('questions__accordion__item_active'); // второй вариант
            }
        })
    })
};

export default accordion;