let chosenOperator = '';
let previousDisplay = '';
let currentDisplay = '';

let clear = document.querySelector('#clear');
let equal = document.querySelector('#equal');
let decimal = document.querySelector('#decimal');

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

let prev = document.querySelector('#prev');
let curr = document.querySelector('#curr');

numbers.forEach(number => number.addEventListener('click', function(e) {
    getNumber(e.target.textContent);
    curr.textContent = currentDisplay;
}));

operators.forEach(operator => operator.addEventListener('click', function(e) {
    console.log(e.target.textContent);
}));

clear.addEventListener("click", function (){
    currentDisplay = '';
    previousDisplay = '';
    operate = '';
    curr.textContent = currentDisplay;
    prev.textContent = previousDisplay;
});

function getNumber (num) {
    if (currentDisplay.length <= 5) {
        currentDisplay += num;
    }  
}









function add(a,b) {
    console.log('inside add function '+ a + ' ' + b );
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    if(operator === 'add'){
        console.log('inside add condition '+ a + ' ' + b );
        return add(a,b);
    } else if(operator === 'subtract'){
        return subtract(a,b);
    } else if(operator === 'multiply'){
        return multiply(a,b);
    } else if(operator === 'divide'){
        return divide (a,b);
    }
}
