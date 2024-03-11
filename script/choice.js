(function () {
    const choice = {
        quizzes: [],
        init() {
            // код, который проверяет, что у нас существуют данные из прошлой страницы (заполнена форма)
            checkUserData();

            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://testologia.site/get-quizzes', false);
            xhr.send();

            if (xhr.status === 200 && xhr.responseText) {
                try {
                    this.quizzes = JSON.parse(xhr.responseText);

                } catch (e) {
                    location.href = 'index.html';
                }
                this.processQuizzes();
            } else {
                location.href = 'index.html';
            }
        },
        processQuizzes() {

            if (this.quizzes && this.quizzes.length > 0) {
                // делаем цикл, чтобы пройтись по каждому пришедшему объекту из бэкэнда
                this.quizzes.forEach(quiz => {
                    const choiceOptionElement = document.createElement('div');
                    choiceOptionElement.className = 'choice-option';

                    const choiceOptionTextElement = document.createElement('div');
                    choiceOptionTextElement.className = 'choice-option-text';

                    const choiceOptionArrowElement = document.createElement('div');
                    choiceOptionArrowElement.className = 'choice-option-arrow';

                    const choiceOptionImageElement = document.createElement('div');
                    choiceOptionImageElement.setAttribute('src', 'images/symbole-fleche-droite-violet.png');
                })
            }
            console.log(this.quizzes);

        }
    }

    choice.init();
})();