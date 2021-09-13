//--------OOPS AND ECMASCRIPT 2015 OR ES6----------


//-------- oops projects ------------------------
// let myBioData = {
//   myName:"parvez Mahmud",
//   age:29,
//   getData(){
//     console.log(`This is ${myBioData.myName} and so ${myBioData.age}`);
//   }
// }
// console.log(myBioData.myName);
// myBioData.getData();
//----------Multiple object like object inside object-------
// let myBioData = {
//   myName:{
//     firstName:"parvez",
//     lastName:"Mahmud",
//   },
//   age:29,
//   getData(){
//     console.log(`This is ${myBioData.myName} and so ${myBioData.age}`);
//   }
// }
// console.log(myBioData.myName.lastName);
//-----------Window global objects------
//console.log(this.alert());

//----------this refer as window objects-----------------
// function myfunction(){
  // console.log(this);
//}
//myfunction();
//---------Ex-3---------
// let myNames ="parvez";
// function myNamess(){
//   console.log(this.myName);
// }
// myNamess();

// There "this" means name of object

// const obj = {
//   myAge : 26,
//   myName(){
//     console.log(this.myAge);
//   }
// }
// obj.myName();

// using flat arrow function 'this' means window object

// const obj ={
//   myAge:26,
//   myName:()=>{
//     console.log(this)
//   }
// }
// obj.myName();

//------- Es6 or ECMA SCRIPT 2015-----------
//--------Array desturing--------------
//const myBioData = ['parvez','mahmud',29];

// let myFname =myBioData [0];
// let myLName =myBioData [1];
// let myAge = myBioData[2];
// console.log(myAge);
//---------destructuring-------------
//let [myFname,myLName,myAge] = myBioData
//console.log(myAge);
// we can add value too
// let [myFName,myLName,myAge,myDegree = "M.sc"] = myBioData;
// console.log(myDegree);

//------object desturing--------------
// const myBioData = {
//   myFname : 'Parvez',
//   myLname : 'Mahmud',
//   myAge:30
// }
// let fname= myBioData.myFname;
// let lname = myBioData.myLname;
// let age = myBioData.myAge;
// console.log(age);
// //destructuring --
// let {myFname,myLname,myAge,myDegree = "M.sc"} = myBioData;
// console.log(myLname);

//------------object properties---------------

//Dynamic objects

// const myName = "parvez";
// const myBioData = {
//   [myName] : "hello how are you",
//   [20+6]   : "is my age",
// }
// console.log(myBioData);

// if keys and values are same then no need to write

// let myName= "parvez";
// let myAge = 26;
// const myBioData = {
//   //myName : myName,
//   //myAge : myAge
//   myName,myAge
// }
// console.log(myBioData);

//------spread operators-------------

let colors = ['red','green','blue','orange'];
let allcolors =[...colors,'yellow','Black'];
console.log(allcolors);