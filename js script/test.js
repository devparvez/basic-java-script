// ----------------Modern javascript----------------------

// difference of var, let and const perents theke child e jabe let but child theke parents e jabena etai blockscope

// function biodata(){
//  let myFirstName = "parvez";
//  console.log(myFirstName);

//  if(true){
//    let myLastName = "mahmud";
//    console.log("inner "+myFirstName);
//    console.log("inner "+myLastName);
//  }
//  console.log("inner outer "+myLastName);
// }
// biodata();

//-------------------template literal-------------
//table of (8,9,10) with template literal

// for(let num = 1; num <= 20; num++){
//   let tableof = 8;
//   console.log(`${tableof} * ${num} = ${tableof*num}`);
// }

// ----------------------Default parameters of functions----
// function mult(a,b=5){
//   return a*b;
// }
// console.log(mult(3));
//--------Fat arrow function-----------

// const sum = () => {
//   let a = 5; let b = 6;
  
//   console.log(`the sum of 2 numbers are ${a + b}`);
// }
// sum();

// one line fat arrow function

// const sum = () => `the sum of two numbers are ${(a = 5)+(b =6)}`;
// console.log(sum());

//-------- Array-------

//let myFriends = ["parvez","mahmud","sohel","lila"];

//console.log(myFriends.length);
//console.log(myFriends[myFriends.length-1]);
//for(i = 0; i < myFriends.length;i++){
 // console.log(myFriends[i]);
//}

//-------------for in loop and for loop of---------------------
//let myFriends = ["parvez","mahmud","sohel","lila"];
// for(let khobis in myFriends){
//   console.log(khobi);
// }
// for(let elements of myFriends){
//   console.log(elements);
// }


// -----------for each loop----------

// let myFriends = ["parvez","mahmud","sohel","lila"];
// myFriends.forEach(function(element,index,array){
//   console.log(element+"index "+index+"array "+array)
// })

//forEach loop with Fat arrow function
let myFriends = ["parvez","mahmud","sohel","lila"];
myFriends.forEach((element,index,array) =>
console.log(element+"index "+index+"array "+array)

)
