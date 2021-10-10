// try{
//     alert("I am very bad");
//     alert(x);
//     alert("I am very godd");
    
   
//   }catch(err){

//     console.log(err);
//     console.log(err.name);
//     console.log(err.message)

    

//   }finally{
//     alert("this is very bad");
//   }

//---------- use throw --------------------

// document.querySelector('#Btn').addEventListener('click',function(){
//     let value = document.querySelector('#number').value;
//    // console.log(value);
//     try{
//         if(value < 5){
//             throw "the value is too low";
//         }else if(value > 10){
//             throw "the value is too high";
//         }

//     }catch(err){
//         console.log(err);

//     }
// })

// --------------------canvas--------------

// var c  = document.getElementById('myCanva');
// var ctx = c.getContext("2d");
// ctx.lineWidth = 3;
// ctx.strokeRect(10,10,380,280);
// ctx.strokeStyle = "black";
// ctx.fillStyle = "green";
// ctx.fillRect(12,12,376,276)

// var centerX = c.width/2;
// var centerY = c.height/2;

// ctx.beginPath();
// ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.stroke()

//-----------------BOM alert,confirm,prompt----------

// function delSome(){
//     let val = confirm("are you want to delete");
//     if(val){
//         console.log("deleted");
//     }else{
//         console.log("not deleted");
//     }
// }

// delSome()

// -----prompt---------------------
// function welMessage(){
//     var h1 = document.createElement('h1');

//     var text;

//     var name = prompt("Eneter your name");
//     if(name == "" || name == null){
//         text = "you have not enter your name";
//     }else{
//         text = "Welcome "+ name;
//     }
//     var text1 = document.createTextNode(text);
//     h1.appendChild(text1);
//     document.body.appendChild(h1);
// }

// welMessage();
//--------------rest parameter--------------------
// function restopa(a,b,...z){
//     console.log(a +"+"+ b + "+"+z);

// }
// restopa(20,30,10,20,23,23)

// ----------object literals-----------------------

// function addsumm(name,age){
//     return{
//         name,
//         age
//     }
// }
// //console.log(addsumm("parvez",29));

//  let message ={
//      body:function(){
//          return `this is not a robot`
//      }
//  }

//  console.log(message.body());
// // ------------consize method of object--------------
//  let mes = {
//      duty(){
//          return `this is a consize method`
//      }
//  }
//  console.log(mes.duty());

//  let spaceob = {
//      'body name'(){
//          return " look how using space in function name";
//      }
//  }
//  console.log(spaceob['body name']());

// let num = ['k','j','i','l'];

// for (let name of num){
//     console.log(name)

// }
// let numobj = {
//     name:"parvez",
//     age:30,
//     like:"Anika"
// }
// for (let numo in numobj){
//     //console.log(numo);
//     console.log(numobj[numo]);
// }

//----------------For and for each loop-------------
//let names = ["par","vez","hossain"];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// names.forEach(myfunction);
// function myfunction(x){
//     console.log(x);
// }

// names.forEach(function(x){
//     console.log(x);
// })

// let numbers = [10,20,30,40];
// let squreNumbers = [];
// // numbers.forEach(mynumbers);
// // function mynumbers(x){
// //     squreNumbers.push(x*x);

// // }
// //foreach with anonymous function
// numbers.forEach(function(x){
// squreNumbers.push(x*x);
// })
// console.log(squreNumbers);

// //For each  with fat arrow function
// numbers.forEach((x)=>{
// squreNumbers.push(x*x);
// })
// console.log(squreNumbers);

//---------- using multiple parameters in --------------

// let numbers=[10,20,30,40];
// console.log(numbers);
// numbers.forEach(function(x,index,arr){
//     arr[index] = x + 5;
// })
// console.log(numbers);

//------------keep square of a numbers to a new array

// let numbers = [10,20,30,40,50];

// let squarnumb = [];
// numbers.forEach(function(x){
//     squarnumb.push(x*x);
// })
// console.log(squarnumb);

//-----------------Map return array------------------------

// let numb = [2,3,5,6,4];
// let squareNum = numb.map(function(i){
//     return i*i;
// })

// console.log(squareNum);

// let forFNumb = [10,30,40,50,60,70];
//  let fillNumb=forFNumb.filter(function(y){
//  return y > 30;
// })
// console.log(fillNumb);

// let message2 = () => "i am meassage 2";
// console.log(message2());

// let add1 = (a,b) => a +b;
// console.log(add1(30,40));

//-------------arrow function detail--------------

// const students = [
//     {
//         id:101,
//         name:"parvez mahmud",
//         cgpa:2.65

//     },
//     {
//         id:102,
//         name:"Fatema",
//         cgpa:3.65

//     },
//     {
//         id:103,
//         name:"Rabeaya",
//         cgpa:3.45

//     },
//     {
//         id:104,
//         name:"Julie",
//         cgpa:4.45

//     },
// ]

// function studentsName(){
//     return students.filter(function(x){
//         return x.cgpa > 3;
//     }).map(function(y){
//        return y.name;
//     });
// }
// console.log(studentsName())

// let studentsName1 = ()=> students.filter((x)=>x.cgpa > 3).map((y)=>y.name);
// console.log(studentsName1());


//-----------Array destructuring-----------
// let numbers = [10,20,30,40,50];
// //[num1,num2,num3,num4,num5] = numbers;
// [num1,num2,...num3] = numbers;
// console.log(num3);
// let  a = 10;
// let b = 20;
// [a,b] = [b,a]
// console.log(`${a} and ${b}`);

// const studentInfo = {
//     id:101,
//     fullName:"parvez",
//     gpa:3.92,
//     language : {
//         nativ:"bangla",
//         beginer:"engleish"
//     }
// }
// const {id,fullName,gpa,language}=studentInfo;
// console.log(id);
// console.log(language.nativ);

// const studentInfo=({id,name})=>{

//     console.log(`${id},and ${name}`)

// }

// let student = {
//     id:101,
//     name:"parvez",
//     cgpa:3.92
// }

//studentInfo(student);

//---------Array.Find-method------------

// const numbers = [3,14,10,20,30,40,50,60];
// // firstName = numbers.find((x)=> x % 2 == 0);
// // console.log(firstName);
// // firstNameIndex = numbers.findIndex(x => x%2 == 0);
// // console.log(firstNameIndex);

// function feven(value,index,array){
//     if(value % 2 == 0){
//         return value;
//     }
// }
//  const fEven = numbers.find(feven);
//  console.log(fEven);

//  const stundeIn = [
//      {
//          id:103,
//          name:"parvez",
//          gpa:2.9
//      },
//      {
//         id:104,
//         name:"Mahmud",
//         gpa:2.9
//     },
//     {
//         id:105,
//         name:"Gandi",
//         gpa:4.9
//     },
//     {
//         id:106,
//         name:"Bath",
//         gpa:5
//     }
//     ]
//     console.log(stundeIn.find((x) => x.gpa> 3));

//-------------String method,starts with and includes metho

// const str = "He is good boy";

// let search = str.startsWith("good",6);
// let sear = str.endsWith("boy");
// let sea = str.includes("is");
// console.log(sea);
// console.log(sear);
// console.log(search);

//---------- Import and export,class-------------

// import {text,setText} from './myModule.js'
// console.log(text)
// setText("Good bye from from es6");
// console.log(text);

// class Student {
//     constructor(id,name){
//         this.id = id;
//         this.name = name;
//     }
//     set studentName(name){
//         this.name = name;
//     }
//     get studentInfo(){
//         return this.name + this.id;
//     }
// }

// let s1 = new Student(101,"parvez");



// console.log(s1);
// console.log(s1.id)
// console.log(s1.name)
// s1.studentName="parvez mahmud";
// console.log(s1.name)
// console.log(s1.studentInfo);


//------------Asynchronous and synchronous programming----------------
// const taskone = ()=>{
//     console.log("Task1");
// } 
// // const dataLoading = ()=>{
// //     console.log(" task two data is loading");
// // }

// const tasktwo = ()=>{
//     setTimeout(()=>{
//         console.log("task two data is loading")
//     },2000)
//     //console.log("Task2");
// } 
// const taskThree = ()=>{
//     console.log("Task3");
// } 
// const taskFour = ()=>{
//     console.log("Task4");
// }
//  const taskFive = ()=>{
//     console.log("Task5");
// } 
// // console.log("t")
// // console.log("Task2"); 
// // console.log("Task3"); 
// // console.log("Task4"); 
// // console.log("Task5");
// taskone();
// tasktwo();
// taskThree();
// taskFour();
// taskFive();

//---------callBack and higher order function------------
// function square(x){
//     console.log(`Square of ${x} is ${x*x}`)
// }
// //square(5);
// // const y = square;
// // y(5);
// function higherorderfunction(numb,calback){
//     calback(numb)

// }
// higherorderfunction(6,square);

// const taskone = (callback)=>{
//          console.log("Task1");
//          callback();
//      } 
    
    
//     const tasktwo = (callback)=>{
//         callback();
//         setTimeout(()=>{
//              console.log("task two data is loading")
//          },2000)
        
         
//      } 
//      const taskThree = (callback)=>{
//          console.log("Task3");
//          callback();
//      } 
//     const taskFour = (callback)=>{
//         console.log("Task4");
//         callback();
//      }
//       const taskFive = ()=>{
//          console.log("Task5");
         
//      } 
//      taskone(function f1(){
//          tasktwo(function f2(){
//              taskThree(function f3(){
//                  taskFour(function f4(){
//                      taskFive();
//                  })
//              });
//          });
//      });


//--------------promises------------------------
// console.log("welcome");

// // How to create promises
// const promise1 = new Promise((resolve,reject)=>{
//  let completepromise = true;
//  if(completepromise){
//      resolve("completed promise 1");
//  }else{
//      reject(new Error('promise not completed'));
//  }

// })
// const promise2 = new Promise((resolve,reject)=>{

//     resolve('completed promise 2');

// })
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve (" completed promise 3")
//     },2000)

// })
// const promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve (" completed promise 4")
//     },1000)

// })

// // promise1.then(res => {
// //     console.log(res);
// // })
// // .catch(err =>{
// //     console.log(err.message);
// // });

// // promise2.then((res)=>{
// //     console.log(res);
// // })
// Promise.all([promise1,promise2])
// .then(([res1,res2])=>console.log(res1,res2));

// Promise.race([promise3,promise4])
// .then((res)=>console.log(res));



// //console.log(promise1)
// console.log("End");


// task one return

// console.log("welcome");

// const taskOne = () =>{
//     return new Promise((resolve,reject)=>{
//         resolve('task one is  completed');
//     })
    
// }
// const taskTwo = () =>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve('task Two is completed');
//        },2000)
//     })
    
// }
// const taskThree = () =>{
//     return new Promise((resolve,reject)=>{
//         reject('task Three is  not  completed');
//     })
    
// }
// const taskFour = () =>{
//     return new Promise((resolve,reject)=>{
//         resolve('task Four is  completed');
//     })
    
// }
// const taskFive = () =>{
//     return new Promise((resolve,reject) => {
//         resolve('task Five is completed');
//     })
    
// }

// taskOne()
// .then((res)=> console.log(res))
// .then(taskTwo)
// .then((res)=> console.log(res))
// .then(taskThree)
// .then((res)=> console.log(res))
// .then(taskFour)
// .then((res)=> console.log(res))
// .catch(err=> console.log(err));

// async function callAllTheTask(){
//     try{
//     const t1 = await taskOne();
//     console.log(t1); 
//     const t2 = await taskTwo();
//     console.log(t2);
//     const t3 = await taskThree();
//     console.log(t3);
//     const t4 = await taskFour();
//     console.log(t4);
//     }catch(err){
//         console.log(err)
//     }
    
// }


// callAllTheTask();

//  console.log("End");

//--------------Api request wiht xmlHttpRequest----------


// const makerequest = (method,url,data)=>{
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//     console.log(xhr);
//     xhr.open(method,url);

//     xhr.setRequestHeader('content-type','application/json')

//     xhr.onload=()=>{
//         let data = xhr.response;
//         console.log(JSON.parse(data));
//     }
//     xhr.onerror=()=>{
//         console.log("error is here");
//     }

//     xhr.send(JSON.stringify(data));

//     })
// }

// const getData = ()=>{
//     makerequest('GET','https://jsonplaceholder.typicode.com/posts').then((res)=>console.log(res));
    
// }
// const sendData = ()=>{
//     makerequest('POST','https://jsonplaceholder.typicode.com/posts/',{
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//     })   
// }
// const updateData = ()=>{
//     makerequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
//         id: 1,
//         title: 'fooma',
//         body: 'barma',
//         userId: 1,
//     })   
// }
// const updateSingleData = ()=>{
//     makerequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
       
//         title: 'foomabar',
        
//     })   
// }
// const deletee = ()=>{
//     makerequest('DELETE','https://jsonplaceholder.typicode.com/posts/1') ;  
// }
// getData();
// sendData();
// updateData();
// updateSingleData();
//deletee();


//----------------API request with fetch method-------------
// console.clear();

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method:"PUT",
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     body:JSON.stringify({
//     id:1,
//     title: 'fooma',
//     body: 'barma',
//     userId: 1,
//     }),
// })
// .then((res)=>{
//     if(!res.ok){
//         const message = `the error is: ${res.status}`;
//         throw new Error (Message);
//     };
// return res.json();
// })
// .then((res)=> console.log(res))
// .then((err)=>console.log(err))

//--------API request with async await method-------------

// const makeRequest = async(url,config)=>{
//     const res = await fetch(url,config);
//     if(!res.ok){
//         const message = `the new erro:${res.status}`;
//         throw new Error(message);
//     }
//     const data = await res.json();
//     return data;
// }
// const getData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then(res => console.log(res))
//     .catch((err)=>console.log(err));

// }
// const sendData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then(res => console.log(res))
//     .catch((err)=>console.log(err));

// }
// const updateData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'PUT',
//         body: JSON.stringify({
//             id:1,
//           title: 'fooma',
//           body: 'barma',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then(res => console.log(res))
//     .catch((err)=>console.log(err));

// }
// const updatesingleData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'PATCH',
//         body: JSON.stringify({
          
//           title: 'fooma Yes',
          
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then(res => console.log(res))
//     .catch((err)=>console.log(err));

// }

// const deleteData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'DELETE',
//       })
//     .then(res => console.log(res))
//     .catch((err)=>console.log(err));

// }
// deleteData();
//updateData();
//sendData();
//getData();

//------------Axios method-----------------

console.clear();
//console.log(window);
// axios.get("https://jsonplaceholder.typicode.com/posts"
// ).then((res)=>console.log(res.data)).then((err)=>console.log(err));

//-------axios postmethod--------------------
// axios.post("https://jsonplaceholder.typicode.com/posts",{  method: 'POST',
// body: JSON.stringify({
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// }),
// }).then((res)=>console.log(res.data)).then((err)=>console.log(err));

//---------------------axios put or update method------------

// axios.put("https://jsonplaceholder.typicode.com/posts/1",{  method: 'PUT',
// body: JSON.stringify({
//   id: 1,
//   title: 'fooma',
//   body: 'barma',
//   userId: 1,
// }),
// }).then((res)=>console.log(res.data)).then((err)=>console.log(err));

//------------axios patch method----------------------
// axios.patch("https://jsonplaceholder.typicode.com/posts/1",{  
// body: JSON.stringify({
 
//   body: 'barmasdfsfdfsdfsfsdfsfsdfparvez',
 
// }),
// }).then((res)=>console.log(res.data)).then((err)=>console.log(err));

//---------------axios delete method--------------
// axios.delete("https://jsonplaceholder.typicode.com/posts/1"
// ).then((res)=>console.log(res.data)).then((err)=>console.log(err));

// -----------------axios async and await method------------
// const makeRequest= async(config)=>{
//     return await axios(config);
// }
// const deleteData = () =>{
//     makeRequest({
//         url:"https://jsonplaceholder.typicode.com/posts/1",
//         method:"delete"  
//     }).then((res)=>console.log(res.data)).catch((err)=>console.log(err));
// };
// deleteData();
// const updateData = () =>{
//     makeRequest({
//         url:"https://jsonplaceholder.typicode.com/posts/1",
//         method:"put",
//         data:JSON.stringify({
//             id:1,
//             title: 'fooma',
//             body: 'barma',
//             userId: 1,
//           }),
//     }).then((res)=>console.log(res.data)).catch((err)=>console.log(err));
// };
// updateData();
// const createData = () =>{
//     makeRequest({
//         url:"https://jsonplaceholder.typicode.com/posts",
//         method:"post",
//         data:JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//           }),
//     }).then((res)=>console.log(res)).catch((err)=>console.log(err));
// };
//createData()
// const getData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1').then((res)=>console.log(res)).catch((err)=>console.log(err));
// };
// getData()

//--------------------Api using jquery--------------

console.log(window);
const makeRequest = async (url,method,data) =>{

    try{
        const result =await $.ajax({
            url:url,
            method:method,
            data:data
        });
       return result;
    }catch(err){
        console.log(err);
    }
    
    
}
const getData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',"PUT",{
    body: JSON.stringify({
      id: 1,
      title: 'fooma',
      body: 'barma',
      userId: 1,
    }),})
    .then((res)=>console.log(res));
}

getData();







