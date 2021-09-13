// const parentId = document.getElementById("parentid");
// const childId = document.getElementById("childid");

// let parentCall=()=>{
//   alert('parent div call');

// };
// let childCall=()=>{
//   alert('child div call');
//   //event.stopPropagation();

// }

// // in capturing event we use 3rd parameter true ------------
// //and by default it is false and called capturing phase------
// parentId.addEventListener('click',parentCall,true);
// childId.addEventListener('click',childCall,true);

//----- Create a calculator -----------

// Higher order function and call back function;
// const add = (a,b) =>{
//   return a+b;
// }
// const subs = (a,b) => {
//   return Math.abs(a-b);
// }
// const mult =(a,b) =>{
//   return a*b;
// }
// const calculator = (num1,num2,operator) =>{
//   return operator(num1,num2);
// }

// console.log(calculator(5,2,subs));

const add = (a,b)=>{
  return a+b;
}

const calculator = (num1,num2,operator)=>{
  return operator(num1,num2);
}
console.log(calculator(3,4,add));