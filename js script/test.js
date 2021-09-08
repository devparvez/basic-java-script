//--------crud(push,pop etc)---------------------------
//-------push method-----------------
// const animals = ["pigs","goats","cow","sheep"];

// const count = animals.push("Chicken","elephant","tiger");
// console.log(animals);
// console.log(count);

// ----------unshift method ad first elements------

// const animals = ["pigs","goats","cow","sheep"];
// let count = animals.unshift("Cow");
// console.log(animals);
// console.log(count);
// 2nd example for numbers unshift method

// const numbers = [1,2,5];
// let count = numbers.unshift(3,4);
// console.log(numbers);
// console.log(count);

// ------pop method--------

// let plants = ["broccoli","cauliflower","kale","tomato","cabbage"];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// -------shift method---------------
// plants = ["broccoli","cauliflower","kale","tomato","cabbage"];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

//-------- splice method---------
//sol-1
// const months = ["jan","march","april","jun","jul"];
 //const newMonths = months.splice(months.length,0,"Dec");
// console.log(months); 

//sol-2
//console.log(newMonths);
//sol -3 replace march with March 
//const months = ["jan","march","april","jun","jul"];
//let indexOfMonth = months.indexOf("april");
//if(indexOfMonth != -1){
//  console.log(months.splice(indexOfMonth,1,"April"))
 // console.log(months);
//}else{
 // console.log("Please enter valid data");
//}
//const newMonths = months.splice(1,1,"March");
//console.log(months);

// sol4 delete june
// const months = ["jan","march","april","jun","jul"];
// let indexOfMonth = months.indexOf("jun");
// if(indexOfMonth != -1){
//   console.log(months.splice(indexOfMonth,1))
//   console.log(months);
// }else{
//   console.log("Please enter valid data");
// }
// const array1 = [1,4,9,16,25];
// const newArr = array1.map((currval,elem,arr) => {
//   return currval > 9;
// }) 
// console.log(array1);
// console.log(newArr);
// const newArray = array1.map((currElm,index,arr) => {
//   return `current elements ${currElm} and index ${index} and array is ${arr}`;
// })
// console.log(newArray);

// Find the square root of an array?
// let arr = [25,36,49,64,81];
// let newsqrt = arr.map((currElm) => {
//   return Math.sqrt(currElm);
// })
// console.log(newsqrt);

// sol Multiply all elements by 2 and return those are greater than 10;
//  let arr = [2,3,6,8];
//  let newArr = arr.map((curElm) => {
//    return curElm * 2;
// }).filter((curElm) => {
//   return curElm > 10;
//  }).reduce((total,curElm,index,arra) => {
//  return total += curElm;
// })
//  console.log(newArr);

// -------shorter version--------------
// let arr = [2,3,6,8];
// let newArr = arr.map((curElm) => curElm * 2).filter((curElm) =>  curElm > 10)
// console.log(newArr);

//----------reduce method---------------

//  let arr = [2,5,6];

// let newArr = arr.reduce((total,curElm,index,arra) => {
//  return total *= curElm;
// },7)
//  console.log(newArr);

//-------- flat array-------------------
const arr = [['zone_1', 'zone_2'],
             ['zone_3', 'zone_4'],
             ['zone_5', 'zone_6'],
             ['zone_7', 'zone_8'],
             ['zone_9', 'zone_10'],
];

const newArray = arr.reduce((acum,currval) =>{
  return acum.concat(currval);
})
console.log(newArray);