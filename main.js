const inputOne = document.getElementById("inpurOne"); //
const inputTwo = document.getElementById("inpurTwo");

const plusInput = document.getElementById("plus");
const minusInput = document.getElementById("minus");
const dubeleInput = document.getElementById("dubele");
const hilokInput = document.getElementById("hilok");

const Numbers = document.getElementsByClassName("numbers"); //

const inputButton = document.getElementById("button");

// הדפסה של הפעולות
const answerOfMachvon = document.getElementById("answerOfMachvon");

// Fix                          */

//*define empty variable* */

let firstNumber = null;
let operator = null;
let secondNumber = null;
let point = false;

function addOperator(currentOperator) {
  if (secondNumber != null) {
    firstNumber = calculate();
    secondNumber = null;
  } else {
    if (operator != null) {
      console.log("ERROR");
    }
  }
  operator = currentOperator;
  // console.log(operator);
}

function calculatePrint() {
  if (firstNumber == null || secondNumber == null || operator == null) {
    console.log("ERROR");
    return;
  }
  console.log(calculate());
  firstNumber = calculate();
  operator = null;
  secondNumber = null;
}

function calculate() {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
      break;
    case "-":
      return firstNumber - secondNumber;
      break;
    case "*":
      return firstNumber * secondNumber;
      break;

    case "/":
      return firstNumber / secondNumber;
      break;

    default:
      break;
  }
}

function deleteNum() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  console.log(" ");
}

/*חישוב* */

function firstNumberValue(Num) {
  if (operator == null) {
    if (firstNumber == null) {
      firstNumber = parseInt(Num);
    } else {
      if (point == false) {
        firstNumber = firstNumber * 10 + parseInt(Num);
      } else {
        firstNumber += 
      }
    }
  } else {
    if (secondNumber == null) {
      secondNumber = parseInt(Num);
    } else {
      secondNumber = secondNumber * 10 + parseInt(Num);
    }
  }
}
let counter = 1;

function dotCalculate() {
  point = true;
}
