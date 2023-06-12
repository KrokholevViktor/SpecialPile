const form = () => {
    const formWrapper = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: 'Заявка успешно отправленна! Спасибо! Cкоро мы с вами свяжемся!',
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
        })
    }

    formWrapper.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            
            console.log(item);

            const formData = new FormData(item);

            postData('server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default form;