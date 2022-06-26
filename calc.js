const operatorButtons = document.querySelectorAll('[data-operator]')
const numberButtons = document.querySelectorAll('[data-number]')
const prevOperan = document.querySelector('[previous-Operand]')
const currentOperan = document.querySelector('[current-Operand]')
const clear = document.querySelector('[clear]')
const backspace = document.querySelector('[backspace]')
const equals = document.querySelector('[equals]')



numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateCurrentDisplay(button.innerText)
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateprevtDisplay(button.innerText)
    })
});

equals.onclick = calculate


clear.onclick = clearall
backspace.onclick = deletNumberDisplay

function updateCurrentDisplay(number) {
    if (currentOperan.value.includes('.') && number == '.') return
    currentOperan.value = currentOperan.value.toString() + number.toString()
}

function updateprevtDisplay(number) {
    if (currentOperan.value == '.') return
    if (prevOperan.value != '') {
        calculate(prevOperan.value, currentOperan.value)
    }
    currentOperan.value = currentOperan.value.toString() + number.toString()
    prevOperan.value = currentOperan.value
    currentOperan.value = ''
}

function deletNumberDisplay() {
    if (currentOperan.value == '') return
    currentOperan.value = currentOperan.value.slice(0, -1)
}


function calculate() {
    let result
    let prevValue = prevOperan.value.slice(0, -1)
    let currentValue = currentOperan.value
    if (isNaN(currentValue) || isNaN(prevValue)) return
    switch (prevOperan.value[prevOperan.value.length-1]) {
        case '+':
            result = (prevValue-0) + (currentValue - 0)
            break
        case '-':
            result = prevValue - currentValue
            break
        case 'x':
            result = prevValue * currentValue
            break
        case '÷':
            result = prevValue / currentValue
            break
        case '%':
            result = (prevValue/100) * currentValue
            break
            default:
                return
    }

    currentOperan.value = result
    prevOperan.value = ''
}




function clearall() {
    prevOperan.value = ''
    currentOperan.value = ''
}

