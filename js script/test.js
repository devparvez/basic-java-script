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

// const jokes = document.querySelector('#jokes');
// const jokeBtn = document.querySelector('#jokeBtn');
// const generateJokes = async() =>{
  
//   try{

//     const setHeader = {
//       headers:{
//         accept: "application/json"
//       }
//     }


//   const res = await fetch('https://icanhazdadjoke.com/',setHeader);
//   const data = await res.json();
//   jokes.innerHTML = data.joke;

//   }catch(err){
//     console.log(`the err is ${err}`);
//   }


  // const res = await fetch('https://icanhazdadjoke.com/',setHeader);
  // const data = await res.json;
  // jokes.innerHTML = data.joke;


//   .then( (res)=>(res.json())
//   ).then((data)=>{
//     jokes.innerHTML = data.joke;
//   }).catch((error)=>{
//     console.log(error);
//   })
// }

// jokeBtn.addEventListener('click',generateJokes);
// generateJokes();


//---------------2nd project thermo meter-------------------

// const tempload =() => {
//   let temp = document.getElementById('temp');
//   temp.innerHTML = "&#xf2cb";
//   setTimeout( ()=>{
//     temp.innerHTML = "&#xf2ca";
//     temp.style.color = "#f8b627";
//   },1000)
//   setTimeout( ()=>{
//     temp.innerHTML = "&#xf2c9";
//   },2000)
//   setTimeout( ()=>{
//     temp.innerHTML = "&#xf2c8";
//   },3000)
//   setTimeout( ()=>{
//     temp.innerHTML = "&#xf2c7";
//     temp.style.color = "#d63031";
//   },4000)

// }

// tempload();

// setInterval(tempload,5000)


//-------- 3rd project-----------------temperature conversion------------

// const temperaturecalc = () =>{
//   const numberTemp = document.getElementById('temp').value;
//   //console.log(numberTemp);
//   const tempSelected = document.getElementById('temp_diff');
  
//   const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
//   console.log(valueTemp);

//   let celToFah = (cel) =>{
//     let farhenhight = Math.round((cel*9/5)+32);
//     return farhenhight;
//   }
//   let FahToCel = (fah) =>{
//     let farhenhight = Math.round((fah-32)*5/9);
//     return farhenhight;
//   }
//   //console.log(valueTemp);
//   let result;
//   if(valueTemp == 'cel'){
//     result = celToFah(numberTemp);
//     document.getElementById('resultcontainer').innerHTML = `${result} celsius`;
//   }else{
//     result = FahToCel(numberTemp);
//     document.getElementById('resultcontainer').innerHTML = `${result} Ferhenheit`;
//   }
// }
//---------- 4th project ----------------counter-------

const counters = document.querySelectorAll(".counter");
counters.forEach((counter)=>{
  //console.log(counter);
  counter.innerHTML = 0;
  const updatecounter = () =>{
    const targetCount = +counter.getAttribute('data-target');
    //console.log(targetCount);
    const startingNum = Number(counter.innerHTML)
    const incr = targetCount/100;
    if(startingNum < targetCount){
      counter.innerHTML = `${startingNum+incr}`;
      setTimeout(updatecounter, 1000);
    }else{
      counter.innerHTML = targetCount;
    }
  }


  updatecounter();
})