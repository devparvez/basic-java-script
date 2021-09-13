//-------------Es8 features 2017------------
//------string padding--------------
// let message = "parvez".padStart(40);
// console.log(message);
// let myAge = "27".padEnd(20);
// console.log(myAge);

//---object.values and object.entries======

// let person = {
//   name : "frd",
//   age : 45
// };
// console.log(Object.values(person));
// console.log(Object.entries(person));

// ------Es18--------------------
// const person = {name:"fred",age:87};
// const sperson = {ella:"sawon",...person};
// console.log(person);
// console.log(sperson);

//--------Flat array-------------

// const arr =[
//   ["Zone1", "zone2"],
//   ["Zone3", "zone4"],
//   ["Zone5", "zone6"],
//   ["Zone7", "zone8"],
//   ["Zone9", ["zone10","zone11"],["zone12","zone13"],["zone12","zone14"]]
// ];
// console.log(arr.flat(Infinity));

// ------fromentries used--------
// const person = {
//   Name:"fred",
//   age:33
// };
// const arrobj = Object.entries(person);
// console.log(arrobj);
// console.log(Object.fromEntries(arrobj));

//---------- BigInt----------------
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// const newNum = 9007199254740991n+12n;
// console.log(typeof newNum);
// console.log(newNum) 

//---Ecmascript use Strict moode
//------
// "use strict";
// let x = 3.14;
// console.log(x);