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
            const choiceOptionsElement = document.getElementById('choice-options');
            if (this.quizzes && this.quizzes.length > 0) {
                // делаем цикл, чтобы пройтись по каждому пришедшему объекту из бэкэнда
                this.quizzes.forEach(quiz => {
                    const that = this;
                    const choiceOptionElement = document.createElement('div');
                    choiceOptionElement.className = 'choice-option';
                    choiceOptionElement.setAttribute('data-id', quiz.id);
                    choiceOptionElement.onclick = function () {
                        that.chooseQuiz(this)
                    }

                    const choiceOptionTextElement = document.createElement('div');
                    choiceOptionTextElement.className = 'choice-option-text';
                    choiceOptionTextElement.innerText = quiz.name;

                    const choiceOptionArrowElement = document.createElement('div');
                    choiceOptionArrowElement.className = 'choice-option-arrow';

                    const choiceOptionImageElement = document.createElement('img');
                    choiceOptionImageElement.setAttribute('src', 'images/symbole-fleche-droite-violet.png');
                    choiceOptionImageElement.setAttribute('alt', 'arrow');

                    choiceOptionArrowElement.appendChild(choiceOptionImageElement);
                    choiceOptionElement.appendChild(choiceOptionTextElement);
                    choiceOptionElement.appendChild(choiceOptionArrowElement);

                    choiceOptionsElement.appendChild(choiceOptionElement);
                })
            }
            console.log(this.quizzes);

        },

        chooseQuiz(element) {
            const dataId = element.getAttribute('data-id');
            if (dataId) {
                location.href = 'test.html' + location.search + '&id' + dataId;
            }
        }

    }

    choice.init();
})();