//check i the number is even or odd

const x=5;
if(x%2===0){
    console.log('Number is even')
}
else{
    console.log("Number is odd")
}

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Number is even";
  } else {
    return "Number is odd";
  }
}

const y = checkEvenOdd(4);
console.log(y);
checkEvenOdd(11);

function validationcheck(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please give valid number ";
  }
  return num1 + num2;
}
const result = validationcheck(2, 5);
console.log(result);

function anaToVori(ana) {
  if (typeof ana !== "number" || ana === " " || ana>0) {
    return("Please give valid number");
  } else {
    return ana / 16;
  }
}

console.log("total vori:", anaToVori());

function PandaCost(singara, shomucha, jilapi) {
  if (
    typeof singara !== "number" ||
    typeof shomucha !== "number" ||
    typeof jilapi !== "number" ||
    singara < 0 ||
    shomucha < 0 ||
    jilapi < 0 ||
    singara === " " ||
    shomucha === " " ||
    jilapi === " "
  ) {
    return " Please give an valid number";
  } else {
    let total = singara * 7 + shomucha * 10 + jilapi * 15;
    return total;
  }
}
const z = PandaCost(2, 5, 3);
console.log(z);
