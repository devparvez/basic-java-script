// ------------for of loop for array or iterable things cls 37

// let a = "parvez";

// for(let x of a){
//     console.log(x);
// }

//for in er khetre amra index pai but for of er khetre par value

// ---------While loop--------------
// let i = 0;
// let text = " ";

// while(i<10){
//     text+="the number is "+ i;
//     i++;
// }
// console.log(text);

// // do while loop 

// let j =0;
// let texte = " ";
// do{
//     texte+="the number is "+ j;
//     j++;
// }while(j<10);
// console.log(texte);

// ------------break,and continue statement-----------

// const person1 ={
//     fullName:function(){
//       return  this.FName + this.LName;
//     }
// }
// const person2 ={
//     FName :"parvez",
//     LName : "Mahmud"
// }
// console.log(person1.fullName.call(person2));

// class Car{
//     constructor(name,year) {
//         this.name = name;
//         this.year = year;
//     }
// }
// const car1 = new Car("Toyota",2017);
// console.log(car1);
// const car2 = new Car("BMW",2020);
// console.log(car2);

// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age = age;
//     }
//     play(){
//         console.log(`${this.name} is playing`);
//     }
// }
// const person1 = new person("parvez",1988);
// console.log(person1); 
// person1.play();


// // Modern javascript crash course start---------

// let number = () => 10;
// console.log(number());

// // turnery operator 
// var age = 8;

// var type = (age >= 18)? "adult":(age < 9)? "child": "Young";
// console.log(type);

//-------- prototype with sumith----------------




//  function persons(name,age){

//  //let person = Object.create(persons.prototype);
//  this.name = name;
//  this.age = age;
 

//  //return person;
// }
// persons.prototype = {
//     eat (){
//         console.log(`He is eating`);
//     },
//    sleep (){
//         console.log(`person is sleeping`);
//     },
//     play (){
//         console.log(`person is playing`);
//     }

// };


// //  const sakib = persons("sakib",30);
// //  const tamim = persons("sakib",30);
// //  tamim.play();
// const sakib = new persons("sakib",30);
// sakib.play()


//------------little example--------

// const captain={
//   name :"Mushfiq",
//   age : 36,
//   country :"Bangladesh"
// }

// const player = Object.create(captain);

// console.log(player.age);

 //function test(){};

 //console.log(test.prototype);
 //console.dir(test);

//  class person{
//      constructor(name,age){
//          this.name =name;
//          this.age = age;
//      }
//      eat(){
//         console.log(`He is eating`);
//         }
//      sleep (){
//                  console.log(`person is sleeping`);
//              }
//     play (){
//                  console.log(`person is playing`);
//             }
        
//  }

//  const sakib = new person("sakib",30);
//  sakib.play();

//  //-- array dia prototype---------

//  //let persons = [];
//  let persons = new Array();

//  persons.push("sakib");
//  console.log(persons);
 // -----array find method--------
//  var numbers = [1,2,3,4,5,6,7];
//  const result = numbers.find(function(value){
//      return value > 4;
//  })
//  console.log( result);
// var numbers = [1,2,3,4,5,6];
// var sum = numbers.reduce((prevalue,currentvalue) => {
//     return prevalue+currentvalue;
// },0);
// console.log(sum);
//---------------object -----------
// var myObj ={
//     myname: "parvez",
//     age : 34,
//     joygun : "bongobondo",
// }

// var keys = Object.keys(myObj);
// console.log(keys);
// var values = Object.values(myObj);
// console.log(values);
// var entries = Object.entries(myObj);
// console.log(entries);

//----------- spread operators-------------

// var numbers = [1,3,4];
// var newNumbers = [...numbers,5,6,7];
// console.log(newNumbers);

// -------- immutibale kora array ke----------

// var numbers = [1,2,3];
// var a = numbers;
// console.log(a);
// var b = [...numbers];
// console.log(b);
// numbers.push(6);
// console.log(numbers);

// //concatenante by spreading operator

// var numbers1 = [1,3,4,23];
// var numbers2 = [2,4,2,5,3];
// var numbers3 = [...numbers1,...numbers2];
// console.log(numbers3);

// // spread operator for objects

// var myObj1 = {
//     x:1,
//     y:3
// }
// var myObj2 = {
//     a:2,
//     b:5
// }
// var myObj3 ={
//     ...myObj1,
//     ...myObj2
// }
// console.log(myObj3);

//----- Rest operators-------------
// function myfunc(){
//     console.log(arguments);
// }
// myfunc(23,3,23,23,213,54);

// function func(a,...para){
//     console.log(a);
//     console.log(para);
// }
// func(2,3,4,5,34,3);

//--------De structuring-------------------
//------------ object De structuring--------------------
// const user = {
//     id:339,
//     name: "sakib",
//     age:35,
//     education:{
//         degree:"masters",
//     }
// }
// const {name:title} = user
// console.log(title);
// const {education:{degree:x} = {}} = user
// console.log(x);

// //-----------------Array Destructuring------------
// var numbers = [1,3,[5,6,7,9],8];
//    [, ,[a, , ,b],] = numbers;
// console.log(a,b);

//----------value swap--------------------
// let a =1;
// let b = 2;
// // let temp = a;
// // a = b;
// // b = temp;
// // console.log(a,b);
// //---------value swap----------------
// [b,a]=[a,b]
// console.log(a,b);

// import { pi,a } from "./external.js";
// console.log(pi,a);

//--------- Tagges literal----------------
// function modifier(strings,...values){

//     const m = strings.reduce((prev,current) =>{
//         return prev + current + (values.length? "Mr"+values.shift():"");
//     },"");

//     return m;
//     // console.log(strings);
//     // console.log(values);

// }
// var player1 = "Sakib";
// var player2 = " Tamim";

// console.log(modifier`we have ${player1} and ${player2}`)

//---Set and weak sets---------------------
function log(anything){
    return console.log(anything);
}

// let myArray = [];
// let myArray = new Array();
// let myset = new Set();
// myset.add(5).add(6).add("America").add(7);
// log(myset);
// log(myset.size);

// // myset.add("Bangladesh");
// // log(myset.has("Bangladesh"));

// // //myset.delete("Bangladesh");

// // ----passing array to set --------

// let myNArray = [1,2,4,5,8,9,10];
// for (valo of myNArray){
//     log(valo);
// }

// //let myNset = new Set(myNArray);
// //log(myNset);

//-------Array from Set----------

// let myArray = [1,2,3,4];
// let mySet = new Set(myArray);

// mySet.add(3);
// // mySet.add({
// //     a:5,
// //     b:2
// // });
// // mySet.add({
// //     a:5,
// //     b:2
// // })
// let object = {
//     a : 5,
//     b :2
// }
// mySet.add(object);
// mySet.add(object);
// console.log(mySet);
// //console.log([...mySet]);
// //console.log(Array.from(mySet));

//--------------my convert to  unique set --------------
// let myArray = [1,3,2,34,4,4,5,5,6,6];

// let mySet = new Set(myArray);
// console.log([...mySet]);

// -----------union of sets ---------------

// let a = new Set([1,2,3,4,5]);
// let b = new Set([5,6,6,7])
// console.log(new Set([...a,...b]))

// let intersection = new Set([...a].filter((x)=>b.has(x)));
// console.log(intersection);

// let difference = new Set([...a].filter(x => !b.has(x)));
// console.log(difference);


//----------Weak set--------------



