// -------------How javascript works and asynchronous java script-----------------
//---------- Lexical scoping------------------
// const b = "Hello guyes";

// const LexiFirst = ()=>{
//   const a = "I am parvez";
//   const lexiSecond = () =>{
//     const c = "Thank you very much";
//     console.log(a+b+c);
//   }
//   lexiSecond();
// }
// LexiFirst();

//-----closure functions---------

// let outerFun = (a)=>{
//   let b = 7;
//   let innerFun = () =>{
//     let sum = a+b;
//     console.log(sum);
//   }
//   innerFun();
// }
// outerFun(5);
//--------- Better closure example---------------
// let outerFun = (a)=>{
//   let b = 7;
//   let innerFun = () =>{
//     let sum = a+b;
//     console.log("the sum of "+sum);
//   }
//   return innerFun;
// }
// let checkClosure = outerFun(5);
// console.dir(checkClosure);

// Asynchronys in javascript
// let fun2 = ()=>{
//   setTimeout(()=>{
//     console.log("function2 is called");
//   },2000)
// }
// const fun1 = () =>{
//   console.log('function 1 is called');
//   fun2();
//   console.log("function 1 is called again");
// }
// fun1();
// --------------curring function-------------

//  function sum(num1){

//   return function (num2){
//     return function(num3){
//       console.log(num1,num2,num3);
//     }
//   }
// }

// sum(5)(4)(3);
// const sum = (num1) =>(num2)=>(num3) =>console.log(num1+num2+num3);
// sum(5)(4)(3);

//-----------rest Api --------------
// const container = document.querySelector("#container");

// const request = new XMLHttpRequest();
// request.open('GET',"https://restcountries.eu/rest/v2/name/nepal/");
// request.send();

// // to get response
// request.addEventListener('load',function(){
//  // const Data = this.responseText
//  //console.log(this.responseText);
//  const [data] = JSON.parse(this.responseText);
//  //console.log(data.capital);

// })

//-----jSOn file----------------
// var my_object = {
//   key_1:"some text",
//   key_2:"true",
//   key_3: 5
// };
// var object_as_string = JSON.stringify(my_object);
// console.log(object_as_string);
// console.log(JSON.parse(object_as_string));

//-------- promise ,dad joke Api------

//GET https://icanhazdadjoke.com/

// const jokes = document.querySelector('#jokes');
// const jokeBtn = document.querySelector('#jokeBtn');
// const generateJokes = () =>{
//   const setHeader = {
//     headers:{
//       accept: "application/json"
//     }
//   }


//   fetch('https://icanhazdadjoke.com/',setHeader)
//   .then( (res)=>(res.json())
//   ).then((data)=>{
//     jokes.innerHTML = data.joke;
//   }).catch((error)=>{
//     console.log(error);
//   })
// }

// jokeBtn.addEventListener('click',generateJokes);
// generateJokes();

//-------------async function--------------------

const jokes = document.querySelector('#jokes');
const jokeBtn = document.querySelector('#jokeBtn');
const generateJokes = async() =>{
  
  try{

    const setHeader = {
      headers:{
        accept: "application/json"
      }
    }


  const res = await fetch('https://icanhazdadjoke.com/',setHeader);
  const data = await res.json();
  jokes.innerHTML = data.joke;

  }catch(err){
    console.log(`the err is ${err}`);
  }


  // const res = await fetch('https://icanhazdadjoke.com/',setHeader);
  // const data = await res.json;
  // jokes.innerHTML = data.joke;


//   .then( (res)=>(res.json())
//   ).then((data)=>{
//     jokes.innerHTML = data.joke;
//   }).catch((error)=>{
//     console.log(error);
//   })
}

jokeBtn.addEventListener('click',generateJokes);
generateJokes();