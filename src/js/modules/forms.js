const forms = (state) => {
    const formWrapper = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="phone"]');

    phoneInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '')
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
        })
    }

    formWrapper.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if (item.getAttribute('data-calc')  === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

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
                    }, 50000);
                });
        });
    });
};

export default forms;