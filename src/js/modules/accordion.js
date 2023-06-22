const accordion = (triggersSelector, descrSelector) => {
    const triggers = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(descrSelector);


    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
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
        })
    })

};

export default accordion;