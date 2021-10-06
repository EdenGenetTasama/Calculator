// Fix                          */

// *define empty variable* */

let firstNumber = null;
let operator = null;
let secondNumber = null;
let point = 0;
let counter = 1;



function addOperator(currentOperator) {
  point = 0;
  counter = 1;
  if (secondNumber != null) {
    firstNumber = calculate();
    secondNumber = null;
  } else {
    if (operator != null) {
    }
  }
  operator = currentOperator;
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
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
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

function NumberValue(Num) {
  if (operator == null) {
    if (firstNumber == null) {
      firstNumber = parseInt(Num);
    } else {
      if (point === 0) {
        firstNumber = firstNumber * 10 + parseInt(Num);

      } else {
        firstNumber = firstNumber + (parseInt(Num) / (10 ** counter));
        counter++;
        
      }
      console.log(`First number: ${firstNumber}`);
    }
  } else {
    if (secondNumber === null) {
      secondNumber = parseInt(Num);
      
    } else {
      if (point === 0) {
        secondNumber = secondNumber * 10 + parseInt(Num);
      } else {
        secondNumber = secondNumber + (parseInt(Num) / (10 ** counter));
        counter++;
      }
      console.log(`Second number: ${secondNumber}`);
    }
  }
}

function dotCalculate() {
  point = 1;
}


