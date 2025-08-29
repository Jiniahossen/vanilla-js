//check i the number is even or odd

// const x=5;
// if(x%2===0){
//     console.log('Number is even')
// }
// else{
//     console.log("Number is odd")
// }

function checkEvenOdd(num){
    if(num%2===0){
        return("Number is even")
    }
    else{
       return("Number is odd")
    }
}

const x=checkEvenOdd(4);
console.log(x)
checkEvenOdd(11);

function validationcheck(num1,num2){
    if( typeof num1 !==  "number" || typeof num2!== "number"){
        return "Please give valid number "
    }
    return num1+num2;
}
const result=validationcheck(2,5)
console.log(result)