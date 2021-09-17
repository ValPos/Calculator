var numberButtons = document.getElementsByClassName('numberButton');
var operationButtons = document.getElementsByClassName('operationButton');
var equalButton = document.getElementById('equalButton');
var firstNumber;
var operation;

function onNumberButtonClick(eventObject) {
  let number = eventObject.currentTarget.innerHTML;
  let input1 = document.getElementById('number1');
  input1.value = number + input1.value;
}
function onOperationButtonClick(eventObject) {
  let input = document.getElementById('number1');
  firstNumber = Number(input.value);
  let butOperation = eventObject.currentTarget;
  operation = butOperation.innerHTML;
  input.value = 0;
}
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', onNumberButtonClick);
}
for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener('click', onOperationButtonClick);
}
equalButton.addEventListener('click', finalOperation);
function finalOperation() {
  let secondNumber = Number(document.getElementById('number1').value);
  let input1 = document.getElementById('number1');
  if (operation === '+') {
    input1.value = firstNumber + secondNumber;
  } else if (operation === '-') {
    input1.value = firstNumber - secondNumber;
  } else if (operation === '*') {
    input1.value = firstNumber * secondNumber;
  } else if (operation === '/') {
    input1.value = firstNumber / secondNumber;
  } else {
    window.alert('wrong operation');
  }
}
