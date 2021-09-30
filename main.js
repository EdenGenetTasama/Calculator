const inputOne = document.getElementById("inpurOne"); //
const inputTwo = document.getElementById("inpurTwo");

const plusInput = document.getElementById("plus");
const minusInput = document.getElementById("minus");
const dubeleInput = document.getElementById("dubele");
const hilokInput = document.getElementById("hilok");

const Numbers = document.getElementsByClassName("numbers"); //

// ההדפסה של המספרים
// for (let i = 0; i < Numbers.length; i++) {
//   Numbers[i].addEventListener("click", function () {
//     inputOne.value += Numbers[i].innerText;
//   });
// }

// for (let i = 0; i < Numbers.length; i++) {
//   Numbers[i].oninput = function () {
//     inputTwo.value += Numbers[i].innerText;
//   };

const inputButton = document.getElementById("button");

// כפתורי פעולות חשבון

// plusInput.addEventListener("click", function(){
//     let sum= Number(inputOne.value) + Number(inputTwo.value);
//     console.log(sum);
// })

// minusInput.addEventListener("click",function(){
//     let sum= Number(inputOne.value)-Number(inputTwo.value);
//     console.log(sum);
// })

// dubeleInput.addEventListener("click",function(){
//     let sum=Number(inputOne.value)*Number(inputTwo.value);
//     console.log(sum);
// })

// hilokInput.addEventListener("click",function(){
//     let sum=Number(inputOne.value)/Number(inputTwo.value);
//     console.log(sum);
// })

// let firstNum = 0;
//   function saveFirstNum(params) {
//     //
//   }

// הדפסה של הפעולות
const answerOfMachvon = document.getElementById("answerOfMachvon");

// plusInput.onclick = function () {
//   let sum = Number(inputOne.value) + Number(inputTwo.value);
//   answerOfMachvon.innerHTML = "הפיתרון הוא: " + sum;
// };

// minusInput.onclick = function () {
//   let sum = Number(inputOne.value) - Number(inputTwo.value);
//   answerOfMachvon.innerHTML = "הפיתרון הוא: " + sum;
// };

// dubeleInput.onclick = function () {
//   let sum = Number(inputOne.value) * Number(inputTwo.value);
//   answerOfMachvon.innerHTML = "הפיתרון הוא: " + sum;
// };

// hilokInput.onclick = function () {
//   let sum = Number(inputOne.value) / Number(inputTwo.value);
//   answerOfMachvon.innerHTML = "הפיתרון הוא: " + sum;
// };

/*                     Fix                          */

function firstNumberValue(numberOne ,numberTwo ) {
  let numberOneClick = 0;

  switch (numberOne) {
    case "1":
      switch (numberTwo) {
        case "+":
          numberOneClick += numberOne+numberTwo
          console.log(numberOneClick);
          break;
      
        default:
          break;
      }
      // numberOneClick += 1;
      // console.log(numberOneClick);
    
      break;
    case "2":
      numberOneClick += 2;
      console.log(numberOneClick);
      break;
    case "3":
      numberOneClick += 3;
      console.log(numberOneClick);
      break;
    case "4":
      numberOneClick += 4;
      console.log(numberOneClick);
      break;
    case "5":
      numberOneClick += 5;
      console.log(numberOneClick);
      break;
    case "6":
      numberOneClick += 6;
      console.log(numberOneClick);
      break;
    case "7":
      numberOneClick += 7;
      console.log(numberOneClick);
      break;
    case "8":
      numberOneClick += 8;
      console.log(numberOneClick);
      break;
    case "9":
      numberOneClick += 9;
      console.log(numberOneClick);
      break;
    case "0":
      numberOneClick += 0;
      console.log(numberOneClick);
      break;
    default:
      break;
  }
  return numberOneClick;
}

// function secondNumberValue(number) {

//   let numberTwoClick = 0;
//   switch (number) {
//     case "1":
//       numberTwoClick += 1;
//       console.log(numberTwoClick);
//       break;
//     case "2":
//       numberTwoClick += 2;
//       console.log(numberTwoClick);
//       break;
//     case "3":
//       numberTwoClick += 3;
//       console.log(numberTwoClick);
//       break;
//     case "4":
//       numberTwoClick += 4;
//       console.log(numberTwoClick);
//       break;
//     case "5":
//       numberTwoClick += 5;
//       console.log(numberTwoClick);
//       break;
//     case "6":
//       numberTwoClick += 6;
//       console.log(numberTwoClick);
//       break;
//     case "7":
//       numberTwoClick += 7;
//       console.log(numberTwoClick);
//       break;
//     case "8":
//       numberTwoClick += 8;
//       console.log(numberTwoClick);
//       break;
//     case "9":
//       numberTwoClick += 9;
//       console.log(numberTwoClick);
//       break;
//     case "0":
//       numberTwoClick += 0;
//       console.log(numberTwoClick);
//       break;
//     default:
//       break;
//   }
//   return numberTwoClick
// }



let mathSing = document.getElementsByClassName("mathSing")


// for (let i = 0; i < mathSing.length; i++) {
// console.log(`${mathSing[i].value}`);
// let sum = numberOneClick 
// switch (mathSing[i].value) {
//   case "+":
//     console.log("2");
//     break;
//     case "-":
//     console.log("-");
//     break
//     case "*":
//     console.log("*");
//     break
//     case "/":
//     console.log("/");
//     break

//   default:
//     break;
// }
  
// }
// function mathSing(numberOneClick, numberTwoClick) {
//   let sum = 1;
//   switch (numberOneClick, numberTwoClick) {
//     case "*":
//         let sum = Number(numberOneClick.value) * Number(numberTwoClick.value);
//         //   answerOfMachvon.innerHTML = "הפיתרון הוא: " + sum;
//         console.log(sum);
//       break;

//     default:
//       break;
//   }
// }
