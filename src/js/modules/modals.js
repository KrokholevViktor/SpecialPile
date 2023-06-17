const modals = () => {
    function bindModal(triggersSelector, modalSelctor, closeSelector) {
        const triggers = document.querySelectorAll(triggersSelector),
              modal = document.querySelector(modalSelctor),
              close = document.querySelector(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
    
                close.addEventListener('click', () => {
                    modal.style.display = "none";
                    document.body.style.overflow = "";
                });

                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.style.display = "none";
                    document.body.style.overflow = "";
                    }
                })
            });
        })
    }

    bindModal('.modal-btn', '.modal', '.modal__close');
};

export default modals;