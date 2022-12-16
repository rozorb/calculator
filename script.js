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

console.log(operate('divide', 5, 8));