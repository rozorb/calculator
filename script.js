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
    getOperator(e.target.textContent);
    prev.textContent = previousDisplay + '' + chosenOperator;
    curr.textContent = currentDisplay;
}));

equal.addEventListener('click', function() {
    if(previousDisplay != '' && currentDisplay != '') {
        solve()
        prev.textContent = '';
            if(previousDisplay.length <= 5){
                curr.textContent = previousDisplay;
            } else{
                curr.textContent = previousDisplay.slice(0,5) + "...";
            }
    }
    
});

decimal.addEventListener("click", function (){
    prev.textContent = currentDisplay;
    currentDisplay += '.';
    curr.textContent = currentDisplay;

})
clear.addEventListener("click", function (){
    currentDisplay = '';
    previousDisplay = '';
    operate = '';
    curr.textContent = currentDisplay;
    prev.textContent = previousDisplay;
});

function solve() {
    previousDisplay = Number(previousDisplay);
    currentDisplay = Number(currentDisplay);

    if(chosenOperator === "+"){
        previousDisplay += currentDisplay;
    } else if(chosenOperator === "-"){
        previousDisplay -= currentDisplay;
    } else if(chosenOperator === "*"){
        previousDisplay *= currentDisplay;
    } else{
        previousDisplay /= currentDisplay;
    }

    previousDisplay = roundNumber(previousDisplay);
    previousDisplay = previousDisplay.toString();
    currentDisplay = previousDisplay.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function getOperator(op) {
    chosenOperator = op;
    previousDisplay = currentDisplay;
    currentDisplay = '';
}
function getNumber (num) {
    if (currentDisplay.length <= 5) {
        currentDisplay += num;
    }  
}


