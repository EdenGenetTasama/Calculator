
const inputOne = document.getElementById("inpurOne");//
const inputTwo = document.getElementById("inpurTwo");

const plusInput=document.getElementById("plus");
const minusInput= document.getElementById("minus");
const dubeleInput=document.getElementById("dubele");
const hilokInput=document.getElementById("hilok");

const Numbers=document.getElementsByClassName("numbers");//

// ההדפסה של המספרים
for (let i=0;i<Numbers.length;i++){
    Numbers[i].addEventListener("click", function(){
        inputOne.value += Numbers[i].innerText  ;
    })
}




const inputButton = document.getElementById("button");


// כפתורי פעולות חשבון

plusInput.addEventListener("click", function(){
    let sum= Number(inputOne.value) + Number(inputTwo.value);
    console.log(sum);
})


minusInput.addEventListener("click",function(){
    let sum= Number(inputOne.value)-Number(inputTwo.value);
    console.log(sum);
})

dubeleInput.addEventListener("click",function(){
    let sum=Number(inputOne.value)*Number(inputTwo.value);
    console.log(sum);
})

hilokInput.addEventListener("click",function(){
    let sum=Number(inputOne.value)/Number(inputTwo.value);
    console.log(sum);
})




