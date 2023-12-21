let buttons = document.querySelectorAll('.numbers button')
let foot_btn = document.querySelectorAll('.foot button')
let field = document.getElementById('input-field')
let point = document.getElementById('dot');

let decimal;
let num1;
let operation;

buttons.forEach(function (button) {
    button.addEventListener('click', function (){
        let value = this.innerHTML
        if (decimal) {
            point.classList.remove('blank')
            decimal = false
            field.value += '.' + value;
        }
        else if (value === 'DEL') {
            field.value = field.value.slice(0,-1)
        }
        else if (parseInt(value) || (value === '0' && field.value.length > 0)) {
            field.value += value
        }
        else if (value === '.') {
            point.classList.add('blank');
            decimal = true
        }
        else {
            num1 = field.value;
            operation = value
            field.value = ''
        }
    })
});

foot_btn.forEach(function (f_btn) {
    f_btn.addEventListener('click', function () {
        let value = this.innerHTML;
        if (value === 'Clear') {
            field.value = ''
            num1 = 0;
            operation = null;
        }
        else {
            let task = num1 + operation + field.value;
            ans = eval(task)
            ans = parseFloat(ans).toFixed(2)
            field.value = ans
        }
    })
});
