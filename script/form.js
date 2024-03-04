(function () {
    const Form = {
        // для удобсва создаем отдельные свойства для полей формы, в которых будут находится все нужные данные для наших полей
        agreeElement: null,
        processElement: null,

        fields: [
            {
                name: 'name',
                id: 'name',
                element: null,
                regex: /^[A-Z][a-z]+\s*$/,
                valid: false,
            },
            {
                name: 'lastName',
                id: 'last-name',
                element: null,
                regex: /^[A-Z][a-z]+\s*$/,
                valid: false,
            },
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false,
            }
        ],
        init() {
            const that = this;
            this.fields.forEach(item => {
                item.element = document.getElementById(item.id);
                item.element.onchange = function () {
                    that.validateField.call(that, item, this)
                }
            });

            this.agreeElement = document.getElementById('agree');
            this.agreeElement.onchange = function () {
                that.validateForm();
            }

            this.processElement = document.getElementById('process');
            this.processElement.onclick = function () {
                that.processForm()
            }

        },
        validateField(field, element) {
            if (!element.value || !element.value.match(field.regex)) {
                element.parentNode.style.borderColor = 'red';
                field.valid = false;
            } else {
                element.parentNode.removeAttribute('style');
                field.valid = true;
            }

            this.validateForm();
        },
        validateForm() {
            const validForm = this.fields.every(item => item.valid);
            const isValid = this.agreeElement.checked && validForm;
            if (isValid) {
                this.processElement.removeAttribute('disabled');
            } else {
                this.processElement.setAttribute('disabled', 'disabled');

            }
            return isValid;
        },

        processForm() {
            if (this.validateForm()) {

                let paramString = '';
                this.forEach(item => {
                    paramString += item.name;
                })

                location.href = 'choice.html?'
            }
        }
    };
    Form.init()
})();

