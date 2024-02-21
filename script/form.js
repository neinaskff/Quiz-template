(function () {
    const Form = {
        // для удобсва создаем отдельные свойства для полей формы, в которых будут находится все нужные данные для наших полей
        fields: [
            {
                name: 'name',
                id: 'name',
                element: null,
            },
            {
                name: 'lastName',
                id: 'last-name',
                element: null,
            },
            {
                name: 'email',
                id: 'email',
                element: null,
            }
        ],
        init() {
            const that = this;
            this.fields.forEach(item => {
                item.element = document.getElementById(item.id);
                item.element.onchange = function () {
                    this.validateField()
                }
            })
        },
        validateField(field, element) {

        }
    }
    Form.init()
})();