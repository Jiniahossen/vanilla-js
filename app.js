// function abc(){
//     console.log(abc.xyz)
// }
// abc()
// abc.xyz=400;
// abc.xyz=200;
// abc();

// variable -let,const,var
/*************************************************/
// var a = "Jinia";
// var b = "Akter";
// {
//   var b = "Hira";
//   console.log(b);
// }
// console.log(b);
/***************************** ************************/
// let a="Jinia "
// let b="AKter"
// {
//     let b="Hira"
//     console.log(b)
// }
// console.log(b)

// console.log(parseInt("123abc"))

// let name="jinia akter hira"
// console.log(name.toLocaleLowerCase())
// let name="jinia akter hira"
// let splitName=name.split(" ");
// console.log(splitName)
// console.log(Boolean("0"))
// console.log(typeof null)
// console.log(10==='10')
// let x=0;
// if(x){
//     console.log('hahahahha')
// }
// else{
//     console.log('hihihi')
// }

// let day = 4;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }
// let fruit = "mango";

// switch (fruit) {
//   case "apple":
//   case "mango":
//   case "banana":
//     console.log("This is a fruit");
//     break;
//   case "carrot":
//   case "spinach":
//     console.log("This is a vegetable");
//     break;
//   default:
//     console.log("Unknown item");
// }

// for (let i=0;i<10;i++){
//     console.log('Yahooo loop'+i)
// }

// let i=1;
// while(i<=10){
//     console.log('count'+i)
//     i++

// let i=11;
// do{
//     console.log('count'+i);
//     i++
// }
// while(i<=9)

//  for (let i=0;i<10;i++){
//     if(i===4){
//         console.log('Yahooo loop'+i)
//         continue
//     }
//     console.log(i)
// }

// function person(age, name){
//     this.age=age;
//     this.name=name;
// }

// const persone1= new person(23,'Jinia');
// console.log(persone1)

// const person = {
//   name: "Jinia",
//   age: 23,
//   greet: function () {
//     console.log("Hi , I'm greeting");
//   },
// };

// let age = person.age;
// person["name"]='Jinia AKter Hira'
// person.age=22;
// person.greet();
// console.log(age); // output:23
// console.log(person) // output : the new age value with the others , but why ?

// const person={
//     name:"Jinia",
//     age:23,
//     hobby:'Dancing'
// }

// const newPerson={...person,religion:"Islam"}
// const {name, age,hobby}=person;
// console.log(name)